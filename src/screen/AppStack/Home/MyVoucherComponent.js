import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    FlatList,
    ScrollView,
} from 'react-native';

const MyVoucherComponent = () => {

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <ImageBackground
                source={require('../../../asset/bloodee1.png')}
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

export default MyVoucherComponent;

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
    imageBackground:{
        width: width*0.5,
        height: width*0.5 ,
        alignItems:'center'
    },
})