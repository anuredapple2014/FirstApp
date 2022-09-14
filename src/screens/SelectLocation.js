import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Searchbar } from 'react-native-paper';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
const SelectLocation = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={styles.container}>
     <Searchbar
            style={{
                width: wp('96%'),
                alignSelf: 'center',
                marginTop:hp('2%'),
                borderRadius:hp('2%'),
                
            }}
            placeholder="1126 university drive"
            onChangeText={onChangeSearch}
            value={searchQuery}
            inputStyle={{fontSize:hp('2%'),fontWeight:'700'}}
            /> 

<View style={styles.lowerContainer}>
             <View style={styles.innerViewone}>
             <FontAwesome5 style={{fontSize: hp('1.8%'),color:'#808080'}} name='location-arrow' color='#ffffff' size={hp('2%')} />
             </View>
             <View style={styles.innerViewtwo}>
                      <Text style={{fontWeight:'bold',color:'#000000',fontSize:hp('1.8%')}}>1126 university drive</Text>
                      <Text style={{fontWeight:'bold',color:'#808080',fontSize:hp('1.8%')}}>Singapore</Text>
                      
             </View>
            </View>

            <View style={styles.lowerContainer}>
             <View style={styles.innerViewone}>
             <FontAwesome5 style={{fontSize: hp('1.8%'),color:'#808080'}} name='location-arrow' color='#ffffff' size={hp('2%')} />
             </View>
             <View style={styles.innerViewtwo}>
                      <Text style={{fontWeight:'bold',color:'#000000',fontSize:hp('1.8%')}}>1126 university drive</Text>
                      <Text style={{fontWeight:'bold',color:'#808080',fontSize:hp('1.8%')}}>Singapore</Text>
                      
             </View>
            </View>
            <View style={styles.lowerContainer}>
             <View style={styles.innerViewone}>
             <FontAwesome5 style={{fontSize: hp('1.8%'),color:'#808080'}} name='location-arrow' color='#ffffff' size={hp('2%')} />
             </View>
             <View style={styles.innerViewtwo}>
                      <Text style={{fontWeight:'bold',color:'#000000',fontSize:hp('1.8%')}}>1126 university drive</Text>
                      <Text style={{fontWeight:'bold',color:'#808080',fontSize:hp('1.8%')}}>Menlo Park,CA USA</Text>
                      
             </View>
            </View>
            <View style={{...styles.lowerContainer, borderBottomWidth:0,}}>
             <View style={styles.innerViewone}>
             <FontAwesome5 style={{fontSize: hp('1.8%'),color:'#808080'}} name='location-arrow' color='#ffffff' size={hp('2%')} />
             </View>
             <View style={styles.innerViewtwo}>
                      <Text style={{fontWeight:'bold',color:'#009F0B',fontSize:hp('1.8%')}}>Search for `1126 university drive`</Text>
                     
                      
             </View>
            </View>

            <View style={styles.btnContainer}>
               <TouchableOpacity style={{width:wp('20%'),height:hp('5%'),borderWidth:1,borderColor:'#707070',borderRadius:hp('1%'),alignItems:'center',justifyContent:'center'}}>
                <Text>Drive</Text>
               </TouchableOpacity>

              
               <TouchableOpacity style={{width:wp('20%'),height:hp('5%'),borderWidth:1,borderColor:'#707070',borderRadius:hp('1%'),alignItems:'center',justifyContent:'center'}}>
               <Text>Driver</Text>
               </TouchableOpacity>
              
               <TouchableOpacity style={{width:wp('20%'),height:hp('5%'),borderWidth:1,borderColor:'#707070',borderRadius:hp('1%'),alignItems:'center',justifyContent:'center'}}>
               <Text>Drives</Text>
               </TouchableOpacity>

          
            </View>
    </View>
    
  )
}

export default SelectLocation

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    lowerContainer:{
        width:wp('100%'),
        height:hp('10%'),
        //backgroundColor:'pink',
        flexDirection:'row',
        borderBottomColor:'#808080',
        borderBottomWidth:0.8
      },
      innerViewone:{
        width:wp('14%'),
        height:hp('10%'),
        //backgroundColor:'orange',
        alignItems:'center',
        paddingRight:wp('3%'),
        paddingTop:hp('3%')
      },
      innerViewtwo:{
        width:wp('86%'),
        height:hp('10%'),
        //backgroundColor:'green',
        justifyContent:'center'
      },
      btnContainer:{
        width:wp('100%'),
        height:hp('14%'),
        //backgroundColor:'pink',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        //marginTop:hp('3%'),
        
      }
 
})