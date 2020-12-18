//Import Library
import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Alert,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {AuthContext} from '../../../auth/AuthProvider';
import database from '@react-native-firebase/database';
import QRCode from 'react-native-qrcode-svg';

const QrScreen = ({navigation}) => {
  //Deklarasi varible yang digunakan
  const {user} = useContext(AuthContext);
  const [load, setLoad] = useState(false);

  //Alert
  const PopUpAlert = () => {
    Alert.alert(
      'Alert',
      'Mohon lengkapi data diri terlebih dahulu sebelum dapat mengakses menu lainnya',
      [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ],
      {cancelable: false},
    );
  };

  //Pengecekan data user pada firebase sebelum dapat mengakses seluruh fitur
  useEffect(() => {
    try {
      const onValueChange = database()
        .ref(`/users/${user.uid}`)
        .on('value', (datadb) => {
          console.log('User data: ', datadb.val());
          setLoad(true);
          if (
            datadb.val().NoKTP === '' ||
            datadb.val().Nama === '' ||
            datadb.val().TempatLahir === '' ||
            datadb.val().TanggalLahir === '' ||
            datadb.val().Alamat === '' ||
            datadb.val().JenisKelamin === '' ||
            datadb.val().GolonganDarah === '' ||
            datadb.val().NoHandphone === ''
          ) {
            PopUpAlert();
            navigation.reset({
              index: 0,
              routes: [{name: 'Profil'}],
            });
          }
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
          <Image
            style={{width: 250, height: 250}}
            resizeMode={'contain'}
            source={require('../../../asset/QRCODE.png')}
          />
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            padding: 1,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              fontWeight: 'bold',
              textAlign: 'center',
              padding: 10,
              backgroundColor: 'white',
              borderRadius: 20,
              elevation: 5,
              margin: 3,
            }}>
            Tunjukkan QR Code Pada Admin
          </Text>
          <View
            style={{
              margin: 20,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <QRCode value={user.uid} size={250} />
          </View>
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

export default QrScreen;

const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
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
    width: width * 0.5,
    height: width * 0.5,
    alignItems: 'center',
  },
});
