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

export default class PoinComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{justifyContent: 'center', alignContent: 'center'}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.footer2}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                  <ImageBackground
                    source={require('../../../asset/coin2.png')}
                    style={styles.imageBackground2}></ImageBackground>
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>Poin Saya: 0 </Text>
              <View style={styles.footer2}>
                <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 15}}>
                  Coming Soon
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const {width, height} = Dimensions.get('screen');
const width_button = width * 0.45;
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
  },
  textLogin: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
