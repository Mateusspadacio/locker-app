import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';

import { fetchNearbyLockers } from '../store/actions/map';

const latitudeDelta = 0.0922;
const longitudeDelta = 0.0421;

class MapPage extends Component {

  state = {
    mapLoaded: false
  }

  fetchLockersOnChange({ latitude, longitude }) {
    this.props.fetchNearbyLockers(longitude, latitude);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
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
      >
        <Icon size={30} name='lock'/>
      </MapView.Marker>
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
        onRegionChangeComplete={(position) => this.fetchLockersOnChange(position)}
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
        >
          <Icon size={40} name='person-pin-circle'/>
        </MapView.Marker>
        {this.renderLockers()}
      </MapView>
    );
  }
}

const mapStateToProps = (props) => {
  return props;
}

export default connect(mapStateToProps, { fetchNearbyLockers })(MapPage);