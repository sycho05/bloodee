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
          backgroundColor: '#8a0303',
          borderRadius: 25,
          marginHorizontal: 50,
          padding: 15,
        }}>
        <Text style={{textAlign: 'center', color:'#fff'}}>
          Buat Permohonan Permintaan Darah
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('RiwayatPermintaan')}
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
        <Text style={{textAlign: 'center', color:'#8a0303'}}>Riwayat Permohonan Permintaan</Text>
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
