//Import Library
import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from 'react-native';
import {AuthContext} from '../../auth/AuthProvider';

const LoginComponent = ({navigation}) => {
  //Deklarasi variabl
  const {login} = useContext(AuthContext);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  //Pengecekan input sebelum menjalankan fungsi selanjutnya
  const userLogin = () => {
    if (email && password) {
      login(email, password);
    } else {
      console.log(email, '||', password);
      ToastAndroid.show(
        'Email/Password Tidak Boleh Kosong !',
        ToastAndroid.SHORT,
      );
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.action}>
        <Text style={{alignItems: 'center', marginTop: 5}}>Email</Text>
        <View style={styles.section}>
          <TextInput
            placeholder="Masukan Email"
            style={styles.textInput}
            onChangeText={(userEmail) => setEmail(userEmail)}></TextInput>
        </View>
        <Text style={{alignItems: 'center', marginTop: 10}}>Password</Text>
        <View style={styles.section}>
          <TextInput
            placeholder="Masukan Password"
            style={styles.textInput}
            onChangeText={(userpassword) => setPassword(userpassword)}
            secureTextEntry></TextInput>
        </View>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password? </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => userLogin()} style={styles.login}>
        <Text style={styles.textLogin}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.signUp}>Don't have an account?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 100,
  },
  title: {
    color: '#8a0303',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  section: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  textInput: {
    flex: 0,
    paddingLeft: 10,
  },
  forgot: {
    textAlign: 'right',
    marginTop: 15,
    color: '#8a0303',
  },
  textLogin: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  login: {
    width: '100%',
    height: 40,
    backgroundColor: '#8a0303',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    borderRadius: 50,
  },
  signUp: {
    textAlign: 'center',
    marginTop: 15,
    color: 'grey',
  },
});
