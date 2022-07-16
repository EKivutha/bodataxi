import { View, Text } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useSelector } from 'react-redux'
import tw from 'twrnc';
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../slices/navSlice';
var axios = require('axios');
import { GOOGLE_MAPS_API_KEY } from '@env'


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
        ref={mapRef}
        mapType="mutedStandard"
        initialRegion={{
          latitude: origin?.location.lat,
          longitude: origin?.location.lang,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
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