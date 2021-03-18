//Import Library
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';

const MyVoucherComponent = () => {
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignContent: 'center'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Image
              style={{width: 250, height: 250}}
              resizeMode={'contain'}
              source={require('../../../asset/voucher.png')}
            />
          </View>
          <View
            style={{
              backgroundColor: '#fff',
              padding: 5,
              margin: 20,
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
              Voucher Saya
            </Text>
            <View
              style={{
                textAlign: 'center',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                Coming Soon
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default MyVoucherComponent;

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
