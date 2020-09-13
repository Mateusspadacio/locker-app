import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MapComponent from './MapComponent';
import ReserveComponent from './ReserveComponent';
import ProfileComponent from './ProfileComponent';

const styles = StyleSheet.create({
    navigator: { 
        backgroundColor: 'black', 
        paddingTop: 5 
    },
    label: {
        fontSize: 15, 
        fontWeight: '200'
    }
  });

const Tab = createBottomTabNavigator();

export default class MenuComponent extends Component {

    icon({ focused, name }) {
        const color = focused ? 'orange' : 'white';
        return <Icon size={30} name={name} color={color}/>;
    }

    render() {
        return (
            <Tab.Navigator tabBarOptions={{ style: styles.navigator, labelStyle: styles.label, activeTintColor: 'orange' }}>
                <Tab.Screen options={{ tabBarIcon: ({ focused }) => this.icon({ focused, name: 'home' }) }} name="Home" component={MapComponent} />
                <Tab.Screen options={{ tabBarIcon: ({ focused }) => this.icon({ focused, name: 'book' }) }}  name="Reservas" component={ReserveComponent} />
                <Tab.Screen options={{ tabBarIcon: ({ focused }) => this.icon({ focused, name: 'person' }) }}  name="Perfil" component={ProfileComponent} />
            </Tab.Navigator>
        )
    }
}

