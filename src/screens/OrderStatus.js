import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const OrderStatus = () => {
  return (
    <View style={styles.container}>
        <View style={styles.imgContainer}>
           <View style={{width:wp('20%'),height:wp('20%'),backgroundColor:'#FFFFE0',alignItems:'center',justifyContent:'center',borderRadius:wp('10%'),alignSelf:'flex-end',marginRight:hp('4%'),marginTop:hp('1%')}}>
      <Image source={require('../assets/Images/location.png')}
                style={{ width: wp('10%'), height: hp('8%') }} resizeMode='cover' />

     </View>
        <View style={{width:wp('60%'),height:wp('60%'),backgroundColor:'#fff4f2',alignItems:'center',justifyContent:'center',borderRadius:wp('30%')}}>
      <Image source={require('../assets/Images/orderstatus.png')}
                style={{ width: wp('40%'), height: wp('40%') }} resizeMode='cover' />

     </View>
     </View>
     <View style={styles.txtContainer}>
     <Text style={{fontWeight:'400',color:'#000000',fontSize:hp('4%')}}>Always know the</Text>
     <Text style={{fontWeight:'400',color:'#000000',fontSize:hp('4%')}}>status of your order</Text>
     <View style={{marginTop:hp('2%')}}>
     <Text style={{fontSize:hp('2%'),color:'#808080',fontWeight:'400'}}>Push notifications are used to</Text>
     <Text style={{fontSize:hp('2%'),color:'#808080',fontWeight:'400'}}>provide updates on your order. You</Text>
     <Text style={{fontSize:hp('2%'),color:'#808080',fontWeight:'400'}}>can change this</Text>
     </View>
     </View>
      <View style={{width:wp('100%'),height:hp('27%'),alignItems:'center',justifyContent:"center"}}>
         <TouchableOpacity style={{width:wp('96%'),height:hp('7%'),backgroundColor:'#FF0A38',flexDirection:'row',borderRadius:hp('1%')}}>
            <TouchableOpacity style={{width:wp('10%'),backgroundColor:"#FF0A38",height:hp('7%'),borderRadius:hp('1%')}}/>

            
            <TouchableOpacity style={{width:wp('76%'),height:hp('7%'),alignItems:'center',justifyContent:'center',backgroundColor:'#FF0A38'}}>
           <Text style={{fontWeight:'bold',fontSize:hp('2%'),color:'#ffffff'}}>Enable Push Notification</Text>
           </TouchableOpacity>
           <TouchableOpacity style={{width:wp('10%'),backgroundColor:"#FF0A38",height:hp('7%'),alignItems:'center',justifyContent:'center',borderRadius:hp('1%')}}>
           <FontAwesome5 style={{fontSize: hp('2.5%')}} name='arrow-right' color='#ffffff' size={hp('2%')} />
           </TouchableOpacity>
         </TouchableOpacity>
         <TouchableOpacity style={{width:wp('96%'),height:hp('7%'),backgroundColor:'#E8E8E8',alignItems:'center',justifyContent:'center',marginTop:hp('1%'),borderRadius:hp('1%')}}>
           <Text  style={{fontWeight:'bold',fontSize:hp('2%'),color:'#000000'}}>Skip for now</Text>
         </TouchableOpacity>
      </View>
    </View>
  )
}

export default OrderStatus

const styles = StyleSheet.create({
    container:{
        flex:1,
        
        
    },
   imgContainer:{
    width:wp('100%'),
    height:hp('48%'),
   // backgroundColor:"orange",
    alignItems:'center',
   },
   txtContainer:{
    width:wp('100%'),
    height:hp('25%'),
   // backgroundColor:'green',
    justifyContent:'center',
    paddingLeft:wp('20%')
   }
})