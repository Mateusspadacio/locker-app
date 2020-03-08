import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import { login } from '../store/actions/login';

class LoginComponent extends Component {

    async onLogin() {
        const { login } = this.props;
        await login();
        console.log(this.props)
    }

    render() {
        return (
            <View>
                <Text>Login Component</Text>
                <Button title="Home" onPress={() => this.props.navigation.navigate('Home')} />
                <Button title="Logar" onPress={() => this.onLogin()} />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { login })(LoginComponent);
