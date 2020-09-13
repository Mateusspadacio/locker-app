import React, { Component } from 'react';
import { View } from 'react-native';

import MapComponent from './MapComponent';
import MenuComponent from './MenuComponent';

export default class HomeComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapComponent />
        <MenuComponent />
      </View>
    )
  }
}
