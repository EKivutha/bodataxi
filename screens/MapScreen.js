import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { ProviderPropType } from 'react-native-maps';
import Map from '../components/Map';
import tw from 'twrnc';
import { createStackNavigator } from '@react-navigation/stack';
import RideOptions from '../components/RideOptions';
import NavigationCard from '../components/NavigationCard';
import MapApp from '../components/Maptest';

const MapScreen = () => {
  const Stack = createStackNavigator()

  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name='NavigateCard'
            component={NavigationCard}
            options={
              { headerShown: false }
            }
          />
          <Stack.Screen
            name='RideOptions'
            component={RideOptions}
            options={
              { headerShown: false }
            }
          />
        </Stack.Navigator>
      </View>
    </View>
  );
}


export default MapScreen
