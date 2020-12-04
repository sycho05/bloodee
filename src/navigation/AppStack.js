import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeComponent from '../screen/HomeComponent';
import NavbarComponent from '../navigation/NavbarComponent';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="NavbarComponent" component={NavbarComponent} options={{headerShown:false,}} />
        <Stack.Screen name="HomeScreen" component={HomeComponent} options={{headerShown:false,}} />
      </Stack.Navigator>
  );

}

export default AppStack;
