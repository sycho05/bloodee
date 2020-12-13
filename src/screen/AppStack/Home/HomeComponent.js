import React, { useContext, useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import {AuthContext} from '../../../auth/AuthProvider';
import database from '@react-native-firebase/database';

const HomeComponent = ({navigation}) => {

    const {user} = useContext(AuthContext);
    const [data2, setData2] = useState({
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
                    if(datadb.val() === null){
                        database().ref(`/users/${user.uid}`).set({
                            Id: user.uid,
                        });
                        console.log('User AKTIF');
                    }
                });
            }catch(e){
                alert('Ada Error Database');
            }
        }, []);


        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <ImageBackground
                    source={require('../../../asset/kartu3.png')}
                    style={styles.imageBackground3}
                    >
                    <View>
                    <Text style={{fontSize:20, textAlign:'center',marginTop:100}}>Kartu Donor Darah</Text>
                    <Text style={{fontSize:20, textAlign:'center', textDecorationLine:'underline'}}>Bloodee APP</Text>
                    <View style={{flexDirection:'row', justifyContent:'center', alignContent:'center'}}>
                        <ImageBackground
                            source={{uri: 'https://miro.medium.com/max/1424/1*sHmqYIYMV_C3TUhucHrT4w.png'}}
                            style={styles.imageBackground4}> 
                            <ImageBackground
                                source={require('../../../asset/goldardummy.png')}
                                style={styles.imageBackground5}> 
                            </ImageBackground>
                        </ImageBackground>
                        <View style={{flexDirection:'column', marginRight:0}}>
                        <Text style={{marginTop:10, flexDirection:'column'}}>No. ID : {data2.Id}</Text>
                            <Text>Nama : {data2.Nama}</Text>
                            <Text>Tempat Lahir : {data2.TempatLahir}</Text>
                            <Text>Tanggal Lahir : {data2.TanggalLahir}</Text>
                            <Text>Alamat : {data2.Alamat}</Text>
                            <Text>Wilayah : {data2.Wilayah}</Text>
                            <Text>No. Telp : {data2.NoHandphone}</Text>
                            <Text>Jenis Kelamin : {data2.JenisKelamin}</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
                </View>
            <View style={styles.footer2}>
            <View style={{flexDirection:"row",marginTop: 0}}>
                <TouchableOpacity
                onPress={()=>navigation.navigate("Permintaan")}
                style={[styles.button,{
                    borderColor:'#8a0303',
                    borderWidth:1,
                    borderRadius:15,
                    marginTop:15
                }]}>
                    <ImageBackground 
                    source={require('../../../asset/bloodee2.png')}
                    style={styles.imageBackground2}
                    >
                        
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>navigation.navigate("Info")}
                style={[styles.button,{
                    backgroundColor:'#8a0303',
                    borderRadius:15,
                    marginTop:15,
                    marginLeft:20
                }]}>
                    <ImageBackground 
                    source={require('../../../asset/news1.png')}
                    style={styles.imageBackground2}
                    >
                    </ImageBackground>
                </TouchableOpacity>
    
            </View>
            <View style={styles.footer2}>
            <View style={{flexDirection:"row", marginTop:15}}>
                <TouchableOpacity
                onPress={()=>navigation.navigate("Poin")}
                style={[styles.button,{
                    borderColor:'#8a0303',
                    borderWidth:1,
                    borderRadius:15,
                    marginTop:15
                }]}>
                    <ImageBackground 
                    source={require('../../../asset/coin1.png')}
                    style={styles.imageBackground2}
                    >
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>navigation.navigate("VoucherSaya")}
                style={[styles.button,{
                    backgroundColor:'#8a0303',
                    borderRadius:15,
                    marginTop:15,
                    marginLeft:20
                }]}>
                    <ImageBackground 
                    source={require('../../../asset/voucher1.png')}
                    style={styles.imageBackground2}
                    >
                    </ImageBackground>
                </TouchableOpacity>
    
            </View>
            <View style={styles.footer2}>
            <View style={{flexDirection:"row", marginTop:15}}>
                <TouchableOpacity
                onPress={()=>navigation.navigate("Kartu")}
                style={[styles.button2,{
                    borderColor:'#8a0303',
                    borderWidth:1,
                    borderRadius:15,
                    marginTop:15
                }]}>
                    <ImageBackground 
                    source={require('../../../asset/kartu.png')}
                    style={styles.imageBackground2}
                    >
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            </View>    
            </View>    
            </View> 
            </View>
            
        );
    }

    export default HomeComponent;

    const {width, height} = Dimensions.get('screen');
    const width_button = width * 0.45;
    const width_button2 = width * 0.95;

    const styles = StyleSheet.create({
    slide:{
    flex:1,
    backgroundColor:'white'
    },
    container:{
    flex:1,
    backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'center',
    },
    header: {
    marginTop:50
    },
    footer:{
    flex:1,
    alignItems:'center',
    paddingHorizontal:20,
    },
    footer2:{
    flex:1,
    alignItems:'center',
    paddingHorizontal:20,
    },
    title: {
    fontSize:25,
    fontWeight:'bold',
    color:'#8a0303',
    textAlign:'center'
    },
    button: {
    width:width_button,
    height:100,
    justifyContent:'center',
    alignItems:'center'
    },
    button2: {
        width:width_button2,
        height:100,
        justifyContent:'center',
        alignItems:'center'
        },
    imageBackground:{
    width: width*0.5,
    height: width*0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    },
    imageBackground2:{
    width: width*0.3,
    height: width*0.3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    },
    imageBackground3:{
        width: width*0.9,
        height: width*0.70,
        alignItems:'center',
        justifyContent:'center'
    },
    imageBackground4:{
        width: 100,
        height: 100,
        marginBottom:130,
        marginTop:10,
        marginRight:30
    },
    imageBackground5:{
        width: 70,
        height: 70,
        justifyContent:'center',
        marginBottom:110,
        marginTop:100,
        marginLeft:15
    },
})
    