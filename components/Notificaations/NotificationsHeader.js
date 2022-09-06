import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
const NotificationsHeader = ({navigation}) => {
  return (
    <View style={{alignItems:"center",justifyContent:"space-between",padding:14,backgroundColor:"blue",flexDirection:"row"}}>
        <Text style={{color:"white",fontSize:18}}>Notifications (4)</Text>
         
    </View>
  )
}

export default NotificationsHeader

const styles = StyleSheet.create({})