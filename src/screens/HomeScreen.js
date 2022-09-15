import {StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import React, {useState, useRef} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import {Picker} from '@react-native-picker/picker';
import MealsHub from '../component/MealsHub';
const HomeScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const pickerRef = useRef();

  const open = () => {
    pickerRef.current.focus();
  };

  const close = () => {
    pickerRef.current.blur();
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize: hp('2%'), color: '#000000'}}>ASAP</Text>
        {/* <FontAwesome5 style={{fontSize: hp('2%'),color:'#000000',marginLeft:wp('2%')}} name='arrow-right' color='#ffffff' size={hp('2%')} /> */}
        <FontAwesome5Icon
          name="arrow-right"
          size={15}
          style={{fontSize: hp('2%'), color: '#000000', marginLeft: wp('2%')}}
        />
        <Text
          style={{fontSize: hp('2%'), color: '#000000', marginLeft: wp('2%')}}>
          1226 Univercity Road
        </Text>
      </View>
      <View style={styles.lowerHeader}>
        <View style={styles.headerinnerPartOne}>
          {/* <FontAwesome5 style={{fontSize: hp('2%'),color:'#000000',marginLeft:wp('2%')}} name='key-skeleton-left-right' color='#ffffff' size={hp('2%')} /> */}
          <FontAwesome5Icon
            name="key"
            size={15}
            style={{fontSize: hp('2%'), color: '#ffffff', marginLeft: wp('2%')}}
          />
        </View>
        <View style={styles.headerinnerParttwo}>
          <Text style={{fontSize: hp('1.3%'), color: '#000000'}}>Pickup</Text>
        </View>
        <View
          style={{
            width: wp('18%'),
            height: hp('6%'),
            backgroundColor: '#ffffff',
            borderRadius: hp('1%'),
          }}>
          <Picker
            style={{ borderRadius: hp('1%')}}
            itemStyle={{fontSize: hp('1.3%'), color: '#000000'}}
            ref={pickerRef}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <View style={styles.headerinnerParttwo}>
          <Text style={{fontSize: hp('1.3%'), color: '#000000'}}>Top Eats</Text>
        </View>
        <View style={styles.headerinnerParttwo}>
          <Text style={{fontSize: hp('1.3%'), color: '#000000'}}>
            Price Ranging
          </Text>
        </View>
      </View>
      <View style={styles.mealsContainer}>
         <MealsHub/>
         <MealsHub/>
      </View>
      <View style={styles.txtContainer}>
         <Text style={{fontSize:hp('2.5%'),color:'#000000',fontWeight:'400'}}>Special Offers</Text>
         <Text style={{fontSize:hp('1.5%'),color:'#000000',fontWeight:'400'}}>Limited Availability</Text>
      </View>
      <Image source={require('../assets/Images/foodimageone.png')}
                style={{ width: wp('96%'), height: hp('20%'),alignSelf:'center' }} resizeMode='cover' />
        <View style={styles.txtContainer}>
         <Text style={{fontSize:hp('2%'),color:'#808080',fontWeight:'400'}}>Jack in the box(3199 (EI Camano Real))</Text>
         <Text style={{fontSize:hp('1.5%'),color:'#808080',fontWeight:'400'}}>$ . American . burger . Fast Food</Text>
      </View>
      <View style={styles.lowerBottomone}>
      <TouchableOpacity style={styles.btnContainer}>
             <Text style={{fontWeight:'500',fontSize:hp('1.5%'),color:'#000000'}}>30-40Mins</Text>
             
           </TouchableOpacity>
           <TouchableOpacity style={styles.btnContainer}>
             <Text style={{fontWeight:'500',fontSize:hp('1.5%'),color:'#000000'}}>4.0*(100)</Text>
             
           </TouchableOpacity>
           <TouchableOpacity style={styles.btnContainer}>
             <Text style={{fontWeight:'500',fontSize:hp('1.5%'),color:'#000000'}}>$1.99 $0 Delivery</Text>
             
           </TouchableOpacity>
      </View>
      <View style={styles.lowerBottomTwo}>
        <View style={{width:wp('75%'),height:hp('10%'),flexDirection:'row',padding:wp('2%')}}>
         <TouchableOpacity style={{width:hp('4%'),height:hp('4%'),backgroundColor:'#009F0B',alignItems:'center',justifyContent:'center',borderRadius:hp('4%')}}>
               
         <Image source={require('../assets/Images/chat.png')}
                style={{ width: wp('4%'), height: wp('4%'),alignSelf:'center' }} resizeMode='cover' />
                
                
         </TouchableOpacity>
         <Text style={{fontWeight:'500',fontSize:hp('1.5%'),color:'#000000',marginLeft:wp('4%'),marginTop:hp('1%')}}>People say : well packed</Text>
         </View>
         <View style={{width:wp('25%'),height:hp('10%'),alignItems:'flex-end',paddingRight:wp('2%'),}}>
         <TouchableOpacity style={{width:hp('6%'),height:hp('6%'),backgroundColor:'#ff0052',alignItems:'center',justifyContent:'center',borderRadius:hp('6%')}}>
               
               <Image source={require('../assets/Images/chat.png')}
                      style={{ width: wp('4%'), height: wp('4%'),alignSelf:'center' }} resizeMode='cover' />
                      
                      
               </TouchableOpacity>
               </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: wp('100%'),
    height: hp('5%'),
    //backgroundColor:'pink',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('2%'),
  },
  lowerHeader: {
    width: wp('100%'),
    height: hp('9%'),
    //backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerinnerPartOne: {
    width: hp('5%'),
    height: hp('5%'),
    backgroundColor: '#000000',
    borderRadius: hp('5%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerinnerParttwo: {
    width: wp('18%'),
    height: hp('5%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: hp('1%'),
    borderWidth: 1,
    borderWidthColor: '#808080',
  },
  headerinnerPartthree: {
    width: wp('18%'),
    height: hp('5%'),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: hp('1%'),
    borderWidth: 1,
    borderWidthColor: '#808080',
  },
  mealsContainer:{
   width:wp('100%'),
   height:hp('35%'),
   //backgroundColor:'pink',
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'space-between',
   paddingHorizontal:wp('1%')
  },
 txtContainer:{
    width:wp('100%'),
    height:hp('8%'),
    //backgroundColor:'orange',
    justifyContent:'center',
    paddingLeft:wp('2%')
 },
 lowerBottomone:{
    width:wp('100%'),
    height:hp('8%'),
    //backgroundColor:'pink',
    alignItems:'center',
    justifyContent:'space-around',
    flexDirection:'row'
 },
 btnContainer:{
    width:wp('25%'),
    height:hp('5%'),
    backgroundColor:'#ffffff',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderWidthColor:'#808080',
    borderRadius:hp('1%'),
    
  },
  lowerBottomTwo:{
    width:wp('100%'),
    height:hp('10%'),
    //backgroundColor:'pink',
    flexDirection:"row",
   
  }
});
