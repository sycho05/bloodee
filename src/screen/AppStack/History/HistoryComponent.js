import React, { useState, useEffect, useContext } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    FlatList,
    Button,
} from 'react-native';
import {AuthContext} from '../../../auth/AuthProvider';
import database from '@react-native-firebase/database';

const HistoryComponent = () => {
    const {user} = useContext(AuthContext);
    const [selectedId, setSelectedId] = useState(null);
    const [dataHistory, setDataHistory] = useState([]);
    
    useEffect(() => {
      const onValueChange = database()
        .ref(`/History/${user.uid}`)
        .on('value', snapshot => {
          const dataTemp = []
              snapshot.forEach(item => {
                dataTemp.push({ data : {
                    id: item.key,
                    Id: item.val().Id,
                    Tanggal: item.val().Donor,
                    Lokasi: item.val().GolonganDarah,
                }      
                });
                return false;
              });
              //console.log('Data Permintaan :',dataTemp);
              setDataHistory(dataTemp);
        });
      return () =>
        database()
          .ref(`/History/${user.uid}`)
          .off('value', onValueChange);
    }, []);

    const Item = ({ item, onPress, style }) => (
      
      <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.deskripsi}>Tanggal Donor :{item.data.Tanggal}</Text>
        <Text style={styles.deskripsi}>Lokasi :{item.data.Lokasi}</Text>
      </TouchableOpacity>
    );
    
    const renderItem = ({ item }) => {
      const backgroundColor = item.id === selectedId ? "#f2f2f2" : "#fff";
  
      return (
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
          style={{ backgroundColor }}
        />
      );
    };

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
            <Text style={{fontSize:20, color:'black', fontWeight:'bold', textAlign:'center'}}>History Donor Darah</Text>
            <FlatList
                data={dataHistory}
                renderItem={renderItem}
                keyExtractor={item => item.data.id}
            />     
            </View>
        </View>
         
    )
}


export default HistoryComponent;

const width = Dimensions.get('screen').width
const width_button = width * 0.2;
const styles = StyleSheet.create({

    containerlist: {
        flex:1,
        marginTop: 5,
        backgroundColor:'#fafafa',
        borderRadius:5,
        paddingTop:2,
        elevation:2
      },
      item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:20,
        elevation:2,
      },
      transaksi: {
        fontSize: 15,
        color:'#000'
      },
      deskripsi: {
          fontSize:15,
      },
      title: {
        fontSize:20,
        color:'white',
        fontWeight:'bold',
        marginBottom:10
      },


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