import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import { View, Text, ToastAndroid } from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    return(
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try{
                        await auth().signInWithEmailAndPassword(email, password).then(() => {
                            ToastAndroid.show('Login Berhasil !', ToastAndroid.SHORT);
                        });
                    } catch(e){
                        console.log(e);
                    }
                },
                register: async (email, password) => {
                    try{
                        await auth().createUserWithEmailAndPassword(email, password).then(() => {
                            ToastAndroid.show('Registrasi Berhasil !', ToastAndroid.SHORT);
                        });
                    }catch(e){
                        if(e.code === 'auth/email-already-in-use'){
                            ToastAndroid.show('Email Sudah Digunakan !', ToastAndroid.SHORT);
                        }
                        if (e.code === 'auth/invalid-email') {
                            console.log('Alamat Email Tidak Valid !');
                          }
                        console.log(e);
                    }
                },
                logout: async() => {
                    try{
                        await auth().signOut().then(() => {
                            ToastAndroid.show('Logout Berhasil !', ToastAndroid.SHORT);
                        });
                    }catch(e){
                        console.log(e);
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}