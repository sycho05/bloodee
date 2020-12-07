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

        database()
        .ref(`/users/${user.uid}`)
        .on('value', datadb => {
            console.log('User data: ', datadb.val());
          });
        
      }

    return(
        <View style={styles.container}>
            <ScrollView>
            <Text style={styles.title}>Edit Profil</Text>
            <View style={styles.action}>
            
                {/* <View style={styles.section}>
                    <TextInput
                        placeholder='No Register'
                        style={styles.textInput}>
                        </TextInput>
                </View> */}
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
                    ></TextInput>
                </View>
                <View style={styles.section}>
                    <TextInput 
                    placeholder='Tanggal Lahir'
                    style={styles.textInput}
                    onChangeText={(input) => setDataTanggalLahir(input)}
                    value={dataTanggalLahir}
                    ></TextInput>
                </View>
                <View style={styles.section}>
                    <TextInput 
                    placeholder='Alamat'
                    style={styles.textInput}
                    onChangeText={(input) => setDataAlamat(input)}
                    value={dataAlamat}
                    ></TextInput>
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
                    ></TextInput>
                </View>
                <View style={styles.section}>
                    <TextInput 
                    placeholder='Golongan Darah'
                    style={styles.textInput}
                    onChangeText={(input) => setDataGolonganDarah(input)}
                    value={dataGolonganDarah}
                    ></TextInput>
                </View>
                <View style={styles.section}>
                    <TextInput 
                    placeholder='No. Hanphone'
                    style={styles.textInput}
                    onChangeText={(input) => setDataNoHandphone(input)}
                    value={dataNoHandphone}
                    ></TextInput>
                </View>
            </View>
            </ScrollView>
            <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity 
            onPress={()=> { Post(); navigation.navigate("Profil");}}
            style={styles.login}> 
                <Text style={styles.textLogin}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=> navigation.navigate("Profil")}
            style={styles.login2}> 
                <Text style={styles.textLogin}>Kembali</Text>
            </TouchableOpacity>
        </View>
        </View>

    )
 }

 export default EditComponent;

const {width, height} = Dimensions.get('screen');
const width_button = width * 0.45;
const width_button2 = width * 0.95
var styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        paddingHorizontal:20,
        paddingVertical:100
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
    forgot:{
        textAlign:'right',
        marginTop:15,
        color:'#8a0303'
    },
    textLogin:{
        color:'white',
        fontSize:15,
        fontWeight:'bold'
    },
    login:{
        width:'30%',
        height:40,
        backgroundColor:'#8a0303',
        justifyContent:'center',
        alignItems:'center',
        marginTop:25,
        borderRadius:50,
    },
    login2:{
        width:'30%',
        height:40,
        backgroundColor:'#8a0303',
        justifyContent:'center',
        alignItems:'center',
        marginTop:25,
        borderRadius:50,
        marginLeft:10
    },
    signUp:{
        textAlign:'center',
        marginTop:15,
        color:'grey'
    },

});