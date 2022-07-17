import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useEffect, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useSelector } from 'react-redux'
import tw from 'twrnc';
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../slices/navSlice';
var axios = require('axios');
import { GOOGLE_MAPS_API_KEY } from '@env'

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


export default function Map() {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination)
  const mapRef = useRef(null)

  useEffect(() => {
    if (!origin || !destination) return;

    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }
    }, [!origin, !destination])
  })
  useEffect(() => {
    if (!origin || !destination) return;
    const getTravelTime = async () => {
      var config = {
        method: 'get',
        url: `https://maps.googleapis.com/maps/api/distancematrix/json?
          origins=${origin?.description}&destinations=${destination?.description}&
          units=imperial&key=${GOOGLE_MAPS_API_KEY}`
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .then((data) => {
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    getTravelTime();
  }, [!origin, !destination,
    //GOOGLE_MAPS_API
  ])
  return (
    <View styles={tw`flex-1 bg-white items-center`}>
      <MapView
        // style ={tw`flex`}
        style={styles.map}
        ref={mapRef}
        mapType="mutedStandard"
        initialRegion={{
          latitudeDelta: LATITUDE_DELTA,
          latitude: origin?.location.lat,
          longitude: origin?.location.lang,          
          longitudeDelta: LONGITUDE_DELTA,
        }}
      >
        {origin?.location && (
          <Marker
            coordinate={{
              latitude: origin?.location.lat,
              longitude: origin?.location.lng,
            }}
            title="Origin"
            description={origin?.description}
            identifier="origin"
          />

        )}
        {destination?.location && (
          <Marker
            coordinate={{
              latitude: destination?.location.lat,
              longitude: destination?.location.lng,
            }}
            title="Destination"
            description={destination?.description}
            identifier="Destination"
          />

        )}

      </MapView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
  map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
  },
});