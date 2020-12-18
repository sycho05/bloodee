import React, {useEffect, useState, useContext} from 'react';
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

const PermintaanComponent = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [permintaan, setPermintaan] = useState();
  const [namaPeminta, setNamaPeminta] = useState();
  const [namaPenerima, setNamaPenerima] = useState();
  const [golonganDarah, setGolonganDarah] = useState();
  const [jumlahDarah, setJumlahDarah] = useState();
  const [keteranganLain, setKeteranganLain] = useState();
  const [noHandphone, setNoHandphone] = useState();
  const [alamat, setAlamat] = useState();
  const [load, setLoad] = useState();

  const Post = () => {
    try {
      console.log('REF :', permintaan);
      database()
        .ref(`PermintaanDarah/Permintaan_${user.uid}_${permintaan}`)
        .update({
          Id: user.uid,
          NamaPeminta: namaPeminta,
          NamaPenerima: namaPenerima,
          GolonganDarah: golonganDarah,
          JumlahDarah: jumlahDarah,
          KeteranganLain: keteranganLain,
          NoHandphone: noHandphone,
          Alamat: alamat,
        })
        .then(() => {
          ToastAndroid.show('Submit Permintaan Berhasil !', ToastAndroid.SHORT);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const storeData = () => {
    try {
      database().ref(`/counter/users/${user.uid}/key-permintaan`).update({
        key: permintaan,
      });
      console.log('key counter store firebase sukses');
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    try {
      const onValueChange = database()
        .ref(`/counter/users/${user.uid}/key-permintaan`)
        .on('value', (datadb) => {
          console.log(datadb.val());
          if (datadb.val() !== null) {
            const data = datadb.val().key;
            setPermintaan(data + 1);
            console.log('key counter get firebase sukses');
          } else {
            setPermintaan(1);
            console.log('key counter get firebase kosong');
          }
          setLoad(true);
        });
      return () =>
        database()
          .ref(`/counter/users/${user.uid}/key-permintaan`)
          .off('value', onValueChange);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const submitPermintaan = () => {
    if (
      namaPeminta &&
      namaPenerima &&
      golonganDarah &&
      jumlahDarah &&
      keteranganLain &&
      noHandphone &&
      alamat
    ) {
      Post();
      setPermintaan(permintaan + 1);
      storeData();
      navigation.navigate('Submit');
    } else {
      ToastAndroid.show('Mohon Isi Seluruh Input !', ToastAndroid.SHORT);
    }
  };

  return load ? (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Buat Permintaan Darah</Text>
        <View style={styles.action}>
          <Text style={{alignItems: 'center', marginTop: 10}}>
            Nama Pemohon
          </Text>
          <View style={styles.section}>
            <TextInput
              placeholder="Masukan Nama Pemohon"
              style={styles.textInput}
              onChangeText={(input) => setNamaPeminta(input)}></TextInput>
          </View>
          <Text style={{alignItems: 'center', marginTop: 10}}>
            Nama Penerima
          </Text>
          <View style={styles.section}>
            <TextInput
              placeholder="Masukan Nama Penerima"
              style={styles.textInput}
              onChangeText={(input) => setNamaPenerima(input)}></TextInput>
          </View>
          <Text style={{alignItems: 'center', marginTop: 10}}>
            Golongan Darah
          </Text>
          <View style={styles.section}>
            <TextInput
              placeholder="Masukan Golongan Darah Yang Dibutuhkan"
              style={styles.textInput}
              onChangeText={(input) => setGolonganDarah(input)}></TextInput>
          </View>
          <Text style={{alignItems: 'center', marginTop: 10}}>
            Jumlah Kantong Darah
          </Text>
          <View style={styles.section}>
            <TextInput
              placeholder="Masukan Jumlah Kantong Darah"
              style={styles.textInput}
              onChangeText={(input) => setJumlahDarah(input)}></TextInput>
          </View>
          <Text style={{alignItems: 'center', marginTop: 10}}>
            Keterangan Lain
          </Text>
          <View style={styles.section}>
            <TextInput
              placeholder="Masukan Keterangan Lain"
              style={styles.textInput}
              onChangeText={(input) => setKeteranganLain(input)}></TextInput>
          </View>
          <Text style={{alignItems: 'center', marginTop: 10}}>
            No. Handphone
          </Text>
          <View style={styles.section}>
            <TextInput
              placeholder="Masukan No. Hp Yang Dapat Dihubungi"
              style={styles.textInput}
              onChangeText={(input) => setNoHandphone(input)}></TextInput>
          </View>
          <Text style={{alignItems: 'center', marginTop: 10}}>Alamat</Text>
          <View style={styles.section}>
            <TextInput
              placeholder="Masukan Alamat"
              style={styles.textInput}
              onChangeText={(input) => setAlamat(input)}></TextInput>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            submitPermintaan();
          }}
          style={styles.login}>
          <Text style={styles.textLogin}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  ) : (
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

export default PermintaanComponent;

const {width, height} = Dimensions.get('screen');
const width_button = width * 0.45;
const width_button2 = width * 0.95;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 20,
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
  forgot: {
    textAlign: 'right',
    marginTop: 15,
    color: '#8a0303',
  },
  textLogin: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  login: {
    width: '30%',
    height: 40,
    backgroundColor: '#8a0303',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 30,
  },
  login2: {
    width: '30%',
    height: 40,
    backgroundColor: '#8a0303',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    borderRadius: 50,
    marginLeft: 10,
  },
  signUp: {
    textAlign: 'center',
    marginTop: 15,
    color: 'grey',
  },
});
