import React, { useContext, useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    ImageBackground,
    Dimensions,
    TextInput,
    ToastAndroid,
} from 'react-native';

import {AuthContext} from '../../../auth/AuthProvider';
import database from '@react-native-firebase/database';

const EditComponent = ({navigation}) => {

    const {user} = useContext(AuthContext);
    const [dataKTP, setDataKTP] = useState();
    const [dataNama, setDataNama] = useState();
    const [dataTempatLahir, setDataTempatLahir] = useState();
    const [dataTanggalLahir, setDataTanggalLahir] = useState();
    const [dataAlamat, setDataAlamat] = useState();
    const [dataWilayah, setDataWilayah] = useState();
    const [dataJenisKelamin, setDataJenisKelamin] = useState();
    const [dataGolonganDarah, setDataGolonganDarah] = useState();
    const [dataNoHandphone, setDataNoHandphone] = useState();

    const Post = () => {
        database().ref(`/users/${user.uid}`).update({
            Id: user.uid,
            NoKTP: dataKTP,
            Nama: dataNama,
            TempatLahir: dataTempatLahir,
            TanggalLahir: dataTanggalLahir,
            Alamat: dataAlamat,
            Wilayah: dataWilayah,
            JenisKelamin: dataJenisKelamin,
            GolonganDarah: dataGolonganDarah,
            NoHandphone: dataNoHandphone,
        }).then(() => {
            ToastAndroid.show('Submit Data Berhasil !', ToastAndroid.SHORT);
        });
      }

    useEffect(() => {
    const onValueChange = database()
    .ref(`/users/${user.uid}`)
    .on('value', snapshot => {
        setDataKTP(snapshot.val().NoKTP);
        setDataNama(snapshot.val().Nama);
        setDataTempatLahir(snapshot.val().TempatLahir);
        setDataTanggalLahir(snapshot.val().TanggalLahir);
        setDataAlamat(snapshot.val().Alamat);
        setDataWilayah(snapshot.val().Wilayah);
        setDataJenisKelamin(snapshot.val().JenisKelamin);
        setDataGolonganDarah(snapshot.val().GolonganDarah);
        setDataNoHandphone(snapshot.val().NoHandphone);
        //console.log('Data User : ', snapshot.val());
        });

    return () =>
        database()
        .ref(`/users/${user.uid}`)
        .off('value', onValueChange);
    }, []);

    return(
        <View style={styles.container}>
            <View style={{margin:25, justifyContent:'center', alignContent:'center'}}>
            <ScrollView>  
            <Text style={styles.title}>Edit Profil</Text>
                <View style={styles.section}>
                    <TextInput
                        placeholder='No. KTP'
                        style={styles.textInput}
                        onChangeText={(input) =>setDataKTP(input)}
                        value={dataKTP}
                        >
                        </TextInput>
                </View> 
                <View style={styles.section}>
                    <TextInput
                        placeholder='Nama'
                        style={styles.textInput}
                        onChangeText={(input) => setDataNama(input)}
                        value={dataNama}
                        >

                        </TextInput>
                </View>
                <View style={styles.section}>
                    <TextInput 
                    placeholder='Tempat Lahir'
                    style={styles.textInput}
                    onChangeText={(input) => setDataTempatLahir(input)}
                    value={dataTempatLahir}
                    >

                    </TextInput>
                </View>
                <View style={styles.section}>
                    <TextInput 
                    placeholder='Tanggal Lahir'
                    style={styles.textInput}
                    onChangeText={(input) => setDataTanggalLahir(input)}
                    value={dataTanggalLahir}
                    >

                    </TextInput>
                </View>
                <View style={styles.section}>
                    <TextInput 
                    placeholder='Alamat'
                    style={styles.textInput}
                    onChangeText={(input) => setDataAlamat(input)}
                    value={dataAlamat}
                    >

                    </TextInput>
                </View>
                <View style={styles.section}>
                    <TextInput 
                    placeholder='Wilayah'
                    style={styles.textInput}
                    onChangeText={(input) => setDataWilayah(input)}
                    value={dataWilayah}
                    ></TextInput>
                </View>
                <View style={styles.section}>
                    <TextInput 
                    placeholder='Jenis Kelamin'
                    style={styles.textInput}
                    onChangeText={(input) => setDataJenisKelamin(input)}
                    value={dataJenisKelamin}
                    >

                    </TextInput>
                </View>
                <View style={styles.section}>
                    <TextInput 
                    placeholder='Golongan Darah'
                    style={styles.textInput}
                    onChangeText={(input) => setDataGolonganDarah(input)}
                    value={dataGolonganDarah}
                    >

                    </TextInput>
                </View>
                <View style={styles.section}>
                    <TextInput 
                    placeholder='No. Handphone'
                    style={styles.textInput}
                    onChangeText={(input) => setDataNoHandphone(input)}
                    value={dataNoHandphone}
                    >

                    </TextInput>
                </View>
        
            <View style={{flexDirection:"row",justifyContent:'center', alignItems:'center', marginBottom:10, marginHorizontal:20}}>
                <TouchableOpacity
                    onPress={()=> { Post(); navigation.reset({
                        index: 0,
                        routes: [{ name: 'Profil' }],
                    });}}
                    style={[styles.button,{
                        borderColor:'#8a0303',
                        borderWidth:1,
                        borderRadius:15,
                        marginTop:15
                    }]}>
                    <Text style={{color:'#8a0303',fontWeight:'bold'}}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> {navigation.reset({
                        index: 0,
                        routes: [{ name: 'Profil' }],
                    });}}
                    style={[styles.button,{ 
                        backgroundColor:'#8a0303', 
                        borderRadius:15,
                        marginTop:15,
                        marginLeft:15
                    }]}>
                        <Text style={{color:'white',fontWeight:'bold'}}>Kembali</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
            </View>
        </View>

    )
 }

 export default EditComponent;

const {width, height} = Dimensions.get('screen');
const width_button = width * 0.2;
var styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignContent:'center',
    },
    title:{
        color: '#8a0303',
        fontWeight :'bold',
        fontSize:30,
        textAlign:'center'
    },
    section: {
        flexDirection:'row',
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:15,
        paddingVertical:1,
        alignItems:'center',
        marginTop:10,
    }, 
    textInput:{
        flex:0,
        paddingLeft:10
    },
    button: {
        width:width_button,
        height:40,
        justifyContent:'center',
        alignItems:'center'
    },

});