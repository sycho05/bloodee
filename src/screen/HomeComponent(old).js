import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ToastAndroid } from 'react-native';
import {AuthContext} from '../auth/AuthProvider';
import database from '@react-native-firebase/database';

const HomeComponent = () => {

    const {user, logout} = useContext(AuthContext);
    const [data, setData] = useState();
    const [data2, setData2] = useState('');

    const Post = () => {

        database().ref(`/users/${user.uid}`).set({
            Id: user.uid,
            Nama: data,
            asik: ''
        }).then(() => {
            ToastAndroid.show('Registrasi Berhasil !', ToastAndroid.SHORT);
        });
        
        database()
        .ref(`/users/${user.uid}`)
        .on('value', datadb => {
            setData2(datadb.val());
            console.log('User data: ', datadb.val());
          });
  
      }

    const Delete = () => {
        database()
        .ref(`/users/${user.uid}/Nama`)
        .remove()
        .then(() => {
            ToastAndroid.show('Delete Berhasil !', ToastAndroid.SHORT);
        });
    }

    // useEffect(() => {
    //     const onValueChange = 
    //     database()
    //     .ref(`/users/${user.uid}`)
    //     .on('value', datadb => {
    //         setData2(datadb.val());
    //         console.log('User data: ', datadb.val());
    //       });
    
    //     return () =>
    //       database()
    //         .ref(`/users/${user.uid}`)
    //         .off('value', onValueChange);
    //   }, []);

    return (
        <View style={{flex:1, justifyContent:'center', alignItem:'center'}}>
            <Text style={{textAlign:'center'}}>{user.uid}</Text>
            <Text style={{textAlign:'center'}}>{data2.Nama}</Text>

                    <View style={styles.section}>
                        <TextInput
                            placeholder='Data'
                            style={styles.textInput}
                            onChangeText={(userData) => setData(userData)}
                            value={data}
                            >

                            </TextInput>
                    </View>
                    {/* <View style={styles.section}>
                        <TextInput
                            placeholder='Password'
                            style={styles.textInput}
                            onChangeText={(userpassword) => setPassword(userpassword)}
                            value={password}
                            secureTextEntry>

                        </TextInput>
                    </View> */}


            <TouchableOpacity
            onPress={() => Post()}>
                <Text style={{color:'#000',fontWeight:'bold', textAlign:'center', fontSize:30}}>Post</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => Delete()}>
                <Text style={{color:'#000',fontWeight:'bold', textAlign:'center', fontSize:30}}>Delete</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={{marginTop:20}}
            onPress={() => logout()}>
                <Text style={{color:'#000',fontWeight:'bold', textAlign:'center', fontSize:50}}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeComponent;

const styles = StyleSheet.create({
    section: {
        flexDirection:'row',
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:15,
        paddingVertical:10,
        alignItems:'center',
        marginTop:10,
    }, 
    textInput:{
        flex:1,
        paddingLeft:10
    },
});
