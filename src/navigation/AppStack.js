//AppStack (Menu-Menu Utama Pada Aplikasi)

//Import Library
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Image} from 'react-native';

//Import Screen
import HomeComponent from '../screen/AppStack/Home/HomeComponent';
import InfoComponent from '../screen/AppStack/Home/InfoComponent';
import PermintaanComponent from '../screen/AppStack/Home/PermintaanComponent';
import PoinComponent from '../screen/AppStack/Home/PoinComponent';
import SubmitDarahComponent from '../screen/AppStack/Home/SubmitDarahComponent';
import Voucher1Component from '../screen/AppStack/Home/Voucher1Component';
import MyVoucherComponent from '../screen/AppStack/Home/MyVoucherComponent';
import LocationComponent from '../screen/AppStack/Home/LocationComponent';
import HistoryComponent from '../screen/AppStack/Home/HistoryComponent';
import StatusPermintaan from '../screen/AppStack/Home/StatusPermintaan';
import StatusPermintaanACC from '../screen/AppStack/Home/StatusPermintaanACC';
import StatusPermintaanRJC from '../screen/AppStack/Home/StatusPermintaanRJC';
import StatusPermintaanWait from '../screen/AppStack/Home/StatusPermintaanWait';
import ProfileComponent from '../screen/AppStack/Profil/ProfileComponent';
import EditComponent from '../screen/AppStack/Profil/EditComponent';
import QrComponent from '../screen/AppStack/DonorSekarang/QrComponent';

//Deklarasi fungsi Icon pada bottom navigation
const IconBottom = (props) => {
  const {color, focused} = props.data;
  let colorSelected = focused ? color : 'grey';
  return (
    <View>
      <Image
        source={props.image}
        style={{width: 25, height: 25, tintColor: colorSelected}}
      />
    </View>
  );
};

//StackNavigator Menu Home
const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeComponent}
      options={{headerShown: false}}
    />
    <HomeStack.Screen
      name="StatusPermintaan"
      component={StatusPermintaan}
      options={{title: '', headerShown: true}}
    />
    <HomeStack.Screen
      name="StatusPermintaanACC"
      component={StatusPermintaanACC}
      options={{title: '', headerShown: true}}
    />
    <HomeStack.Screen
      name="StatusPermintaanRJC"
      component={StatusPermintaanRJC}
      options={{title: '', headerShown: true}}
    />
    <HomeStack.Screen
      name="StatusPermintaanWait"
      component={StatusPermintaanWait}
      options={{title: '', headerShown: true}}
    />
    <HomeStack.Screen
      name="Permintaan"
      component={PermintaanComponent}
      options={{title: '', headerShown: true}}
    />
    <HomeStack.Screen
      name="Submit"
      component={SubmitDarahComponent}
      options={{headerShown: false}}
    />
    <HomeStack.Screen
      name="Info"
      component={InfoComponent}
      options={{title: '', headerShown: true}}
    />
    <HomeStack.Screen
      name="Poin"
      component={PoinComponent}
      options={{title: '', headerShown: true}}
    />
    <HomeStack.Screen
      name="Voucher1"
      component={Voucher1Component}
      options={{title: '', headerShown: true}}
    />
    <HomeStack.Screen
      name="VoucherSaya"
      component={MyVoucherComponent}
      options={{title: '', headerShown: true}}
    />
    <HomeStack.Screen
      name="Lokasi Donor"
      component={LocationComponent}
      options={{title: '', headerShown: true}}
    />
    <HomeStack.Screen
      name="History"
      component={HistoryComponent}
      options={{title: '', headerShown: true}}
    />
  </HomeStack.Navigator>
);

//StackNavigator menu Profil
const ProfilStack = createStackNavigator();
const ProfilStackScreen = () => (
  <ProfilStack.Navigator>
    <ProfilStack.Screen
      name="Profil"
      component={ProfileComponent}
      options={{headerShown: false}}
    />
    <ProfilStack.Screen
      name="Edit"
      component={EditComponent}
      options={{title: '', headerShown: true}}
    />
  </ProfilStack.Navigator>
);

//Menu Bottom Navigator
const AppTabs = createBottomTabNavigator();
const AppTabsScreen = () => (
  <AppTabs.Navigator>
    <AppTabs.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        title: 'Home',
        tabBarIcon: (props) => (
          <IconBottom data={props} image={require('../asset/navbarhome.png')} />
        ),
      }}
    />
    <AppTabs.Screen
      name="Donor Sekarang"
      component={QrComponent}
      options={{
        title: 'Donor Sekarang',
        tabBarIcon: (props) => (
          <IconBottom data={props} image={require('../asset/barcode.png')} />
        ),
      }}
    />
    <AppTabs.Screen
      name="Profil"
      component={ProfilStackScreen}
      options={{
        title: 'Profil',
        tabBarIcon: (props) => (
          <IconBottom
            data={props}
            image={require('../asset/navbarprofile.png')}
          />
        ),
      }}
    />
  </AppTabs.Navigator>
);

export default () => <AppTabsScreen />;
