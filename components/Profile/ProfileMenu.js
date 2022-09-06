import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ProfileMenu = () => {
  return (
    <View style={{justifyContent:"center",alignItems:"center"}}>
       <TouchableOpacity style={{alignItems:"center"}}>
             <Text style={{textAlign:"center",fontSize:22,color:"black"}}>WelCome to you in flipkart</Text>
       </TouchableOpacity>
    </View>
  )
}

export default ProfileMenu

const styles = StyleSheet.create({})