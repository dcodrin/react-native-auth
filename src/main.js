import React from 'react';
import {StyleSheet, Navigator} from 'react-native';

import SignIn from './components/auth/signin.js';
import SignUp from './components/auth/signup.js';
import Content from './components/content/protectedContent';

const ROUTES = {
    SignIn,
    SignUp,
    Content
};

class Main extends React.Component {

    constructor() {
        super();

        this.renderScene = this.renderScene.bind(this);
    }

    renderScene(route, navigator) {
        const Component = ROUTES[route.name];
        return <Component route={route} navigator={navigator}/>;
    }

    render() {
        return (
            <Navigator
                style={styles.container}
                initialRoute={{name: 'SignIn'}}
                renderScene={this.renderScene}
                configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromRight}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Main;