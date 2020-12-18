import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Image,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {getDistance} from 'geolib';

const LocationComponent = () => {
  const [datajarak, setJarak] = useState({
    jarakITTP: null,
    jarakPMI: null,
    jarakRSUD: null,
    jarakUNSOED: null,
    jarakMKBT: null,
  });

  const [currentPosition, setCurrentPosition] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  const [selectedId, setSelectedId] = useState(null);
  const [load, setLoad] = useState(false);

  const DATA = [
    {
      id: '1',
      title: 'IT Telkom Purwokerto',
      deskripsi: 'Donor Pukul 10:00 - 15:00 !',
      jarak: datajarak.jarakITTP,
    },
    {
      id: '2',
      title: 'PMI Purwokerto',
      deskripsi: 'Donor Pukul 08:00 - 15:00 !',
      jarak: datajarak.jarakPMI,
    },
    {
      id: '3',
      title: 'RSUD MARGONO SOEKARJO',
      deskripsi: 'Donor Pukul 08:00 - 12:00 !',
      jarak: datajarak.jarakRSUD,
    },
    {
      id: '4',
      title: 'RSGMP UNSOED',
      deskripsi: 'Donor Pukul 08:00 - 12:00 !',
      jarak: datajarak.jarakUNSOED,
    },
    {
      id: '5',
      title: 'Mitra Keluarg Bekasi Timur',
      deskripsi: 'Donor Sekarang !',
      jarak: datajarak.jarakMKBT,
    },
  ];

  const Item = ({item, onPress, style}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.transaksi}>{item.title}</Text>
      <Text style={styles.deskripsi}>{item.deskripsi}</Text>
      <Text style={styles.deskripsi}>{item.jarak}m</Text>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#f2f2f2' : '#fff';

    return (
      <Item
        item={item}
        onPress={() => {
          console.log(item.id);
          setSelectedId(item.id);
          if (item.id == 1) {
            setCurrentPosition({
              ...currentPosition,
              latitude: -7.434923,
              longitude: 109.251937,
            });
          } else if (item.id == 2) {
            setCurrentPosition({
              ...currentPosition,
              latitude: -7.423615,
              longitude: 109.239141,
            });
          } else if (item.id == 3) {
            setCurrentPosition({
              ...currentPosition,
              latitude: -7.417449,
              longitude: 109.231547,
            });
          } else if (item.id == 4) {
            setCurrentPosition({
              ...currentPosition,
              latitude: -7.410808,
              longitude: 109.25385,
            });
          } else if (item.id == 5) {
            setCurrentPosition({
              ...currentPosition,
              latitude: -6.260262,
              longitude: 107.012705,
            });
          }
        }}
        style={{backgroundColor}}
      />
    );
  };

  const GetPosition = () => {
    Geolocation.getCurrentPosition((position) => {
      const {longitude, latitude} = position.coords;
      setCurrentPosition({
        ...currentPosition,
        latitude,
        longitude,
      });
      const jarakMKBT = getDistance(position.coords, {
        latitude: -6.260262,
        longitude: 107.012705,
      });
      const jarakITTP = getDistance(position.coords, {
        latitude: -7.434923,
        longitude: 109.251937,
      });
      const jarakPMI = getDistance(position.coords, {
        latitude: -7.423615,
        longitude: 109.239141,
      });
      const jarakRSUD = getDistance(position.coords, {
        latitude: -7.417449,
        longitude: 109.231547,
      });
      const jarakUNSOED = getDistance(position.coords, {
        latitude: -7.410808,
        longitude: 109.25385,
      });

      setJarak({
        jarakITTP: jarakITTP,
        jarakPMI: jarakPMI,
        jarakRSUD: jarakRSUD,
        jarakUNSOED: jarakUNSOED,
        jarakMKBT: jarakMKBT,
      });
      console.log(datajarak);
    });
  };

  useEffect(() => {
    GetPosition();
    setLoad(true);
  }, []);

  return load ? (
    <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
      <View style={{flex: 2}}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            backgroundColor: '#fff',
            right: 10,
            top: 10,
            alignSelf: 'flex-end',
            borderRadius: 20,
            elevation: 2,
            padding: 10,
            position: 'absolute',
            zIndex: 1,
          }}
          onPress={() => GetPosition()}>
          <Image
            style={{width: 30, height: 30}}
            resizeMode={'contain'}
            source={require('../../../asset/gps2.png')}
          />
        </TouchableOpacity>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={currentPosition}
          showsUserLocation={true}
          showsMyLocationButton={false}
          showsCompass={true}>
          <Marker
            coordinate={{
              latitude: -6.260262,
              longitude: 107.012705,
            }}>
            <Callout tooltip>
              <View>
                <View style={styles.map_bubble}>
                  <Text style={styles.map_title}>
                    Mitra Keluarga Bekasi Timur
                  </Text>
                  <Text style={styles.map_description}>Donor Disini !</Text>
                </View>
                <View style={styles.map_arrowBorder} />
                <View style={styles.map_arrow} />
              </View>
            </Callout>
          </Marker>

          <Marker
            coordinate={{
              latitude: -7.434923,
              longitude: 109.251937,
            }}>
            <Callout tooltip>
              <View>
                <View style={styles.map_bubble}>
                  <Text style={styles.map_title}>IT TELKOM PURWOKERTO</Text>
                  <Text style={styles.map_description}>Donor Disini !</Text>
                </View>
                <View style={styles.map_arrowBorder} />
                <View style={styles.map_arrow} />
              </View>
            </Callout>
          </Marker>

          <Marker
            coordinate={{
              latitude: -7.423615,
              longitude: 109.239141,
            }}
            title="PMI PURWOKERTO"
            description="Testtigngiwnifanwidn">
            <Callout tooltip>
              <View>
                <View style={styles.map_bubble}>
                  <Text style={styles.map_title}>PMI PURWOKERTO</Text>
                  <Text style={styles.map_description}>Donor Disini !</Text>
                </View>
                <View style={styles.map_arrowBorder} />
                <View style={styles.map_arrow} />
              </View>
            </Callout>
          </Marker>

          <Marker
            coordinate={{
              latitude: -7.417449,
              longitude: 109.231547,
            }}
            title="RSUD MARGONO SOEKARJO"
            description="Testtigngiwnifanwidn">
            <Callout tooltip>
              <View>
                <View style={styles.map_bubble}>
                  <Text style={styles.map_title}>RSUD MARGONO SOEKARJO</Text>
                  <Text style={styles.map_description}>Donor Disini !</Text>
                </View>
                <View style={styles.map_arrowBorder} />
                <View style={styles.map_arrow} />
              </View>
            </Callout>
          </Marker>

          <Marker
            coordinate={{
              latitude: -7.410808,
              longitude: 109.25385,
            }}
            title="RSGMP UNSOED"
            description="Testtigngiwnifanwidn">
            <Callout tooltip>
              <View>
                <View style={styles.map_bubble}>
                  <Text style={styles.map_title}>RSGMP UNSOED</Text>
                  <Text style={styles.map_description}>Donor Disini !</Text>
                </View>
                <View style={styles.map_arrowBorder} />
                <View style={styles.map_arrow} />
              </View>
            </Callout>
          </Marker>
        </MapView>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            paddingHorizontal: 50,
            marginTop: 5,
            marginBottom: 5,
            borderRadius: 20,
            elevation: 2,
            padding: 10,
          }}>
          <Text style={{textAlign: 'center', fontSize: 20, fontWeight: '700'}}>
            Lokasi Donor Terdekat
          </Text>
        </View>
      </View>

      <View style={styles.containerlist}>
        <FlatList
          data={DATA.sort((a, b) => {
            return a.jarak - b.jarak;
          })}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </View>
    </View>
  ) : (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
};
export default LocationComponent;

const styles = StyleSheet.create({
  containerlist: {
    flex: 1,
    marginTop: 5,
    backgroundColor: '#fafafa',
    borderRadius: 5,
    paddingTop: 2,
    elevation: 2,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    elevation: 2,
  },
  transaksi: {
    fontSize: 15,
    color: '#000',
  },
  deskripsi: {
    fontSize: 10,
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },

  container: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  map: {
    height: '100%',
  },

  map_bubble: {
    alignSelf: 'flex-start',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },

  map_arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },

  map_arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },

  map_title: {
    fontSize: 15,
    textAlign: 'center',
  },

  map_description: {
    fontSize: 10,
    textAlign: 'center',
  },

  image: {
    width: 120,
    height: 80,
  },
});
