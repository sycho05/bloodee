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

const KartuComponent = ({navigation}) =>{

    const {user} = useContext(AuthContext);
    const [dataUser, setDataUser] = useState({
        Id:null,
        Nama:null,
        TempatLahir:null,
        TanggalLahir:null,
        Alamat:null,
        Wilayah:null,
        NoHandphone:null,
    });

    useEffect(() => {
        try{
            database()
            .ref(`/users/${user.uid}`)
            .on('value', datadb => {
                console.log('User : ', datadb.val());
                setDataUser(datadb.val());
                // if(datadb.val())
                // setDataUser(datadb.val());
                
                });

        }catch(e){
            alert('Terdapat Error Database');
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
            <Text style={{marginTop:10,fontSize:20, color:'black', fontWeight:'bold', textAlign:'center'}}>Kartu Donor Digital</Text>
        </View>
        <View style={{padding:1, marginTop:40}}>
            <View style={{ margin:0, backgroundColor:'#fff',alignItems:'center', justifyContent:'center'}}>
            <ImageBackground
                source={require('../../../asset/kartu2.png')}
                style={styles.imageBackground2}>
                <View>
                    <Text style={{fontSize:20, textAlign:'center'}}>Kartu Donor Darah</Text>
                    <Text style={{fontSize:20, textAlign:'center', textDecorationLine:'underline'}}>Bloodee APP</Text>
                    <View style={{flexDirection:'row', justifyContent:'center', alignContent:'center'}}>
                        <ImageBackground
                            source={{uri: 'https://miro.medium.com/max/1424/1*sHmqYIYMV_C3TUhucHrT4w.png'}}
                            style={styles.imageBackground3}> 
                            <ImageBackground
                                source={require('../../../asset/goldardummy.png')}
                                style={styles.imageBackground4}> 
                            </ImageBackground>
                        </ImageBackground>
                        <View style={{flexDirection:'column', marginRight:120}}>
                            <Text style={{marginTop:10, flexDirection:'column'}}>No. ID : {dataUser.Id}</Text>
                            <Text>Nama : {dataUser.Nama}</Text>
                            <Text>Tempat Lahir : {dataUser.TempatLahir}</Text>
                            <Text>Tanggal Lahir : {dataUser.TanggalLahir}</Text>
                            <Text>Alamat : {dataUser.Alamat}</Text>
                            <Text>Wilayah : {dataUser.Wilayah}</Text>
                            <Text>No. Telp : {dataUser.NoHandphone}</Text>
                            <Text>Jenis Kelamin : {dataUser.JenisKelamin}</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
            </View>
        </View>
    </View>            
    );
}

export default KartuComponent;

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
        width: width*1.02,
        height: width*1.02,
        alignItems:'center',
        justifyContent:'center'
    },
    imageBackground3:{
        width: 100,
        height: 100,
        marginBottom:130,
        marginTop:10,
        marginRight:30
    },
    imageBackground4:{
        width: 70,
        height: 70,
        justifyContent:'center',
        marginBottom:110,
        marginTop:100,
        marginLeft:15
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