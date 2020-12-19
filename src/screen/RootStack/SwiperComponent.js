//Import Library
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
export default class SwiperComponent extends React.Component {
  render() {
    return (
      <Swiper>
        <View style={styles.slide}>
          <View style={styles.header}>
            <View style={styles.container}>
              <Image
                resizeMode="contain"
                source={require('../../asset/aset2.png')}
                style={styles.image}
              />
            </View>
          </View>
          <View style={styles.footer}>
            <Text style={styles.title}>
              Donor darah lebih mudah dengan Bloodee App
            </Text>
          </View>
        </View>
        <View style={styles.slide}>
          <View style={styles.header}>
            <View style={styles.container}>
              <Image
                source={require('../../asset/aset1.png')}
                style={styles.image}
              />
            </View>
          </View>
          <View style={styles.footer}>
            <Text style={styles.title}>Setetes darah, sejuta kehidupan</Text>
          </View>
        </View>
        <View style={styles.slide}>
          <View style={styles.header}>
            <View style={styles.container}>
              <Image
                source={require('../../asset/bloodee1.png')}
                style={styles.image2}
              />
            </View>
          </View>

          <View style={styles.footer2}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#8a0303'}}>
              Ayo mulai dengan Bloodee
            </Text>
            <View style={{flexDirection: 'column'}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SignUpScreen')}
                style={[
                  styles.button,
                  {
                    borderColor: '#8a0303',
                    borderWidth: 1,
                    borderRadius: 50,
                    marginTop: 15,
                  },
                ]}>
                <Text style={{color: '#8a0303', fontWeight: 'bold'}}>
                  Sign Up
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('LoginScreen')}
                style={[
                  styles.button,
                  {
                    backgroundColor: '#8a0303',
                    borderRadius: 50,
                    marginTop: 15,
                    marginLeft: 0,
                  },
                ]}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Swiper>
    );
  }
}
const {width, height} = Dimensions.get('screen');
const height_image = height * 0.48 * 0.78;
const width_image = height_image * 1.1;
const height_image2 = height * 0.5 * 0.7;
const width_image2 = height_image * 0.9;
const width_button = width * 0.5;
var styles = StyleSheet.create({
  container: {
    borderRadius: 150,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    padding: 10,
  },
  slide: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  footer2: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    borderRadius: 200,
    borderWidth: 1,
    height: height_image,
    width: width_image,
  },
  image2: {
    height: height_image,
    width: width_image,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#8a0303',
    textAlign: 'center',
  },
  button: {
    width: width_button,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
