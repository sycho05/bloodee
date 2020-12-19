//Import Library
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default class SubmitDarahComponent extends React.Component {
  render() {
    return (
      <View style={styles.slide}>
        <View style={{justifyContent: 'center', alignContent: 'center'}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
              <Image
                source={require('../../../asset/bloodee1.png')}
                style={styles.image2}
              />
              <Text style={styles.title}>
                Terimakasih. Data yang anda isi akan divalidasi terlebih dahulu
                oleh pihak yang berwenang. Data yang tervalidasi akan diberitahu
                lewat nomor handphone, terimakasih.
              </Text>
            </View>
            <View style={styles.footer}>
              <View style={{flexDirection: 'column'}}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Home')}
                  style={[
                    styles.button,
                    {
                      backgroundColor: '#8a0303',
                      borderRadius: 50,
                      marginTop: 30,
                    },
                  ]}>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>
                    Selesai
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const {width, height} = Dimensions.get('screen');
const height_image = height * 0.5 * 0.8;
const width_image = height_image * 1.1;
const height_image2 = height * 0.4 * 0.7;
const width_image2 = height_image * 0.7;
const width_button = width * 0.5;
var styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  footer2: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    height: height_image,
    width: width_image,
  },
  image2: {
    height: height_image2,
    width: width_image2,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
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
