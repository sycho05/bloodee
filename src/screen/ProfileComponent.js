import React, {useContext} from 'react';
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
import {AuthContext} from '../auth/AuthProvider';

const ProfileComponent = ({navigation}) => {
    const {user, logout} = useContext(AuthContext);

        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <ImageBackground
                    source={require('../asset/navbarprofile.png')}
                    style={styles.imageBackground}
                    >    
                    </ImageBackground>
                </View>
            <View>
                <Text style={{marginTop:20,textAlign:'center',justifyContent:'center', color:'black',fontWeight:'bold',fontSize:30,}}>Profil Saya</Text>
            </View>
            {/* <View style={{backgroundColor:'#efefef', padding:5,flex:15, marginTop:40}}>
                <Text style={{fontSize:15}}></Text>
                <FlatList
                data={this.state.data}
                keyExtractor={(item,index)=> index.toString()}
                renderItem={({item})=>
                    <View style={{padding:20, margin:1, backgroundColor:'#fff', flexDirection:'column'}}>
                        <Text>Nama  : {item.name}</Text>
                        <Text>Email : {item.email}</Text>
                    </View>
                    }/>
                </View> */}
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