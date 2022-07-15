import React from 'react';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen'
import { StatusBar } from 'expo-status-bar';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EatsScreen from './screens/EatsScreen';
import MenuScreen from './screens/MenuScreen';
import { KeyboardAvoidingView } from 'react-native-web';
import { Platform } from 'react-native';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
          behavio4 r={Platform.OS ==="ios"? "padding":"height"}
          style = {{flex: 1}}
          keyboardVerticalOffset = {Platform.OS == 'ios' ? -64 : 0}
          />
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component= {HomeScreen}
              options={{
                headerShown: false,
              }}
           />
            <Stack.Screen
              name="MapScreen"
              component= {MapScreen}
              options={{
                headerShown: false,
              }}
           />
           <Stack.Screen
              name="EatsScreen"
              component= {EatsScreen}
              options={{
                headerShown: false,
              }}
           />
           <Stack.Screen
              name="MenuScreen"
              component= {MenuScreen}
              options={{
                headerShown: false,
              }}
           />
          </Stack.Navigator>
          {/* <HomeScreen />
          <StatusBar style="auto" /> */}
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>

  );
}

