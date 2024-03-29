//Import Library
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default class Voucher1Component extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{justifyContent: 'center', alignContent: 'center'}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.footer2}>
              <View style={{flexDirection: 'row'}}></View>
              <Text style={styles.title}>
                Anda Akan Menukar Voucher Berikut:{' '}
              </Text>
              <View style={styles.footer2}>
                <View style={{flexDirection: 'column', marginTop: 40}}>
                  <TouchableOpacity
                    style={[
                      styles.button,
                      {
                        borderColor: '#8a0303',
                        borderWidth: 1,
                        borderRadius: 15,
                        marginTop: 15,
                      },
                    ]}>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>
                      Voucher
                    </Text>
                    <Text style={{textAlign: 'center'}}>
                      Potongan Belanja Senilai Rp. 10.000
                    </Text>
                    <Text style={{marginTop: 20}}>Poin Penukaran: 1000</Text>
                  </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', marginTop: 40}}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Home')}
                    style={styles.login}>
                    <Text style={styles.textLogin}>Tukar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const {width, height} = Dimensions.get('screen');
const width_button = width * 0.8;
const width_button2 = width * 0.95;
var styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
  },
  header: {
    marginTop: 50,
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  footer2: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#8a0303',
    textAlign: 'center',
  },
  button: {
    width: width_button,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    width: width_button2,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    width: width * 0.5,
    height: width * 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground2: {
    width: width * 0.3,
    height: width * 0.3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    width: 80,
    height: 40,
    backgroundColor: '#8a0303',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    borderRadius: 50,
    marginRight: 10,
  },
  textLogin: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
