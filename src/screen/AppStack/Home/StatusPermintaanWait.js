import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import database from '@react-native-firebase/database';
import {AuthContext} from '../../../auth/AuthProvider';

const StatusPermintaan = () => {
  const {user} = useContext(AuthContext);
  const [selectedId, setSelectedId] = useState();
  const [statusPermintaan, setStatusPermintaan] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    try {
      const onValueChange = database()
        .ref(`/PermintaanDarah/${user.uid}`)
        .on('value', (snapshot) => {
          const dataTemp = [];
          snapshot.forEach((item) => {
            dataTemp.push({
              data: {
                IdItem: `${item.val().Id}-${item.key}`,
                IdUser: item.val().Id,
                IdBranch: item.key,
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
          setStatusPermintaan(dataTemp);
          setLoad(true);
        });

      return () => {
        database()
          .ref(`/PermintaanDarah/${user.uid}`)
          .off('value', onValueChange);
      };
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
      <Text style={styles.deskripsi}>NoHandphone: {item.data.NoHandphone}</Text>
      <Text style={styles.deskripsi}>Alamat: {item.data.Alamat}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    const backgroundColor = item === selectedId ? '#f2f2f2' : '#fff';

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.data.IdItem);
        }}
        style={{backgroundColor}}
      />
    );
  };

  return load ? (
    <View style={styles.container}>
      <View
       style={{
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignContent: 'center',
        borderWidth:1,
        borderColor:'#8a0303',
        borderRadius: 10,
        elevation:5,
        padding: 5,
        marginHorizontal:16,
        marginTop:10,
        }}>
        <Text style={{textAlign: 'center', color:'#8a0303'}}>
          Permohonan Permintaan Darah
        </Text>
        <Text style={{textAlign: 'center', color:'#8a0303'}}>
          (Menunggu)
        </Text>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={statusPermintaan}
          renderItem={renderItem}
          keyExtractor={(item) => item.data.IdItem}
        />
      </View>
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

export default StatusPermintaan;

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
    justifyContent: 'center',
    alignContent: 'center',
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
});
