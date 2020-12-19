import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import database from '@react-native-firebase/database';

const InfoComponent = () => {
  //Deklarasi variable
  const [selectedId, setSelectedId] = useState(null);
  const [dataPermintaan, setDataPermintaan] = useState([]);
  const [load, setLoad] = useState(false);

  //Cek data permintaan kedalam firebase ketika pengguna mengakses info permintaan
  useEffect(() => {
    try {
      const onValueChange = database()
        .ref(`/PermintaanDarahAccepted/`)
        .on('value', (snapshot) => {
          const dataTemp = [];
          snapshot.forEach((item) => {
            dataTemp.push({
              data: {
                id: item.key,
                Id: item.val().Id,
                NamaPeminta: item.val().NamaPeminta,
                NamaPenerima: item.val().NamaPenerima,
                GolonganDarah: item.val().GolonganDarah,
                JumlahDarah: item.val().JumlahDarah,
                KeteranganLain: item.val().KeteranganLain,
                NoHandphone: item.val().NoHandphone,
                Alamat: item.val().Alamat,
              },
            });
            return false;
          });
          setDataPermintaan(dataTemp);
          setLoad(true);
        });
      return () =>
        database().ref(`/PermintaanDarahAccepted/`).off('value', onValueChange);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const Item = ({item, onPress, style}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.deskripsi}>
        Peminta Darah :{item.data.NamaPeminta}
      </Text>
      <Text style={styles.deskripsi}>
        Penerima Darah :{item.data.NamaPenerima}
      </Text>
      <Text style={styles.deskripsi}>
        Golongan Darah Dibutuhkan :{item.data.GolonganDarah}
      </Text>
      <Text style={styles.deskripsi}>
        Kantong Darah Dibutuhkan :{item.data.JumlahDarah}
      </Text>
      <Text style={styles.deskripsi}>
        Keterangan Lain : {item.data.KeteranganLain}
      </Text>
      <Text style={styles.deskripsi}>Alamat:{item.data.Alamat}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    const backgroundColor = item.data.id === selectedId ? '#f2f2f2' : '#fff';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.data.id)}
        style={{backgroundColor}}
      />
    );
  };
  //Pengecekan Render telah selesai dilakukan
  //Apabila Render telah selesai maka load bernilai true dan akan menampilkan tampilan utama
  return load ? (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{width: 300, height: 200}}
          resizeMode={'contain'}
          source={require('../../../asset/infoterkini2.png')}
        />
      </View>
      <View
        style={{
          backgroundColor: '#efefef',
          padding: 5,
          flex: 15,
          marginTop: 40,
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
            elevation: 2,
            margin: 3,
          }}>
          Info Terkini Seputar Donor Darah
        </Text>
        <FlatList
          data={dataPermintaan}
          renderItem={renderItem}
          keyExtractor={(item) => item.data.id}
        />
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

export default InfoComponent;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    elevation: 2,
  },
  deskripsi: {
    fontSize: 15,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
