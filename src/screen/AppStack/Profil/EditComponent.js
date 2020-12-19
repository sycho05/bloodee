//Import Library
import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Dimensions,
  TextInput,
  ToastAndroid,
} from 'react-native';

import {AuthContext} from '../../../auth/AuthProvider';
import database from '@react-native-firebase/database';

const EditComponent = ({navigation}) => {
  //Deklarasi variable
  const {user} = useContext(AuthContext);
  const [dataKTP, setDataKTP] = useState();
  const [dataNama, setDataNama] = useState();
  const [dataTempatLahir, setDataTempatLahir] = useState();
  const [dataTanggalLahir, setDataTanggalLahir] = useState();
  const [dataAlamat, setDataAlamat] = useState();
  const [dataJenisKelamin, setDataJenisKelamin] = useState();
  const [dataGolonganDarah, setDataGolonganDarah] = useState();
  const [dataNoHandphone, setDataNoHandphone] = useState();
  const [load, setLoad] = useState();

  //Fungsi post data kedalam database
  const Post = () => {
    database()
      .ref(`/users/${user.uid}`)
      .update({
        Id: user.uid,
        NoKTP: dataKTP,
        Nama: dataNama,
        TempatLahir: dataTempatLahir,
        TanggalLahir: dataTanggalLahir,
        Alamat: dataAlamat,
        JenisKelamin: dataJenisKelamin,
        GolonganDarah: dataGolonganDarah,
        NoHandphone: dataNoHandphone,
      })
      .then(() => {
        ToastAndroid.show('Submit Data Berhasil !', ToastAndroid.SHORT);
      });
  };

  //Mengambil data user kedalam database ketika user mengakses menu edit profil
  useEffect(() => {
    try {
      const onValueChange = database()
        .ref(`/users/${user.uid}`)
        .on('value', (snapshot) => {
          setDataKTP(snapshot.val().NoKTP);
          setDataNama(snapshot.val().Nama);
          setDataTempatLahir(snapshot.val().TempatLahir);
          setDataTanggalLahir(snapshot.val().TanggalLahir);
          setDataAlamat(snapshot.val().Alamat);
          setDataJenisKelamin(snapshot.val().JenisKelamin);
          setDataGolonganDarah(snapshot.val().GolonganDarah);
          setDataNoHandphone(snapshot.val().NoHandphone);
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
      <View
        style={{margin: 25, justifyContent: 'center', alignContent: 'center'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Edit Profil</Text>
          <Text style={{alignItems: 'center', marginTop: 5}}>No. KTP</Text>
          <View style={styles.section}>
            <TextInput
              placeholder="Masukan Nomor KTP Anda"
              style={styles.textInput}
              onChangeText={(input) => setDataKTP(input)}
              value={dataKTP}></TextInput>
          </View>
          <Text style={{alignItems: 'center', marginTop: 10}}>Nama</Text>
          <View style={styles.section}>
            <TextInput
              placeholder="Masukan Nama Anda"
              style={styles.textInput}
              onChangeText={(input) => setDataNama(input)}
              value={dataNama}></TextInput>
          </View>
          <Text style={{alignItems: 'center', marginTop: 10}}>
            Tempat Lahir
          </Text>
          <View style={styles.section}>
            <TextInput
              placeholder="Masukan Tempat Lahir"
              style={styles.textInput}
              onChangeText={(input) => setDataTempatLahir(input)}
              value={dataTempatLahir}></TextInput>
          </View>
          <Text style={{alignItems: 'center', marginTop: 10}}>
            Tanggal Lahir
          </Text>
          <View style={styles.section}>
            <TextInput
              placeholder="Masukan  Tanggal Lahir Anda"
              style={styles.textInput}
              onChangeText={(input) => setDataTanggalLahir(input)}
              value={dataTanggalLahir}></TextInput>
          </View>
          <Text style={{alignItems: 'center', marginTop: 10}}>Alamat</Text>
          <View style={styles.section}>
            <TextInput
              placeholder="Masukan Alamat Anda"
              style={styles.textInput}
              onChangeText={(input) => setDataAlamat(input)}
              value={dataAlamat}></TextInput>
          </View>
          <Text style={{alignItems: 'center', marginTop: 10}}>
            Jenis Kelamin
          </Text>
          <View style={styles.section}>
            <TextInput
              placeholder="Masukan Jenis Kelamin Anda"
              style={styles.textInput}
              onChangeText={(input) => setDataJenisKelamin(input)}
              value={dataJenisKelamin}></TextInput>
          </View>
          <Text style={{alignItems: 'center', marginTop: 10}}>
            Golongan Darah
          </Text>
          <View style={styles.section}>
            <TextInput
              placeholder="Masukan Golongan Darah Anda"
              style={styles.textInput}
              onChangeText={(input) => setDataGolonganDarah(input)}
              value={dataGolonganDarah}></TextInput>
          </View>
          <Text style={{alignItems: 'center', marginTop: 10}}>
            No. Handphone
          </Text>
          <View style={styles.section}>
            <TextInput
              placeholder="Masukan No. Handphone Anda"
              style={styles.textInput}
              onChangeText={(input) => setDataNoHandphone(input)}
              value={dataNoHandphone}></TextInput>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 10,
              marginHorizontal: 20,
            }}>
            <TouchableOpacity
              onPress={() => {
                Post();
                navigation.reset({
                  index: 0,
                  routes: [{name: 'Profil'}],
                });
              }}
              style={[
                styles.button,
                {
                  backgroundColor: '#8a0303',
                  borderRadius: 15,
                  marginTop: 15,
                  marginLeft: 15,
                },
              ]}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
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

export default EditComponent;

const {width, height} = Dimensions.get('screen');
const width_button = width * 0.2;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    color: '#8a0303',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  section: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  textInput: {
    flex: 0,
    paddingLeft: 10,
  },
  button: {
    width: width_button,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
