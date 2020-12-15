import React, { useContext, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    ToastAndroid,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {AuthContext} from '../../auth/AuthProvider';

const SignUpComponent = ({navigation}) => {

    const {register} = useContext(AuthContext);

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const userSignUp = () =>{
        if(email && password){
            if(password.length < 8){
                ToastAndroid.show('Password Minimal Terdiri Dari 8 Huruf !', ToastAndroid.SHORT);
            }else{
                register(email, password);
            }      
        }else{
            console.log(email,'||', password);
            ToastAndroid.show('Email/Password Tidak Boleh Kosong !', ToastAndroid.SHORT);
        }
    }
    

        return(
            <View style={styles.container}>
                <Text style={styles.title}>Sign Up</Text>
                <View style={styles.action}>
                    <View style={styles.section}>
                        <TextInput 
                        placeholder='Email'
                        style={styles.textInput}
                        onChangeText={(userEmail) => setEmail(userEmail)}
                        ></TextInput>
                    </View>
                    <View style={styles.section}>
                        <TextInput 
                        placeholder='Password'
                        style={styles.textInput} secureTextEntry={true}
                        onChangeText={(userPassword) => setPassword(userPassword)}
                        ></TextInput>
                    </View>
                </View>
                <TouchableOpacity 
                onPress={() => userSignUp()}
                style={styles.login}> 
                    <Text style={styles.textLogin}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => navigation.navigate("LoginScreen")}>
                    <Text style={styles.signUp}>Already have an account?</Text>
                </TouchableOpacity>
            </View>
        )
}

export default SignUpComponent;

var styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        paddingHorizontal:30,
        paddingVertical:100
    },
    title:{
        color: '#8a0303',
        fontWeight :'bold',
        fontSize:30,
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
        width:'100%',
        height:40,
        backgroundColor:'#8a0303',
        justifyContent:'center',
        alignItems:'center',
        marginTop:25,
        borderRadius:50,
    },
    signUp:{
        textAlign:'center',
        marginTop:15,
        color:'grey'
    }
    

});