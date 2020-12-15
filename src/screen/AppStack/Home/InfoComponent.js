import React, { useState, useEffect } from 'react';
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
import database from '@react-native-firebase/database';
import { TextInput } from 'react-native-gesture-handler';

const InfoComponent = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [dataPermintaan, setDataPermintaan] = useState([]);
    
    useEffect(() => {
      try{
        const onValueChange = database()
        .ref(`/PermintaanDarahAccepted/`)
        .on('value', snapshot => {
          const dataTemp = []
              snapshot.forEach(item => {
                dataTemp.push({ data : {
                  id: item.key,
                  Id: item.val().Id,
                  NamaPeminta: item.val().NamaPeminta,
                  NamaPenerima: item.val().NamaPenerima,
                  GolonganDarah: item.val().GolonganDarah,
                  JumlahDarah: item.val().JumlahDarah,
                  KeteranganLain: item.val().KeteranganLain,
                  NoHandphone: item.val().NoHandphone,
                  Alamat:item.val().Alamat,
                }      
                });
                return false;
              });
              setDataPermintaan(dataTemp);
        });
        return () =>
          database()
            .ref(`/PermintaanDarahAccepted/`)
            .off('value', onValueChange);
      }
      catch(e){
        console.log(e);
      }
      
    }, []);

    const Item = ({ item, onPress, style }) => (
      
      <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.deskripsi}>Peminta Darah :{item.data.NamaPeminta}</Text>
        <Text style={styles.deskripsi}>Penerima Darah :{item.data.NamaPenerima}</Text>
        <Text style={styles.deskripsi}>Golongan Darah Dibutuhkan :{item.data.GolonganDarah}</Text>
        <Text style={styles.deskripsi}>Kantong Darah Dibutuhkan :{item.data.JumlahDarah}</Text>
        <Text style={styles.deskripsi}>Keterangan Lain : {item.data.KeteranganLain}</Text>
        <Text style={styles.deskripsi}>Alamat:{item.data.Alamat}</Text>
      </TouchableOpacity>
    );
    
    const renderItem = ({ item }) => {
      const backgroundColor = item.data.id === selectedId ? "#f2f2f2" : "#fff";
  
      return (
        <Item
          item={item}
          onPress={() => setSelectedId(item.data.id)}
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
            <Text style={{fontSize:20, color:'black', fontWeight:'bold', textAlign:'center'}}>Info Terkini Seputar Donor Darah</Text>
            <TextInput placeholder="Cari" style={{textAlign:'center'}}></TextInput>
            <FlatList
                data={dataPermintaan}
                renderItem={renderItem}
                keyExtractor={item => item.data.id}
            />     
            </View>
        </View>
      
    )
}


export default InfoComponent;

const width = Dimensions.get('screen').width
const width_button = width * 0.2;
const styles = StyleSheet.create({
      item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:20,
        elevation:2,
      },
      deskripsi: {
          fontSize:15,
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
    imageBackground:{
        width: width*0.5,
        height: width*0.5 ,
        alignItems:'center'
    }
})