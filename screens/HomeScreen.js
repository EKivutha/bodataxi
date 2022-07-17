import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import tw from 'twrnc';
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import {setOrigin, setDestination} from '../slices/navSlice'
// import 'dotenv/config'

import {GOOGLE_MAPS_API_KEY} from '@env'

export default HomeScreen = () => {
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            {/* <ActivityIndicator animating='false'/> */}
            <View>
                <Image
                    style={{
                        width: 120,
                        height: 100,
                        resizeMode: "contain"
                    }}
                    source={require('../assets/boda1.png')}
                />
            </View>
            <GooglePlacesAutocomplete
                placeholder='Where from'
                styles={tw`flex text-sm`}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                    dispatch(setOrigin(
                        {
                            location: details.geometry.location,
                            description: data.description,
                        }
                    ))
                }}
                query={{
                    key: `${GOOGLE_MAPS_API_KEY}`,
                    language: 'en',
                }}
                fetchDetails={true}
                returnKeyType ={"Search"}
                minLength = {2}

                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
            />
            <NavOptions />

        </SafeAreaView>
    );
};


