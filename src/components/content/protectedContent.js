import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import firebase from '../firebase/index';

class Content extends React.Component {

    constructor() {
        super();
        this.state = {
            user: ''
        };
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                // User is signed in.
                //console.log(user);
                this.setState({user: user.email});
            } else {
                // No user is signed in.
                this.setState({user: ''});
            }
        });
    }

    render(){
        if(!this.state.user) {
            return <Text style={styles.container}>Loading Data</Text>;
        }
        return (
            <View style={styles.container}>
                <Text>Welcome to this app! You are logged in as {this.state.user}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Content;