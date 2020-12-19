//Import Library
import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {ToastAndroid} from 'react-native';

//Deklarasi API Autentikasi User dengan Firebase
export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        //Fungsi Login
        login: async (email, password) => {
          try {
            await auth()
              .signInWithEmailAndPassword(email, password)
              .then(() => {
                ToastAndroid.show('Login Berhasil !', ToastAndroid.SHORT);
              });
          } catch (e) {
            console.log(e);
            if (e.code === 'auth/invalid-email') {
              ToastAndroid.show('Email Tidak Valid !', ToastAndroid.SHORT);
            }
            if (e.code === 'auth/wrong-password') {
              ToastAndroid.show('Password Salah !', ToastAndroid.SHORT);
            }
            if (e.code === 'auth/too-many-requests') {
              ToastAndroid.show(
                'Silahkan Coba Beberapa Saat Lagi !',
                ToastAndroid.SHORT,
              );
            }
            if (e.code === 'auth/user-not-found') {
              ToastAndroid.show(
                'User Tidak Ditemukan. Silahkan Cek Kembali Email/Password !',
                ToastAndroid.SHORT,
              );
            }
          }
        },
        //Fungsi SignUp
        register: async (email, password) => {
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then(() => {
                ToastAndroid.show('Registrasi Berhasil !', ToastAndroid.SHORT);
              });
          } catch (e) {
            if (e.code === 'auth/email-already-in-use') {
              ToastAndroid.show('Email Sudah Digunakan !', ToastAndroid.SHORT);
            }
            if (e.code === 'auth/invalid-email') {
              ToastAndroid.show('Email Tidak Valid !', ToastAndroid.SHORT);
            }
            console.log(e);
          }
        },
        //Fungsi LogOut
        logout: async () => {
          try {
            await auth()
              .signOut()
              .then(() => {
                ToastAndroid.show('Logout Berhasil !', ToastAndroid.SHORT);
              });
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
