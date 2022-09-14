import {StyleSheet, Text, View, FlatList,Pressable,Image, ImageBackground,TouchableOpacity} from 'react-native';
import React,{useEffect,useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import axios from 'axios';

const FlatListApiUses = () => {
    const [value,setValue] = useState([])
 useEffect(()=>{
        getDataUsingSimpleGetCall(); 
        //getDataForDelete();
    })

    const getDataUsingSimpleGetCall = () => {
        axios
          .get('https://fakestoreapi.com/products?sort=asc')
          .then(function (response) {
           console.log('Data aa gaya',response.data)
           setValue(response.data)
            //alert(JSON.stringify(response.data));
          })
          .catch(function (error) {
            // handle error
            alert(error.message);
          })
          .finally(function () {
            // always executed
            //alert('Finally called');
          });
      }

      const getDataForDelete = (id) => {
        axios
          .delete('https://fakestoreapi.com/products/6')
          .then(function (response) {
           console.log('Data aa gaya',response.data)
           setValue(response.data)
            //alert(JSON.stringify(response.data));
          })
          .catch(function (error) {
            // handle error
            alert(error.message);
          })
          .finally(function () {
            // always executed
            //alert('Finally called');
          });
      }
  const renderItem = ({item,index}) => {
    return (
        <View style={styles.card}>
        <View style={styles.imgContainer}>
        <ImageBackground style={{width:wp('45%'),height:hp('30%'),justifyContent:'flex-end',paddingLeft:wp('36%'),paddingBottom:hp('1%')}} source={{uri:item.image}}>
            <Text>{item.rating.rate}</Text>
        </ImageBackground>
        </View>
        <View style={styles.firstPart}>
            <Text numberOfLines={1}>{item.title}</Text>
        <Text style={styles.t1}>{item.category}</Text>
        <Text numberOfLines={1}>{item.description}</Text>
        <Text style={{marginTop:hp('3%'),marginTop:hp('3%'),fontWeight:'bold'}}>{item.rating.count}$</Text>
        <TouchableOpacity style={styles.btn2}  >
          <Text>Delete Post</Text>
        </TouchableOpacity>
        </View>
       
      </View>
    );
  };

  return (
    <View style={styles.container}>
<FlatList
  data = {value}
  renderItem={renderItem}
  keyExtractor={item => item.id.toString()}
  contentContainerStyle={{paddingVertical:20}}
  ItemSeparatorComponent={()=>
         <View style={{marginTop:hp('2%')}}/>

  }
/> 
    </View>
  );
};

export default FlatListApiUses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center'
  },
  btn1: {
    width: wp('40%'),
    height: hp('5%'),
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: wp('90%'),
    height: hp('30%'),
    marginTop: hp('1%'),
    backgroundColor: 'pink',
    //padding: wp('2%'),
    borderRadius: hp('1%'),
    flexDirection:"row",
    borderRadius:hp('1%')
  },
  t1: {
    fontWeight: 'bold',
    fontSize: hp('2%'),
  },
  btn2: {
    width: wp('25%'),
    height: hp('5%'),
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('5%'),
    //alignSelf: 'flex-end',
    borderRadius: hp('1%'),
  },
  firstPart:{
    width:wp('45%'),
    height:hp('30%'),
    backgroundColor:'green',
    alignItems:'center',
    paddingTop:hp('4%'),
    borderTopRightRadius:hp('1%'),
    borderBottomRightRadius:hp('1%')
  },
  imgContainer:{
    width:wp('45%'),
    height:hp('30%'),
    backgroundColor:"red",
    borderTopLeftRadius:hp('1%'),
    borderBottomLeftRadius:hp('1%')
  }
});
