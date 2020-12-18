//Switching Stack berdasaran autentikasi user

//Import Library
import React, {useContext, useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {AuthContext} from '../auth/AuthProvider';
import {NavigationContainer} from '@react-navigation/native';

//Import Stack
import RootStack from '../navigation/RootStack';
import AppStack from '../navigation/AppStack';

const Route = () => {
  const {user, setUser} = useContext(AuthContext);
  const {initializing, setInitializing} = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  //Menampilkan RootStack ketika user belum login
  if (!user) {
    return (
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    );
  }

  //Menampilkan AppStack ketika user telah login
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default Route;
