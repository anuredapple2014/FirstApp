import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import DropDown from './src/screens/DropDown'
//import Pickup from './src/screens/Pickup'
//import OrderStatus from './src/screens/OrderStatus'
//import SelectLocation from './src/screens/SelectLocation'
//import DeliveryDetails from './src/screens/DeliveryDetails'
//import DatePicker from './src/screens/DatePicker'
//import PhoneInputName from './src/screens/PhoneInput'
//import FlatListApiUses from './src/screens/FlatListApiUses'
//import HomeScreen from './src/screens/HomeScreen'
//import MobileNumber from './src/screens/MobileNumber'

//import Location from './src/screens/Location'
const App = () => {
  const [selectedItem,setSelectedItem] = useState(null)
  const onSelect = (item) =>{
       setSelectedItem(item)
  }
  const fruits =[
    {
    id:1,
    name:'Mango'
    },
    {
        id:2,
        name:'Banana'
        },
        {
            id:3,
            name:'Apple'
            }
]

  return (
    <DropDown 
    value={selectedItem}
    data={fruits}
    onSelect={onSelect}
    />
  )
}

export default App

