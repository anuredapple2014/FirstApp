import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Searchbar } from 'react-native-paper';
//import { Input } from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  //import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
  //import PlacesInput from 'react-native-places-input';
  //import Geolocation from '@react-native-community/geolocation';
  const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
  };
  const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
  };

const Location = () => {
    const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  //Geolocation.getCurrentPosition(info => console.log(info));
 
  return (
    <View style={styles.container}>
     <View style={styles.uppertxtContainer}>
      <Text style={{fontSize:hp('3%'),color:'#000000',fontWeight:'400'}}>Find food near you</Text>
      <Text style={{fontSize:hp('2%'),color:'#808080',fontWeight:'400'}}>We need to know your address in</Text>
      <Text style={{fontSize:hp('2%'),color:'#808080',fontWeight:'400'}}>order to find delicious</Text>
   
     </View>

         <Searchbar
            style={{
                width: wp('96%'),
                alignSelf: 'center',
                marginTop:hp('2%'),
                borderRadius:hp('2%'),
                
            }}
            placeholder="Enter Address"
            onChangeText={onChangeSearch}
            value={searchQuery}
            inputStyle={{fontSize:hp('2%'),fontWeight:'700'}}
            /> 

            <View style={styles.lowerContainer}>
             <View style={styles.innerViewone}>
             <FontAwesome5 style={{fontSize: hp('1.8%'),color:'#808080'}} name='location-arrow' color='#ffffff' size={hp('2%')} />
             </View>
             <View style={styles.innerViewtwo}>
                      <Text style={{fontWeight:'bold',color:'#000000',fontSize:hp('1.8%')}}>Current Location</Text>
                      <Text style={{fontWeight:'bold',color:'#808080',fontSize:hp('1.8%')}}>Address304 Nettleton St,Charlevoix,MI,</Text>
                      <Text style={{fontWeight:'bold',color:'#808080',fontSize:hp('1.8%')}}>49720 deliver to door</Text>
             </View>
            </View>

{/* <GooglePlacesAutocomplete
      placeholder='Enter Address'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: GOOGLE_PLACES_API_KEY,
        language: 'en',
        components: 'country:us',
      }}
      currentLocation={true}
      currentLocationLabel='Current location'
      predefinedPlaces={[homePlace, workPlace]}
    />
     */}




    </View>
  )
}

export default Location

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  uppertxtContainer:{
    width:wp('100%'),
    height:hp('15%'),
    //backgroundColor:'pink',
    justifyContent:'center',
    paddingLeft:wp('2%')
  },
  lowerContainer:{
    width:wp('100%'),
    height:hp('12%'),
    //backgroundColor:'pink',
    flexDirection:'row'
  },
  innerViewone:{
    width:wp('14%'),
    height:hp('12%'),
    //backgroundColor:'orange',
    alignItems:'flex-end',
    paddingRight:wp('3%'),
    paddingTop:hp('2.5%')
  },
  innerViewtwo:{
    width:wp('86%'),
    height:hp('12%'),
    //backgroundColor:'green',
    justifyContent:'center'
  }
})