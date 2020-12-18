//Import Library
import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import {AuthContext} from '../../../auth/AuthProvider';
import database from '@react-native-firebase/database';

const HistoryComponent = () => {
  //Deklarasi variable yang digunakan
  const {user} = useContext(AuthContext);
  const [selectedId, setSelectedId] = useState(null);
  const [dataHistory, setDataHistory] = useState([]);
  const [load, setLoad] = useState(false);

  //Mengambil data history donor darah user pada firebase ketika user mengakses menu History
  useEffect(() => {
    try {
      const onValueChange = database()
        .ref(`/History/${user.uid}`)
        .on('value', (snapshot) => {
          const dataTemp = [];
          snapshot.forEach((item) => {
            dataTemp.push({
              data: {
                id: item.key,
                Id: item.val().Id,
                Tanggal: item.val().Tanggal,
                Lokasi: item.val().Lokasi,
              },
            });
            return false;
          });
          setDataHistory(dataTemp);
          setLoad(true);
        });
      return () =>
        database().ref(`/History/${user.uid}`).off('value', onValueChange);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const Item = ({item, onPress, style}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.deskripsi}>Tanggal Donor :{item.data.Tanggal}</Text>
      <Text style={styles.deskripsi}>Lokasi :{item.data.Lokasi}</Text>
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
          style={{width: 250, height: 250}}
          resizeMode={'contain'}
          source={require('../../../asset/history.png')}
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
          History Donor Darah
        </Text>
        <FlatList
          data={dataHistory}
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

export default HistoryComponent;

const width = Dimensions.get('screen').width;
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
  imageBackground: {
    width: width * 0.5,
    height: width * 0.5,
    alignItems: 'center',
  },
});
