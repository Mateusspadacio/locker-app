import React, { Component } from 'react';
import { View } from 'react-native';

import MenuComponent from './MenuComponent';

export default class HomeComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MenuComponent />
      </View>
    )
  }
}
