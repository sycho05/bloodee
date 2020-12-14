import React, { useContext, useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    ImageBackgroundBase,
    Dimensions,
    TouchableOpacity,
    FlatList,
    Button,
    ScrollView,
    SafeAreaView,
    Alert
} from 'react-native';
import {AuthContext} from '../../../auth/AuthProvider';
import database from '@react-native-firebase/database';
import QRCode from 'react-native-qrcode-svg';

const QrScreen = ({navigation}) => {
    const {user} = useContext(AuthContext);

    const PopUpAlert = () =>{
        Alert.alert(
            "AlertQR",
            "Mohon Lengkapi Data Diri terlebih dahulu sebelum dapat mengakses menu lainnya",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { 
                    text: "OK", onPress: () => console.log("OK Pressed") 
                }
            ],
            { cancelable: false }
        );
    }

    useEffect(() => {
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
    
        // Stop listening for updates when no longer required
        return () =>
          database()
            .ref(`/users/${user.uid}`)
            .off('value', onValueChange);
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
const width_button = width * 0.2;
var styles = StyleSheet.create({
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
    footer2:{
        flex:1,
        paddingHorizontal:20,
        },
    tabbar: {
        flex:1
    },
    imageBackground:{
        width: width*0.5,
        height: width*0.5 ,
        alignItems:'center'
    },
    imageBackground2:{
        width: width*0.7,
        height: width*0.7,
        alignItems:'center',
        justifyContent:'center'
    },
    title: {
        color:'black',
        marginTop:10,
        marginLeft:10,
        fontWeight:'bold',
        fontSize:20,
        alignItems:'center'
    },
    money: {
        color:'black',
        marginTop:10,
        marginLeft:10,
        fontWeight:'bold',
        fontSize:25,
        alignItems:'center'
    },
    topUp:{
        flex:2,
        alignItems:'center'
    },
    button: {
    width:width_button,
    height:40,
    justifyContent:'center',
    alignItems:'center'
    },
    imageTopup:{
    width: width*0.1,
    height: width*0.1,
    alignItems:'center'  
    }
})