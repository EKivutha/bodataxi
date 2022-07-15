import { View, Text } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useSelector } from 'react-redux'
import { selectDestination, selectOrigin } from '../slices/navSlice'

export default function Map() {
    const origin = useSelector(selectOrigin);
    const destination = useSelctor(selectDestination)
    const mapRef = useRef(null)

    useEffect(()=> {
      if (!origin || !destination) return;

      mapRef.current.fitToSuppliedMarkers(['origin', 'destination'],{
        edgePadding: {top:50, right:50, bottom:50, left:50}
      }, [origin, destination])
    })
  return (
    <View>
      <MapView
      style ={tw`flex`}
      ref = {mapRef}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lang,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      >
        {origin.location && (
            <Marker
            coordinate={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
            }}
            title = "Origin"
            description={origin.description}
            identifier = "origin"
            />
            
        )}
        {destination.location && (
            <Marker
            coordinate={{
                latitude: destination.location.lat,
                longitude: destination.location.lng,
            }}
            title = "Destination"
            description={destination.description}
            identifier = "Destination"
            />
            
        )}
        
      </MapView>
    </View>
  )
}