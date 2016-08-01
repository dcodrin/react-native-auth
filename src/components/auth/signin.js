import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

import Button from '../common/button';
import firebase from '../firebase/index';

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            errorMessage: ''
        };

        this.onPress = this.onPress.bind(this);
        this.onSignUpPress = this.onSignUpPress.bind(this);
    }

    onPress() {

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(user => {
                console.log(user);
                this.props.navigator.immediatelyResetRouteStack([{name: 'Content'}]);
            })
            .catch(error => {
                console.log(error);
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                this.setState({errorMessage});
            });
    }

    onSignUpPress() {
        this.props.navigator.push({name: 'SignUp'});
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.greet}>
                    Please sign in
                </Text>

                <Text style={styles.label}>email:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={email => this.setState({email})}
                    value={this.state.email}
                />

                <Text style={styles.label}>Password:</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={password => this.setState({password})}
                    value={this.state.password}
                />
                <Text style={[styles.errorMessage, styles.label]}>{this.state.errorMessage}</Text>
                <Button text={'Sign In'} onPress={this.onPress}/>
                <Button text={'Register a new account'} onPress={this.onSignUpPress}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    greet: {
        fontSize: 30,
        marginBottom: 10
    },
    input: {
        padding: 4,
        height: 40,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 5,
        margin: 5,
        width: 200,
        alignSelf: 'center'
    },
    label: {
        fontSize: 18
    },
    errorMessage: {
        color: 'red'
    }
});

export default SignIn;
