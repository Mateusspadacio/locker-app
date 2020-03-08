import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class LoginComponent extends Component {
    render() {
        return (
            <View>
                <Text>Login Component</Text>
                <Button title="Home" onPress={() => this.props.navigation.navigate('Home')} />
            </View>
        )
    }
}