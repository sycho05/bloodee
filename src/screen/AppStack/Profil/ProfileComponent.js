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
} from 'react-native';
import {AuthContext} from '../../../auth/AuthProvider';
import database from '@react-native-firebase/database';

const ProfileComponent = ({navigation}) => {
    const {user, logout} = useContext(AuthContext);

    const [dataUser, setDataUser] = useState({
        Id:null,
        Nama:null,
        TempatLahir:null,
        TanggalLahir:null,
        Alamat:null,
        JenisKelamin:null,
        GolonganDarah:null,
        Wilayah:null,
        NoHandphone:null,
    });

    useEffect(() => {
        try{
            database()
            .ref(`/users/${user.uid}`)
            .on('value', datadb => {
                setDataUser(datadb.val());
                console.log('User : ', datadb.val());
                });

        }catch(e){
            alert('Terdapat Error Database');
        }
    }, []);

    useEffect(() => {
        const onValueChange = database()
        .ref(`/users/${user.uid}`)
        .on('value', snapshot => {
            setDataUser(snapshot.val());
            //console.log('Data User : ', snapshot.val());
            });
    
        return () =>
          database()
            .ref(`/users/${user.uid}`)
            .off('value', onValueChange);
      }, [dataUser]);

        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <ImageBackground
                    source={require('../../../asset/navbarprofile.png')}
                    style={styles.imageBackground}
                    >    
                    </ImageBackground>
                </View>
            <View>
                <Text style={{marginTop:20,textAlign:'center',justifyContent:'center', color:'black',fontWeight:'bold',fontSize:30,}}>Profil Saya</Text>
            </View>
                <View style={{justifyContent:'center', alignContent:'center',backgroundColor:'#fff', borderRadius:25, elevation:10, marginHorizontal:10, marginTop:10}}>
                    <Text style={{paddingLeft:20, paddingVertical:10}}>Id : {dataUser.Id}</Text>
                </View>
                <View style={{justifyContent:'center', alignContent:'center',backgroundColor:'#fff', borderRadius:25, elevation:10, marginHorizontal:10, marginTop:10}}>
                    <Text style={{paddingLeft:20, paddingVertical:10}}>Nama : {dataUser.Nama}</Text>
                </View>
                <View style={{justifyContent:'center', alignContent:'center',backgroundColor:'#fff', borderRadius:25, elevation:10, marginHorizontal:10, marginTop:10}}>
                    <Text style={{paddingLeft:20, paddingVertical:10}}>Tempat Tinggal : {dataUser.TempatLahir}</Text>
                </View>
                <View style={{justifyContent:'center', alignContent:'center',backgroundColor:'#fff', borderRadius:25, elevation:10, marginHorizontal:10, marginTop:10}}>
                    <Text style={{paddingLeft:20, paddingVertical:10}}>Tanggal Lahir : {dataUser.TanggalLahir}</Text>
                </View>
                <View style={{justifyContent:'center', alignContent:'center',backgroundColor:'#fff', borderRadius:25, elevation:10, marginHorizontal:10, marginTop:10}}>    
                    <Text style={{paddingLeft:20, paddingVertical:10}}>Alamat : {dataUser.Alamat}</Text>
                </View>    
                <View style={{justifyContent:'center', alignContent:'center',backgroundColor:'#fff', borderRadius:25, elevation:10, marginHorizontal:10, marginTop:10}}>   
                    <Text style={{paddingLeft:20, paddingVertical:10}}>Jenis Kelamin : {dataUser.JenisKelamin}</Text>
                </View>
                <View style={{justifyContent:'center', alignContent:'center',backgroundColor:'#fff', borderRadius:25, elevation:10, marginHorizontal:10, marginTop:10}}>
                    <Text style={{paddingLeft:20, paddingVertical:10}}>Golongan Darah : {dataUser.GolonganDarah}</Text>
                </View>
                <View style={{justifyContent:'center', alignContent:'center',backgroundColor:'#fff', borderRadius:25, elevation:10, marginHorizontal:10, marginTop:10}}>
                    <Text style={{paddingLeft:20, paddingVertical:10}}>No Handphone : {dataUser.NoHandphone}</Text>
                </View>    

                <View style={{flexDirection:"row",flex:2,justifyContent:'center', alignItems:'center'}}>
                <TouchableOpacity
                onPress={()=>logout()}
                style={[styles.button,{
                    borderColor:'#8a0303',
                    borderWidth:1,
                    borderRadius:15,
                    marginTop:15
                }]}>
                    <Text style={{color:'#8a0303',fontWeight:'bold'}}>Log Out</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>navigation.navigate('Edit')}
                style={[styles.button,{ 
                    backgroundColor:'#8a0303', 
                    borderRadius:15,
                    marginTop:15,
                    marginLeft:15
                }]}>
                    <Text style={{color:'white',fontWeight:'bold'}}>Edit Profil</Text>
                </TouchableOpacity>
    
            </View>
                
                
                
                
            
            <View style={styles.tabbar}>

            </View>
            </View>

                
                
                
                
        )
}


export default ProfileComponent;

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
        width: width*0.4,
        height: width*0.4,
        alignItems:'center'
    },
    imageBackground2:{
        width: width*0.25,
        height: width*0.25,
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