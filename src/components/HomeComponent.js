import React, { Component } from 'react';
import { View, Text } from 'react-native';

import MapComponent from './MapComponent';

export default class HomeComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapComponent />
      </View>
    )
  }
}
