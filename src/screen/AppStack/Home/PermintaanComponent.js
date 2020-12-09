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
import AsyncStorage from '@react-native-async-storage/async-storage';

const PermintaanComponent = ({navigation}) => {

    const {user} = useContext(AuthContext);
    const [permintaan, setPermintaan] = useState(1);
    const [namaPeminta, setNamaPeminta] = useState();
    const [namaPenerima, setNamaPenerima] = useState();
    const [golonganDarah, setGolonganDarah] = useState();
    const [jumlahDarah, setJumlahDarah] = useState();
    const [keteranganLain, setKeteranganLain] = useState();
    const [noHandphone, setNoHandphone] = useState();

    const Post = () => {
        console.log('REF :', permintaan);
        database().ref(`/PermintaanDarah/${user.uid}/Permintaan_${permintaan}`).update({
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

        // database()
        // .ref(`/PermintaanDarah/${user.uid}`)
        // .on('value', datadb => {
        //     console.log('User data: ', datadb.val());
        //   });
        
      }

      const storeData = async () => {
        try {
          const data = permintaan.toString()
          await AsyncStorage.setItem(`${user.id}`, data)
          console.log('STORE DATA :',data);
          console.log('ISI DATA PERMINTAAN :',permintaan);
        } catch (e) {
          // saving error
        }
      }

      const removeItem = async () => {
        try {
            await AsyncStorage.removeItem(`${user.id}`);
            return true;
        }
        catch(exception) {
            return false;
        }
      }

      
    
      const getData = async () => {
        try {
        const data = await AsyncStorage.getItem(`${user.id}`)
        if(data !== null) {
            const convert = parseInt(data)
            console.log('GET DATA :',convert);
            setPermintaan(convert);
            console.log('PERMINTAAN',permintaan);
            
        }
        } catch(e) {
        // error reading value
        }
    }

    useEffect(() => {
        //removeItem()
        getData();
    }, [])
  

    return(
        <View style={styles.container}>

            <Text style={styles.title}>Buat Permintaan Darah</Text>
            <View style={styles.action}>
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
            </View>
            <View style={{flexDirection:'row',flex:2,justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity 
            onPress={()=> {Post();setPermintaan(permintaan+1);storeData();} } //navigation.navigate("Submit");
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