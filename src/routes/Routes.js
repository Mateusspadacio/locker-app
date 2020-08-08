import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeComponent from '../components/HomeComponent';
import LoginComponent from '../components/LoginComponent';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={LoginComponent}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeComponent}
                    options={{ title: 'Welcome' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;