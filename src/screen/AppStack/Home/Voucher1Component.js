import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native'

export default class Voucher1Component extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                </View>
                <View style={styles.footer2}>
            <View style={{flexDirection:"row", marginTop:15, marginTop:70}}>
            </View>
            <Text style={styles.title}>Anda Akan Menukar Voucher Berikut:  </Text>
            <View style={styles.footer2}>
            <View style={{flexDirection:"column",marginTop: 40}}>
                <TouchableOpacity
                style={[styles.button,{
                    borderColor:'#8a0303',
                    borderWidth:1,
                    borderRadius:15,
                    marginTop:15
                }]}>
                    <Text style={{fontWeight:'bold', fontSize:20}}>Voucher</Text>
                    <Text style={{textAlign:'center'}}>Potongan Belanja Senilai Rp. 10.000</Text>
                    <Text style={{marginTop:20}}>Poin Penukaran: 1000</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row",marginTop: 40}}>
                <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate("Poin")}
                style={styles.login}> 
                    <Text style={styles.textLogin}>Tutup</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate("Home")}
                style={styles.login}> 
                    <Text style={styles.textLogin}>Submit</Text>
                </TouchableOpacity>
                
            </View>  
            </View>
            </View>
            </View>     
            
        );
    }}

    const {width, height} = Dimensions.get('screen');
    const width_button = width * 0.80;
    const width_button2 = width * 0.95;
    var styles = StyleSheet.create({
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
    login:{
        width:80,
        height:40,
        backgroundColor:'#8a0303',
        justifyContent:'center',
        alignItems:'center',
        marginTop:25,
        borderRadius:50,
        marginRight:10
    },
    textLogin:{
        color:'white',
        fontSize:15,
        fontWeight:'bold',
    },
})
    