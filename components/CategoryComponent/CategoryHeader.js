import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
const CategoryHeader = ({navigation}) => {
  return (
    <View style={{alignItems:"center",justifyContent:"space-between",padding:14,backgroundColor:"blue",flexDirection:"row"}}>
        <Text style={{color:"white",fontSize:18}}>All Categories</Text>
        <View style={{alignItems:"center",justifyContent:"space-around",flexDirection:"row"}}>
            <TouchableOpacity style={{paddingHorizontal:10}} onPress={() => navigation.navigate("SearchScreen")} >
               <AntDesign name='search1' size={21} color={"white"}  />
            </TouchableOpacity>
            <TouchableOpacity style={{paddingHorizontal:10}} onPress={() => navigation.navigate("SearchScreen")} >
               <MaterialCommunityIcons name='microphone-outline' size={23} color={"white"}  />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default CategoryHeader

const styles = StyleSheet.create({})