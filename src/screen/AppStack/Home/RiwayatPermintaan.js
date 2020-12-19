import React, { version } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const RiwayatPermintaan = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={{marginHorizontal:20, marginBottom:10}}>
            <Text style={{textAlign:'center', fontWeight:'700', fontSize:20}}>Status Permohonan Permintaan Darah</Text>
        </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('StatusPermintaanWait')}
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          borderColor:'#8a0303',
          borderWidth:1,
          borderRadius: 25,
          marginHorizontal: 50,
          padding: 15,
          marginVertical: 20,
        }}>
        <Text style={{textAlign: 'center', color:'#8a0303'}}>Menunggu</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('StatusPermintaanACC')}
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          backgroundColor: '#8a0303',
          borderRadius: 25,
          marginHorizontal: 50,
          marginBottom: 20,
          padding: 15,
        }}>
        <Text style={{textAlign: 'center', color:'#fff'}}>Ditsetujui</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('StatusPermintaanRJC')}
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          borderColor:'#8a0303',
          borderWidth:1,
          borderRadius: 25,
          marginHorizontal: 50,
          padding: 15,
        }}>
        <Text style={{textAlign: 'center', color:'#8a0303'}}>Ditolak</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RiwayatPermintaan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
