import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';

import { fetchNearbyLockers } from '../store/actions/map';

const latitudeDelta = 0.0922;
const longitudeDelta = 0.0421;

class MapComponent extends Component {

  state = {
    mapLoaded: false
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        await this.props.fetchNearbyLockers(position.coords.longitude, position.coords.latitude);
        this.setState({ position, mapLoaded: true });
      },
      (error) => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  renderLockers() {
    const { map } = this.props;
    if (!map || !map.lockers) return null;

    return map.lockers.map(({ _id, long, lat }) => (
      <MapView.Marker
        key={_id}
        coordinate={{
          latitude: lat,
          longitude: long,
          latitudeDelta,
          longitudeDelta
        }}
      />
    ));
  }

  render() {
    const { position, mapLoaded } = this.state;
    if (!mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size='large' />
        </View>
      );
    }

    return (
      <MapView
        style={{ flex: 1 }}
        onRegionChange={(r) => console.log(r)}
        initialRegion={{
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta,
          longitudeDelta,
        }}
      >
        <MapView.Marker
          coordinate={{
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta,
            longitudeDelta
          }}
        />
        {this.renderLockers()}
      </MapView>
    );
  }
}

const mapStateToProps = (props) => {
  return props;
}

export default connect(mapStateToProps, { fetchNearbyLockers })(MapComponent);