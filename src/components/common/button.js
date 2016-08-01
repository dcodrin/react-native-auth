import React from 'react';
import {TouchableHighlight, StyleSheet, Text} from 'react-native';

class Button extends React.Component {
    render(){
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor={'gray'}
                onPress={this.props.onPress}
            >
                <Text style={styles.buttonText}>
                    {this.props.text}
                </Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        borderColor: 'black',
        marginTop: 10
    },
    buttonText: {
        flex: 1,
        fontSize: 20
    }
});

export default Button;