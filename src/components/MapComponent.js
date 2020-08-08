import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { ActivityIndicator, View } from 'react-native';

export default class MapComponent extends Component {

  state = {
    mapLoaded: false
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
         const initialPosition = JSON.stringify(position);
         console.log(initialPosition)
         this.setState({ initialPosition });
      },
      (error) => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
   );
    this.setState({ mapLoaded: true });
  }

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size='large' />
        </View>
      );
    }

    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <MapView.Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421}}
            title='title'
            description='sdfsdfs'
         />
      </MapView>
    );
  }
}