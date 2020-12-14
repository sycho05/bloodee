import React, { useContext, useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions,
    TouchableOpacity,
    Alert,
} from 'react-native';
import {AuthContext} from '../../../auth/AuthProvider';
import database from '@react-native-firebase/database';

const HomeComponent = ({navigation}) => {

    const {user} = useContext(AuthContext);
    const [dataUser, setDataUser] = useState({
        Id:null,
        NoKTP:null,
        Nama:null,
        TempatLahir:null,
        TanggalLahir:null,
        Alamat:null,
        Wilayah:null,
        NoHandphone:null,
    });

    const PopUpAlert = () =>{
        Alert.alert(
            "Alert",
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
        const unsubscribe = navigation.addListener('focus', () => {
            try{
                database()
                .ref(`/users/${user.uid}`)
                .on('value', datadb => {
                    console.log('User : ', datadb.val());

                    if(datadb.val() === null){
                        database().ref(`/users/${user.uid}`).set({
                            Id: user.uid,
                            NoKTP: '',
                            Nama: '',
                            TempatLahir: '',
                            TanggalLahir: '',
                            Alamat: '',
                            Wilayah: '',
                            JenisKelamin: '',
                            GolonganDarah: '',
                            NoHandphone: '',
                        });
                        console.log('User AKTIF');
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Profil' }],
                          });
                        PopUpAlert();
                    }else{
                        console.log('APAKAH INI DIJALANIN ??')
                        setDataUser(datadb.val());

                        if(datadb.val().NoKTP === ''||datadb.val().Nama === '' || datadb.val().TempatTinggal === '' || datadb.val().TanggalLahir === '' || datadb.val().Alamat === '' || datadb.val().Wilayah === '' || datadb.val().JenisKelamin === '' || datadb.val().GolonganDarah === '' || datadb.val().NoHandphone === ''){
                            console.log('NAMA NULL KESINI', datadb.val());
                            PopUpAlert();
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'Profil' }],
                              });
                        }
                    }
     
                });
            }catch(e){
                console.log(e);
                alert('Ada Error Database');
            }
        });
    
        return unsubscribe;
        }, [navigation]);

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
                        <Text style={{marginTop:100, fontSize:40, fontWeight:'bold', marginLeft:30}}>{dataUser.GolonganDarah}</Text>
                        </ImageBackground>
                        <View style={{flexDirection:'column', marginRight:0}}>
                        <Text style={{marginTop:10, flexDirection:'column'}}>No. ID : {dataUser.Id}</Text>
                            <Text>No KTP : 1234567891011{dataUser.NoKTP}</Text>
                            <Text>Nama : {dataUser.Nama}</Text>
                            <Text>Jenis Kelamin : {dataUser.JenisKelamin}</Text>
                            <Text>Tempat Lahir : {dataUser.TempatLahir}</Text>
                            <Text>Tanggal Lahir : {dataUser.TanggalLahir}</Text>
                            <Text>Alamat : {dataUser.Alamat}</Text>
                            <Text>Wilayah : {dataUser.Wilayah}</Text>
                            <Text>No. Telp : {dataUser.NoHandphone}</Text>


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
                onPress={()=>navigation.navigate("Lokasi Donor")}
                style={[styles.button,{
                    borderColor:'#8a0303',
                    borderWidth:1,
                    borderRadius:15,
                    marginTop:15
                }]}>
                    <ImageBackground 
                    source={require('../../../asset/Lokasi.png')}
                    style={styles.imageBackground2}
                    >
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>navigation.navigate("History")}
                style={[styles.button,{
                    backgroundColor:'#8a0303',
                    borderRadius:15,
                    marginTop:15,
                    marginLeft:20
                }]}>
                    <ImageBackground 
                    source={require('../../../asset/history2.png')}
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
        width: width*1.03,
        height: width*0.70,
        alignItems:'center',
        justifyContent:'center'
    },
    imageBackground4:{
        width: 100,
        height: 100,
        marginBottom:130,
        marginTop:10,
        marginRight:10
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
    