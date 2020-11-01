import React from 'react';
import Navigation from './Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar translucent backgroundColor="transparent" />
        <Navigation/>
      </NavigationContainer>
    </>
  );
}
