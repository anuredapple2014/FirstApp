import { StyleSheet, Text, View,Image,ImageBackground } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
const Pickup = () => {
  return (
    <View style={styles.container}>
      
          
            <ImageBackground source={require('../assets/Images/delivery.png')}
                 style={{ width: wp('100%'), height: hp('100%'),justifyContent:"flex-end"}}  resizeMode='contain' >
                    <View style={{width:wp('100%'),height:hp('25%'),paddingLeft:wp('2%'),paddingTop:hp('6%'),}}>
                          <Text style={{color:'#000000',fontWeight:'700',fontSize:hp('2%'),}}>Pick up</Text>
                          <Text style={{color:'#000000',fontWeight:'400',fontSize:hp('1.5%'),marginTop:hp('2%')}}>. On-the-go options in a tap</Text>
                          <Text style={{color:'#000000',fontWeight:'400',fontSize:hp('1.5%')}}>. No phone calls</Text>
                          <Text style={{color:'#000000',fontWeight:'400',fontSize:hp('1.5%')}}>. No Delivery Fees</Text>
                          <View style={{width:hp('7'),height:hp('7%'),borderRadius:hp('7%'),backgroundColor:'#000000',alignSelf:'flex-end',marginRight:wp('1%'),alignItems:'center',justifyContent:'center'}}>
                          <FontAwesome5
            style={{fontSize: hp('1.8%'), color: '#ffffff'}}
            name="greater-than"
            color="#ffffff"
            size={hp('2%')}
          />
                           </View>
                    </View>
                   
         
         </ImageBackground>
     
    </View>
  )
}

export default Pickup

const styles = StyleSheet.create({
container:{
    flex:1,
   
},
upperContainer:{
    width:wp('100%'),
    height:hp('50%'),
    backgroundColor:'pink'
},
innerUpperContainerone:{
    width:hp('4%'),
    height:hp('4%'),
    borderRadius:hp('4%'),
    backgroundColor:'#FFCF86'
},
innerUpperContainertwo:{
    width:hp('12%'),
    height:hp('12%'),
    borderRadius:hp('12%'),
    backgroundColor:'#000000',
    alignItems:'center',
    justifyContent:'center'
}

})