import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const StatusPermintaan = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Permintaan')}
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          backgroundColor: '#fff',
          elevation: 5,
          borderRadius: 25,
          marginHorizontal: 50,
          padding: 15,
        }}>
        <Text style={{textAlign: 'center'}}>
          Buat Permohonan Permintaan Darah
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('StatusPermintaanWait')}
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          backgroundColor: '#fff',
          elevation: 5,
          borderRadius: 25,
          marginHorizontal: 50,
          padding: 15,
          marginVertical: 20,
        }}>
        <Text style={{textAlign: 'center'}}>Permohonan Permintaan Waiting</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('StatusPermintaanACC')}
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          backgroundColor: '#fff',
          elevation: 5,
          borderRadius: 25,
          marginHorizontal: 50,
          marginBottom: 20,
          padding: 15,
        }}>
        <Text style={{textAlign: 'center'}}>
          Permohonan Permintaan Ditsetujui
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('StatusPermintaanRJC')}
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          backgroundColor: '#fff',
          elevation: 5,
          borderRadius: 25,
          marginHorizontal: 50,
          padding: 15,
        }}>
        <Text style={{textAlign: 'center'}}>Permohonan Permintaan Ditolak</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StatusPermintaan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
