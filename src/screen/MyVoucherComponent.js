import React from 'react';
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

export default class MyVoucherComponent extends React.Component{
    constructor(){
        super();
        this.state={
            data:[1,2,3,4]
        }

    }
    
    getData= async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        this.setState({
            data:data
        })
    }
    componentDidMount(){
        this.getData()
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <ImageBackground
                    source={require('../asset/bloodee1.png')}
                    style={styles.imageBackground}
                    >
                        
                    </ImageBackground>
                </View>
            <View style={{backgroundColor:'#efefef', padding:5,flex:15, marginTop:40}}>
                <Text style={{fontSize:20, color:'black', fontWeight:'bold', textAlign:'center'}}>Voucher Saya</Text>
                <View style={{textAlign:'center', alignItems:'center', marginTop:20}}> 
                        <Text style={{ fontSize: 15, fontWeight:'bold'}}>Vocuher Belanja Lajadut</Text>
                        <Text></Text>
                        <Text style={{textAlign:'center'}}>Tukarkan voucher belanja lajadut sebesar Rp.10.000 dengan syarat pembelian sebesar Rp.2.000.000.  </Text>
                        <Text style={{fontWeight:'bold'}}>Kode Voucher: ABCDEFGHIJKLMN</Text>
                        <Text></Text>
                        <Text>Batas Penukaran Voucher: 29 February 2021 </Text>
                    </View>
                    
                </View>
            </View>

                
                
                
                
        )
        }
}

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
        width: width*0.5,
        height: width*0.5 ,
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