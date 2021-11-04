import React from 'react';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { StatusBar } from 'expo-status-bar';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <HomeScreen />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </Provider>

  );
}

