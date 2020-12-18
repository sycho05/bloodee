//RootStack (Menu Awal Sebelum User Login)

//Import Library
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//Import Screen
import LoginComponent from '../screen/RootStack/LoginComponent';
import SignUpComponent from '../screen/RootStack/SignUpComponent';
import SwiperComponent from '../screen/RootStack/SwiperComponent';

//StackNavigator Menu Awal
const Stack = createStackNavigator();
const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SwiperScreen"
        component={SwiperComponent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginComponent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpComponent}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
