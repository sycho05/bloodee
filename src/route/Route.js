import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import {AuthContext, AuthProvider} from '../auth/AuthProvider';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from '../navigation/AppStack';
import RootStack from '../navigation/RootStack';
import NavbarComponent from '../navigation/NavbarComponent';
import LoginComponent from'../screen/LoginComponent';
import SignUpComponent from'../screen/SignUpComponent';
import SwiperComponent from'../screen/SwiperComponent';

const Route = () => {
  const {user, setUser} = useContext(AuthContext);
  const {initializing, setInitializing} = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if(initializing) return null;

  if (!user) {
    return (
      <NavigationContainer>
        <RootStack/>
      </NavigationContainer>
    );
  }

  return (
      <NavigationContainer>
        <NavbarComponent/>
      </NavigationContainer>
  );

}

export default Route;