import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';

export default class Home extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <ImageBackground
                    source={require('../asset/bloodee1.png')}
                    style={styles.imageBackground}
                    >
                    </ImageBackground>
                </View>
            <View style={styles.footer2}>
            <View style={{flexDirection:"row",marginTop: 40}}>
                <TouchableOpacity
                onPress={()=>this.props.navigation.navigate("Permintaan")}
                style={[styles.button,{
                    borderColor:'#8a0303',
                    borderWidth:1,
                    borderRadius:15,
                    marginTop:15
                }]}>
                    <ImageBackground 
                    source={require('../asset/bloodee2.png')}
                    style={styles.imageBackground2}
                    >
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>this.props.navigation.navigate("Info")}
                style={[styles.button,{
                    backgroundColor:'#8a0303',
                    borderRadius:15,
                    marginTop:15,
                    marginLeft:20
                }]}>
                    <ImageBackground 
                    source={require('../asset/news1.png')}
                    style={styles.imageBackground2}
                    >
                    </ImageBackground>
                </TouchableOpacity>
    
            </View>
            <View style={styles.footer2}>
            <View style={{flexDirection:"row", marginTop:15}}>
                <TouchableOpacity
                onPress={()=>this.props.navigation.navigate("Poin")}
                style={[styles.button,{
                    borderColor:'#8a0303',
                    borderWidth:1,
                    borderRadius:15,
                    marginTop:15
                }]}>
                    <ImageBackground 
                    source={require('../asset/coin1.png')}
                    style={styles.imageBackground2}
                    >
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>this.props.navigation.navigate("VoucherSaya")}
                style={[styles.button,{
                    backgroundColor:'#8a0303',
                    borderRadius:15,
                    marginTop:15,
                    marginLeft:20
                }]}>
                    <ImageBackground 
                    source={require('../asset/voucher1.png')}
                    style={styles.imageBackground2}
                    >
                    </ImageBackground>
                </TouchableOpacity>
    
            </View>
            <View style={styles.footer2}>
            <View style={{flexDirection:"row", marginTop:15}}>
                <TouchableOpacity
                onPress={()=>this.props.navigation.navigate("Kartu")}
                style={[styles.button2,{
                    borderColor:'#8a0303',
                    borderWidth:1,
                    borderRadius:15,
                    marginTop:15
                }]}>
                    <ImageBackground 
                    source={require('../asset/kartu.png')}
                    style={styles.imageBackground2}
                    >
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            </View>    
            </View>    
            </View> 
            </View>
            
        );
    }}

    const {width, height} = Dimensions.get('screen');
    const width_button = width * 0.45;
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
})
    