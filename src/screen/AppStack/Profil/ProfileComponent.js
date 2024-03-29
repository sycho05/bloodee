//Import Library
import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {AuthContext} from '../../../auth/AuthProvider';
import database from '@react-native-firebase/database';

const ProfileComponent = ({navigation}) => {
  //Deklarasi variable
  const {user, logout} = useContext(AuthContext);
  const [load, setLoad] = useState(false);

  const [dataUser, setDataUser] = useState({
    Id: null,
    Nama: null,
    TempatLahir: null,
    TanggalLahir: null,
    Alamat: null,
    JenisKelamin: null,
    GolonganDarah: null,
    NoHandphone: null,
  });

  //Mengambil data user kedalam database ketika user mengakses menu profil
  useEffect(() => {
    try {
      const onValueChange = database()
        .ref(`/users/${user.uid}`)
        .on('value', (snapshot) => {
          setDataUser(snapshot.val());
          setLoad(true);
        });

      return () =>
        database().ref(`/users/${user.uid}`).off('value', onValueChange);
    } catch (e) {
      console.log(e);
    }
  }, []);
  //Pengecekan Render telah selesai dilakukan
  //Apabila Render telah selesai maka load bernilai true dan akan menampilkan tampilan utama
  return load ? (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <ImageBackground
            source={require('../../../asset/navbarprofile.png')}
            style={styles.imageBackground}></ImageBackground>
        </View>
        <View>
          <Text
            style={{
              marginTop: 20,
              textAlign: 'center',
              justifyContent: 'center',
              color: 'black',
              fontWeight: 'bold',
              fontSize: 30,
            }}>
            Profil Saya
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 25,
            margin: 10,
            elevation: 5,
            padding: 20,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              backgroundColor: '#fff',
              borderRadius: 25,
              elevation: 4,
              marginHorizontal: 10,
            }}>
            <Text style={{paddingLeft: 20, paddingVertical: 10}}>
              Id : {dataUser.Id}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              backgroundColor: '#fff',
              borderRadius: 25,
              elevation: 4,
              marginHorizontal: 10,
              marginTop: 10,
            }}>
            <Text style={{paddingLeft: 20, paddingVertical: 10}}>
              Nama : {dataUser.Nama}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              backgroundColor: '#fff',
              borderRadius: 25,
              elevation: 4,
              marginHorizontal: 10,
              marginTop: 10,
            }}>
            <Text style={{paddingLeft: 20, paddingVertical: 10}}>
              Tempat Lahir : {dataUser.TempatLahir}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              backgroundColor: '#fff',
              borderRadius: 25,
              elevation: 4,
              marginHorizontal: 10,
              marginTop: 10,
            }}>
            <Text style={{paddingLeft: 20, paddingVertical: 10}}>
              Tanggal Lahir : {dataUser.TanggalLahir}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              backgroundColor: '#fff',
              borderRadius: 25,
              elevation: 4,
              marginHorizontal: 10,
              marginTop: 10,
            }}>
            <Text style={{paddingLeft: 20, paddingVertical: 10}}>
              Alamat : {dataUser.Alamat}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              backgroundColor: '#fff',
              borderRadius: 25,
              elevation: 4,
              marginHorizontal: 10,
              marginTop: 10,
            }}>
            <Text style={{paddingLeft: 20, paddingVertical: 10}}>
              Jenis Kelamin : {dataUser.JenisKelamin}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              backgroundColor: '#fff',
              borderRadius: 25,
              elevation: 4,
              marginHorizontal: 10,
              marginTop: 10,
            }}>
            <Text style={{paddingLeft: 20, paddingVertical: 10}}>
              Golongan Darah : {dataUser.GolonganDarah}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              backgroundColor: '#fff',
              borderRadius: 25,
              elevation: 4,
              marginHorizontal: 10,
              marginTop: 10,
            }}>
            <Text style={{paddingLeft: 20, paddingVertical: 10}}>
              No Handphone : {dataUser.NoHandphone}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <TouchableOpacity
            onPress={() => logout()}
            style={[
              styles.button,
              {
                borderColor: '#8a0303',
                borderWidth: 1,
                borderRadius: 15,
                marginTop: 15,
              },
            ]}>
            <Text style={{color: '#8a0303', fontWeight: 'bold'}}>Log Out</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Edit')}
            style={[
              styles.button,
              {
                backgroundColor: '#8a0303',
                borderRadius: 15,
                marginTop: 15,
                marginLeft: 15,
              },
            ]}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Edit Profil
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  ) : (
    //Apabila Render belum selesai maka load bernilai false, dan akan menampilkan tampilan loader
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
};

export default ProfileComponent;

const width = Dimensions.get('screen').width;
const width_button = width * 0.2;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
  },
  header: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    width: width * 0.2,
    height: width * 0.2,
    alignItems: 'center',
  },
  button: {
    width: width_button,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
