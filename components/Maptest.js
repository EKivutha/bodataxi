import React, { useEffect, useRef } from 'react'
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useSelector } from 'react-redux'
import tw from 'twrnc';
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../slices/navSlice';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function MapApp() {
    const mapRef = useRef(null)
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination)
    return (
        <View style={styles.container}>
            <MapView 
            style={styles.map}
            ref={mapRef}
            mapType="mutedStandard"
            initialRegion={{
              latitudeDelta: LATITUDE_DELTA,
              latitude: origin?.location.lat,
              longitude: origin?.location.lang,          
              longitudeDelta: LONGITUDE_DELTA,
            }}
            />
        </View>
    );
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