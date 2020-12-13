import React, {useEffect, useState, useContext} from 'react';
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

const PermintaanComponent = ({navigation}) => {

    const {user} = useContext(AuthContext);
    const [permintaan, setPermintaan] = useState();
    const [namaPeminta, setNamaPeminta] = useState();
    const [namaPenerima, setNamaPenerima] = useState();
    const [golonganDarah, setGolonganDarah] = useState();
    const [jumlahDarah, setJumlahDarah] = useState();
    const [keteranganLain, setKeteranganLain] = useState();
    const [noHandphone, setNoHandphone] = useState();

    const Post = () => {
        console.log('REF :', permintaan);
        database().ref(`PermintaanDarah/Permintaan_${user.uid}_${permintaan}`).update({
            Id: user.uid,
            NamaPeminta: namaPeminta,
            NamaPenerima: namaPenerima,
            GolonganDarah: golonganDarah,
            JumlahDarah: jumlahDarah,
            KeteranganLain: keteranganLain,
            NoHandphone: noHandphone
        }).then(() => {
            ToastAndroid.show('Submit Data Berhasil !', ToastAndroid.SHORT);
        });
        
      }

      const storeData = () => {
        try {

            database().ref(`/counter/users/${user.uid}`).update({
                key: permintaan,
            });
            console.log('key counter store firebase sukses');
        } catch (e) {
          console.log(e);
        }
      }
    
      const getData = () => {
        try {
            database()
            .ref(`/counter/users/${user.uid}`)
            .on('value', datadb => {

                if(datadb.val() !== null) {
                    const data = datadb.val().key;
                    setPermintaan(data+1);
                    console.log('key counter get firebase sukses');
                    
                }else{
                    setPermintaan(1);
                    console.log('key counter get firebase kosong');
                }
            });
        
        } catch(e) {
            console.log(e);
            setPermintaan(1);
        }
    }

    useEffect(() => {
        getData();
    }, [])
  

    return(
        <View style={styles.container}>

            <Text style={styles.title}>Buat Permintaan Darah</Text>
            <View style={styles.action}>
            <View style={styles.section}>
                    <TextInput 
                    placeholder='No KTP'
                    style={styles.textInput}
                    >

                    </TextInput>
                </View>
                <View style={styles.section}>
                    <TextInput
                        placeholder='Nama Peminta Darah'
                        style={styles.textInput}
                        onChangeText={(input) => setNamaPeminta(input)}
                        >
                        </TextInput>
                </View>
                
                <View style={styles.section}>
                    <TextInput
                        placeholder='Nama Penerima Darah'
                        style={styles.textInput}
                        onChangeText={(input) => setNamaPenerima(input)}
                        >

                        </TextInput>
                </View>
                <View style={styles.section}>
                    <TextInput 
                    placeholder='Golongan Darah Yang Dibutuhkan'
                    style={styles.textInput}
                    onChangeText={(input) => setGolonganDarah(input)}
                    >

                    </TextInput>
                </View>
                <View style={styles.section}>
                    <TextInput 
                    placeholder='Jumlah Kantong Darah'
                    style={styles.textInput}
                    onChangeText={(input) => setJumlahDarah(input)}
                    >

                    </TextInput>
                </View>
                <View style={styles.section}>
                    <TextInput 
                    placeholder='Keterangan Lain'
                    style={styles.textInput}
                    onChangeText={(input) => setKeteranganLain(input)}
                    >

                    </TextInput>
                </View>
                <View style={styles.section}>
                    <TextInput 
                    placeholder='No. Hp Yang Dapat Dihubungi'
                    style={styles.textInput}
                    onChangeText={(input) => setNoHandphone(input)}
                    >

                    </TextInput>
                </View>
                <View style={styles.section}>
                    <TextInput 
                    placeholder='Alamat'
                    style={styles.textInput}
                    >

                    </TextInput>
                </View>
            </View>
            <View style={{flexDirection:'row',flex:2,justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity 
            onPress={()=> {Post();setPermintaan(permintaan+1);storeData();navigation.navigate('Submit')} } //navigation.navigate("Submit");
            style={styles.login}> 
                <Text style={styles.textLogin}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=> navigation.navigate('Home')}
            style={styles.login2}> 
                <Text style={styles.textLogin}>Kembali</Text>
            </TouchableOpacity>
        </View>
        </View>

    )
}

export default PermintaanComponent;

const {width, height} = Dimensions.get('screen');
const width_button = width * 0.45;
const width_button2 = width * 0.95
const styles = StyleSheet.create({
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
        marginTop:50,
        borderRadius:50,
    },
    login2:{
        width:'30%',
        height:40,
        backgroundColor:'#8a0303',
        justifyContent:'center',
        alignItems:'center',
        marginTop:50,
        borderRadius:50,
        marginLeft:10
    },
    signUp:{
        textAlign:'center',
        marginTop:15,
        color:'grey'
    },

});