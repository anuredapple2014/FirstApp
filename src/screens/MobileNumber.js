import {  StyleSheet, Text, View,Image,TouchableOpacity,StatusBar} from 'react-native';
import React,{useState,useRef} from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
//import { useNavigation } from '@react-navigation/native';
import PhoneInput from "react-native-phone-number-input";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const MobileNumber = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
  //const navigation = useNavigation();
    //const [value, setValue] = useState("");
    const[color,setColor]=useState("")
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);
    return (
      
           <View style={styles.container}>
           <StatusBar backgroundColor={'#ffffff'}/>
           <Image source={require('../assets/Images/foodimageone.png')} style={{width:wp('50%'),height:hp('50%'),alignSelf:'flex-end'}}/>
            <View style={styles.txtContainer}>
            <Text style={{fontSize:hp('2%'),fontWeight:'bold',color:'#000000'}}>Enter your Mobile number</Text>
            </View>
            <View style={styles.CountrycodeContainer}> 
            <View style={{width:wp('96%'),height:hp('7%'),flexDirection:'row',}}>
            <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="IN"
        layout="first"
        withShadow
        autoFocus
        containerStyle={StyleSheet.phoneNumberView}
        textContainerStyle={{ paddingVertical: 0,backgroundColor:'#ffffff', }}
        onChangeFormattedText={text => {
          setPhoneNumber(text);
        }}
      />
          <TouchableOpacity style={styles.btnstyle} onPress={()=> navigation.navigate('EmailAddress')}>
          <FontAwesome5 style={{fontSize: hp('2.5%')}} name='arrow-right' color='white' size={hp('2%')} />
          </TouchableOpacity>
          </View>
             </View>
           </View>
       
    )
};

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#ffffff'
       },
   txtContainer:{
    width:wp('100%'),
    height:hp('5%'),
    //backgroundColor:'pink',
    justifyContent:'center',
    paddingLeft:wp('2%')
   },
   CountrycodeContainer:{
    width:wp('100%'),
    height:hp('45%'),
   // backgroundColor:'pink',
    alignItems:"center",paddingTop:hp('1%')
   },
   btnstyle:{
    width:wp('10%'),
    height:hp('7%'),
    backgroundColor:'#FF0A38',
    borderTopRightRadius:hp('1%'),
    borderBottomRightRadius:hp('1%'),
    alignItems:'center',
    justifyContent:'center'
   }
  
});

export default MobileNumber;