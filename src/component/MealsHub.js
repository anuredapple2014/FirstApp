import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
const MealsHub = () => {
  return (
   
       <View style={styles.meals}>
          <Image source={require('../assets/Images/softdrink.png')}
                style={{ width: wp('10%'), height: hp('8%') }} resizeMode='cover' />
           <Text style={{fontSize:hp('2%'),color:'#000000',fontWeight:'500',marginTop:hp('1%')}}>Enjoy 25% Off</Text>     
           <Text style={{fontSize:hp('2%'),color:'#000000',fontWeight:'500',}}>(Upto UD $7)</Text>    
           <Text style={{fontSize:hp('1.3%'),color:'#000000',textDecorationLine:'underline',marginTop:hp('2%')}}>Your first two order</Text>
           <TouchableOpacity style={styles.btnContainer}>
             <Text style={{fontWeight:'500',fontSize:hp('1.8%'),color:'#ffffff'}}>See details</Text>
             <FontAwesome5Icon
            name="arrow-right"
            size={15}
            style={{fontSize: hp('2%'), color: '#ffffff', marginLeft: wp('2%')}}
          />
           </TouchableOpacity>
          </View>
  
  )
}

export default MealsHub

const styles = StyleSheet.create({
   
    meals:{
        width:wp('47.5%'),
        height:hp('30%'),
        backgroundColor:'#FEF3D3',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:hp('2%')
      },
      btnContainer:{
        width:wp('30%'),
        height:hp('5%'),
        backgroundColor:'#000000',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:wp('3%'),
        borderRadius:hp('5%'),
        marginTop:hp('3%')
      }
})