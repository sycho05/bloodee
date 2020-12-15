import React, { useContext, useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    FlatList,
    Alert
} from 'react-native';
import {AuthContext} from '../../../auth/AuthProvider';
import database from '@react-native-firebase/database';
import QRCode from 'react-native-qrcode-svg';

const QrScreen = ({navigation}) => {
    const {user} = useContext(AuthContext);

    const PopUpAlert = () =>{
        Alert.alert(
            "Alert",
            "Mohon lengkapi data diri terlebih dahulu sebelum dapat mengakses menu lainnya",
            [
                { 
                    text: "OK", onPress: () => console.log("OK Pressed") 
                },
            ],
            { cancelable: false }
        );
    }

    useEffect(() => {
        try{
            const onValueChange = database()
            .ref(`/users/${user.uid}`)
            .on('value', datadb => {
              console.log('User data: ', datadb.val());
              console.log('APAKAH INI DIJALANIN ??')
              if(datadb.val().NoKTP === ''|| datadb.val().Nama === '' || datadb.val().TempatTinggal === '' || datadb.val().TanggalLahir === '' || datadb.val().Alamat === '' || datadb.val().Wilayah === '' || datadb.val().JenisKelamin === '' || datadb.val().GolonganDarah === '' || datadb.val().NoHandphone === ''){
                  console.log('NAMA NULL KESINI', datadb.val());
                  PopUpAlert();
                  navigation.reset({
                      index: 0,
                      routes: [{ name: 'Profil' }],
                      });
              }
            });
      
            return () =>
                database()
                .ref(`/users/${user.uid}`)
                .off('value', onValueChange);
        }
        catch(e){
            console.log(e);
        }
        
      }, []);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <ImageBackground
                source={require('../../../asset/bloodee1.png')}
                style={styles.imageBackground}
                >
                    
                </ImageBackground>
            </View>
            <View>
            <Text style={{marginTop:60,fontSize:20, color:'black', fontWeight:'bold', textAlign:'center'}}>Tunjukkan Qr Code Pada Admin PMI</Text>
            </View>
            <View style={{backgroundColor:'#efefef', padding:1,flex:20, marginTop:40}}>
            
                <View style={{flex:1,padding:20, margin:0, backgroundColor:'#fff', flexDirection:'column',alignItems:'center', justifyContent:'center'}}>
                <QRCode
                    value={user.uid}
                    size={250}
                />
                </View>
            </View>
        </View>

            
            
            
            
    );
}

export default QrScreen;

const width = Dimensions.get('screen').width
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    header: {
        marginTop:50,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    imageBackground:{
        width: width*0.5,
        height: width*0.5 ,
        alignItems:'center'
    },
})