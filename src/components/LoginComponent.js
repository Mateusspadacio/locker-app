import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { login } from '../store/actions/login';

class LoginComponent extends Component {

    async onLogin() {
        const { login } = this.props;
        await login();
        console.log(this.props)
    }
    // <Button testID="home_button" title="Home" onPress={() => this.props.navigation.navigate('Home')} /> 
    render() {
        return (
            <View>
                <Text>Login Component</Text>
                <TextInput testID="user_input"/>
                <Button title="Logar" onPress={() => this.onLogin()} />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { login })(LoginComponent);
