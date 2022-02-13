import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { ProviderPropType } from 'react-native-maps';


class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      coordinates: [
        {
          longitude: -122.442753,
          latitude: 37.79879,
        },
        {
          longitude: -122.424728,
          latitude: 37.801232,
        },
        {
          longitude: -122.422497,
          latitude: 37.790651,
        },
        {
          longitude: -122.440693,
          latitude: 37.788209,
        },
      ],
      center: {
        longitude: -122.4326648935676,
        latitude: 37.79418561114521,
      },
    };

  };


  onRegionChange(region) {
    this.setState({ region });
  }
  render() {
    return (
      <MapView
        provider={this.props.provider}
        style={styles.map}
        region={this.state.region}
        onRegionChange={this.onRegionChange}
      />
    );
  }
}
MapScreen.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen
