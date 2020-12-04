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
import HomeComponent from '../screen/HomeComponent';
import ProfileComponent from '../screen/ProfileComponent';
import LocationComponent from '../screen/LocationComponent';
import HistoryComponent from '../screen/HistoryComponent';
import QrComponent from '../screen/QrComponent';
import PermintaanComponent from '../screen/PermintaanComponent';
import SubmitDarahComponent from '../screen/SubmitDarahComponent';
import InfoComponent from '../screen/InfoComponent';
import PoinComponent from '../screen/PoinComponent';
import Voucher1Component from '../screen/Voucher1Component';
import MyVoucherComponent from '../screen/MyVoucherComponent'
import KartuComponent from '../screen/KartuComponent'
import EditComponent from '../screen/EditComponent'

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