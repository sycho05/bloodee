import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginComponent from'../screen/RootStack/LoginComponent';
import SignUpComponent from'../screen/RootStack/SignUpComponent';
import SwiperComponent from'../screen/RootStack/SwiperComponent';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="SwiperScreen" component={SwiperComponent} options={{headerShown:false,}} />
        <Stack.Screen name="LoginScreen" component={LoginComponent} options={{headerShown:false,}} />
        <Stack.Screen name="SignUpScreen" component={SignUpComponent} options={{headerShown:false,}} />
      </Stack.Navigator>
  );

}

export default RootStack;
