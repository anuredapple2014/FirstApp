import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const DropDown = ({
    data =[],
    value={},
    onSelect = () =>{}
}) => {
   console.log("Value is =====>",!!value)
   const[showOption, setShowOption] = useState(false)
   const onSelectedItem = (val) =>{
    setShowOption(false)
    onSelect(val)
   }
  return (
    <View style={styles.container}>
        <TouchableOpacity
        style={styles.dropdownStyle}
         activeOpacity={0.8}
         onPress={()=>setShowOption(!showOption)}>
            <Text>{!! value? value?.name : 'Choose as Option'}</Text>
            <FontAwesome5
            style={{fontSize: hp('1.8%'), color: '#808080',transform:[{rotate: showOption ? '180deg' : '0deg'}]}}
            name="caret-down"
            color="#ffffff"
            size={hp('2%')}
          />
        </TouchableOpacity>
        {showOption &&(<View>
      {data.map((val,i)=>{
        return (
            <TouchableOpacity 
            key={String(i)} 
            onPress={()=>onSelectedItem(val)}
            style={{backgroundColor: value.id == val.id ? 'orange' : 'white',
            width:wp('70%'),height:hp('4%'),alignSelf:'center'}}
           >
            <Text  style={{alignSelf:'flex-start',marginLeft:wp('1%')}}> {val.name}</Text>
            </TouchableOpacity>
        )
      })}
      </View>)}
    </View>
  )
}

export default DropDown

const styles = StyleSheet.create({
    container:{
        flex:1,
       
    },
    dropdownStyle:{
        backgroundColor:'pink',
       justifyContent:'space-between',
       paddingHorizontal:wp('2%'),
       borderRadius:hp('1%'),
       width:wp('70%'),
       height:hp('5%'),
       flexDirection:"row",
       alignItems:'center',
       alignSelf:'center',
       marginTop:hp('5%')
       //justifyContent:'center'
    }
})