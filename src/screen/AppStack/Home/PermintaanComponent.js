import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    ImageBackground,
    Dimensions,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
export default class PermintaanComponent extends React.Component{
    
    
    render(){
        return(
            <View style={styles.container}>

                <Text style={styles.title}>Buat Permintaan Darah</Text>
                <View style={styles.action}>
                    <View style={styles.section}>
                        <TextInput
                            placeholder='Nama Peminta Darah'
                            style={styles.textInput}>
                            </TextInput>
                    </View>
                    
                    <View style={styles.section}>
                        <TextInput
                            placeholder='Nama Penerima Darah'
                            style={styles.textInput}>

                            </TextInput>
                    </View>
                    <View style={styles.section}>
                        <TextInput 
                        placeholder='Golongan Darah Yang Dibutuhkan'
                        style={styles.textInput}></TextInput>
                    </View>
                    <View style={styles.section}>
                        <TextInput 
                        placeholder='Jumlah Kantong Darah'
                        style={styles.textInput}></TextInput>
                    </View>
                    <View style={styles.section}>
                        <TextInput 
                        placeholder='Keterangan Lain'
                        style={styles.textInput}></TextInput>
                    </View>
                    <View style={styles.section}>
                        <TextInput 
                        placeholder='No. Hp Yang Dapat Dihubungi'
                        style={styles.textInput}></TextInput>
                    </View>
                </View>
                <View style={{flexDirection:"row",flex:2,justifyContent:'center', alignItems:'center'}}>
                <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate("Submit")}
                style={styles.login}> 
                    <Text style={styles.textLogin}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate("Home")}
                style={styles.login2}> 
                    <Text style={styles.textLogin}>Kembali</Text>
                </TouchableOpacity>
            </View>
            </View>

        )
    }
}
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