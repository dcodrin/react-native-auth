import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

import Button from '../common/button';
import firebase from '../firebase/index';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            errorMessage: ''
        };

        this.onPress = this.onPress.bind(this);
        this.onSignInPress = this.onSignInPress.bind(this);
    }

    onPress() {

        if (this.state.password && this.state.confirmPassword) {
            if (this.state.confirmPassword === this.state.password) {
                firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                    .then(user => {
                        //console.log(user);
                        this.props.navigator.immediatelyResetRouteStack([{name: 'Content'}]);
                    })
                    .catch(error => {
                        console.log(error);
                        // Handle Errors here.
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        this.setState({errorMessage});

                    });
            } else {
                return this.setState({
                    errorMessage: 'Passwords must match'
                });
            }
        } else {
            return this.setState({
                errorMessage: 'Please confirm your password'
            });
        }
    }

    onSignInPress() {
        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.greet}>
                    Sign Up!
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

                <Text style={styles.label}>Confirm Password:</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={confirmPassword => this.setState({confirmPassword})}
                    value={this.state.confirmPassword}
                />
                <Text style={[styles.errorMessage, styles.label]}>{this.state.errorMessage}</Text>
                <Button text={'Sign Up'} onPress={this.onPress}/>
                <Button text={'Sign in with existing account'} onPress={this.onSignInPress}/>
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

export default SignUp;
