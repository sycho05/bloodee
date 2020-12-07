import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import HomeComponent from '../screen/AppStack/Home/HomeComponent';
import InfoComponent from '../screen/AppStack/Home/InfoComponent';
import KartuComponent from '../screen/AppStack/Home/KartuComponent';
import PermintaanComponent from '../screen/AppStack/Home/PermintaanComponent';
import PoinComponent from '../screen/AppStack/Home/PoinComponent';
import SubmitDarahComponent from '../screen/AppStack/Home/SubmitDarahComponent';
import Voucher1Component from '../screen/AppStack/Home/Voucher1Component';
import MyVoucherComponent from '../screen/AppStack/Home/MyVoucherComponent'


import ProfileComponent from '../screen/AppStack/Profil/ProfileComponent';
import EditComponent from '../screen/AppStack/Profil/EditComponent';

import LocationComponent from '../screen/AppStack/Location/LocationComponent';
import HistoryComponent from '../screen/AppStack/History/HistoryComponent';
import QrComponent from '../screen/AppStack/DonorSekarang/QrComponent';





const IconBottom = (props) => {
  const { color, focused } = props.data
  let colorSelected = focused ? color : 'grey'
  return (
      <View>
          <Image source={props.image} style={{ width: 25, height: 25, tintColor: colorSelected }} />
      </View>
  )
}

const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home"  component={HomeComponent} options={{headerShown: false}} />
    <HomeStack.Screen name="Permintaan"  component={PermintaanComponent} options={{headerShown: false}} />
    <HomeStack.Screen name="Submit"  component={SubmitDarahComponent} options={{headerShown: false}} />
    <HomeStack.Screen name="Info"  component={InfoComponent} options={{headerShown: false}} />
    <HomeStack.Screen name="Poin"  component={PoinComponent} options={{headerShown: false}} />
    <HomeStack.Screen name="Voucher1"  component={Voucher1Component} options={{headerShown: false}} />
    <HomeStack.Screen name="VoucherSaya"  component={MyVoucherComponent} options={{headerShown: true}} />
    <HomeStack.Screen name="Kartu"  component={KartuComponent} options={{headerShown: true}} />
  </HomeStack.Navigator>
);

const ProfilStack = createStackNavigator();
const ProfilStackScreen = () => (
  <ProfilStack.Navigator>
    <ProfilStack.Screen name="Profil"  component={ProfileComponent} options={{headerShown: false}} />
    <ProfilStack.Screen name="Edit"  component={EditComponent} options={{headerShown: false}} />
  </ProfilStack.Navigator>
);

const AppTabs = createBottomTabNavigator();
const AppTabsScreen = () => (
  <AppTabs.Navigator>
        <AppTabs.Screen name="Home" component={HomeStackScreen}options={{
            title: "Home",
            tabBarIcon: (props) => (
            <IconBottom data={props} image={require('../asset/navbarhome.png')} />
            )
        }} />
        <AppTabs.Screen name="History" component={HistoryComponent}options={{
            title: "History",
            tabBarIcon: (props) => (
            <IconBottom data={props} image={require('../asset/history.png')} />
            )
        }} />
        <AppTabs.Screen name="Donor Sekarang" component={QrComponent}options={{
            title: "Donor Sekarang",
            tabBarIcon: (props) => (
            <IconBottom data={props} image={require('../asset/barcode.png')} />
            )
        }} />
        <AppTabs.Screen name="Lokasi Donor" component={LocationComponent}options={{
            title: "Lokasi Donor",
            tabBarIcon: (props) => (
            <IconBottom data={props} image={require('../asset/location.png')} />
            )
        }} />
        <AppTabs.Screen name="Profil" component={ProfilStackScreen}options={{
            title: "Profil",
            tabBarIcon: (props) => (
            <IconBottom data={props} image={require('../asset/navbarprofile.png')} />
            )
        }} />
  </AppTabs.Navigator>
);

export default () => (
    <AppTabsScreen/>
);