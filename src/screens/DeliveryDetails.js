import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Searchbar} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
//import GooglePlaces from './GooglePlaces';
import DatePicker from 'react-native-date-picker'
//import Modal from "react-native-modal";
const DeliveryDetails = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const [isModalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <Searchbar
        style={{
          width: wp('96%'),
          alignSelf: 'center',
          marginTop: hp('2%'),
          borderRadius: hp('2%'),
        }}
        placeholder="Enter a new Address"
        onChangeText={onChangeSearch}
        value={searchQuery}
        inputStyle={{fontSize: hp('2%'), fontWeight: '#000000', opacity: 0.22}}
        iconColor="#ffffff"
      />

      <View style={styles.lowerContainer}>
        <View style={styles.innerViewone}>
          <FontAwesome5
            style={{fontSize: hp('1.8%'), color: '#808080'}}
            name="location-arrow"
            color="#ffffff"
            size={hp('2%')}
          />
        </View>
        <View style={styles.innerViewtwo}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#000000',
              fontSize: hp('1.8%'),
            }}>
            Current Location
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#808080',
              fontSize: hp('1.8%'),
            }}>
            Address304 Nettleton St,Charlevoix,MI,
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#808080',
              fontSize: hp('1.8%'),
            }}>
            49720 deliver to door
          </Text>
        </View>
      </View>

      <View style={styles.lowerContainer}>
        <View style={styles.innerViewone}>
          <FontAwesome5
            style={{fontSize: hp('1.8%'), color: '#808080'}}
            name="location-arrow"
            color="#ffffff"
            size={hp('2%')}
          />
        </View>
        <View style={styles.innerViewtwo}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#000000',
              fontSize: hp('1.8%'),
            }}>
            1126 university drive
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#808080',
              fontSize: hp('1.8%'),
            }}>
            Singapore
          </Text>
        </View>
      </View>
      <View style={styles.middleContainer}>
        <TouchableOpacity style={{width:wp('100%'),height:hp('6%'),flexDirection:'row'}} onPressIn={() => setOpen(true)}>
           <View style={{width:wp('14%'),height:hp('6%'),alignItems:'flex-end',paddingRight:wp('2%'),paddingTop:hp('2%')}}>
           <FontAwesome5
            style={{fontSize: hp('1.8%'), color: '#808080'}}
            name="clock"
            color="#ffffff"
            size={hp('2.5%')}
          />
           </View>
           <View style={{width:wp('86%'),height:hp('6%'),alignItems:'center',justifyContent:'space-between',flexDirection:'row',paddingHorizontal:wp('1%')}}>
           <Text style={{color:'#000000',fontWeight:'400',fontSize:hp('1.8%')}}>As soon as possible</Text>
           <FontAwesome5
            style={{fontSize: hp('1.8%'), color: '#808080'}}
            name="check"
            color="#009F0B"
            size={hp('2.5%')}
          />
           </View>
        </TouchableOpacity>
        <TouchableOpacity style={{width:wp('100%'),height:hp('6%'),flexDirection:'row'}} onPressIn={() => setOpen(true)}>
           <TouchableOpacity style={{width:wp('14%'),height:hp('6%'),alignItems:'flex-end',paddingRight:wp('2%'),paddingTop:hp('2%')}}
            onPressIn={() => setOpen(true)}
           >
           <FontAwesome5
            style={{fontSize: hp('1.8%'), color: '#808080'}}
            name="clock"
            color="#ffffff"
            size={hp('2.5%')}
          />
           </TouchableOpacity>
           <TouchableOpacity style={{width:wp('86%'),height:hp('6%'),alignItems:'center',justifyContent:'space-between',flexDirection:'row',paddingHorizontal:wp('1%')}} onPressIn={() => setOpen(true)}>
           <Text style={{color:'#000000',fontWeight:'400',fontSize:hp('1.8%')}}>As soon as possible</Text>
           <FontAwesome5
            style={{fontSize: hp('1.8%'), color: '#808080'}}
            name="check"
            color="#009F0B"
            size={hp('2.5%')}
          />
           </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <DatePicker
       
        title='Scheduled Delivery Time'
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      {/* <Modal isVisible={isModalVisible}>
        <View style={{ width:wp('95%'),height:hp('20%'),backgroundColor:'pink',alignSelf:'center' }}>
        <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
        </View>
      </Modal> */}
    </View>
  );
};

export default DeliveryDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lowerContainer: {
    width: wp('100%'),
    height: hp('10%'),
    //backgroundColor:'pink',
    flexDirection: 'row',
    borderBottomColor: '#808080',
    borderBottomWidth: 0.8,
  },
  innerViewone: {
    width: wp('14%'),
    height: hp('10%'),
    //backgroundColor:'orange',
    alignItems: 'center',
    paddingRight: wp('3%'),
    paddingTop: hp('3%'),
  },
  innerViewtwo: {
    width: wp('86%'),
    height: hp('10%'),
    //backgroundColor:'green',
    justifyContent: 'center',
  },
  btnContainer: {
    width: wp('100%'),
    height: hp('14%'),
    //backgroundColor:'pink',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    //marginTop:hp('3%'),
  },
  middleContainer: {
    width: wp('100%'),
    height: hp('12%'),
    //backgroundColor: 'pink',
  },
});
