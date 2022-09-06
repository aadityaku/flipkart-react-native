import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"
import { TouchableOpacity } from 'react-native'
import { useState } from 'react'
const BottomIcon = ({navigation,icon_name}) => {
    const[name,setName] = useState(icon_name);

  return (
    <View style={{justifyContent:"space-around",flexDirection:"row",marginBottom:10}}>
        <TouchableOpacity style={{justifyContent:"center",alignItems:"center"}} onPress={() => navigation.navigate("Home")}>
            <SimpleLineIcons name='home' size={20} color={(name === "Home")?"blue":"black"} /> 
            <Text style={{textAlign:"center",fontSize:10,fontWeight:"600",marginTop:2,color:(name === "Home")?"blue":"black"}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{justifyContent:"center",alignItems:"center"}} onPress={() =>navigation.navigate("category")}>
            <MaterialIcons name='category' size={20} color={(name == "category")?"blue":"black"} />
            <Text style={{textAlign:"center",fontSize:10,fontWeight:"600",color:(name == "category")?"blue":"black",marginTop:2}}>Categories</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{justifyContent:"center",alignItems:"center"}} onPress={() => navigation.navigate("Notifications")}>
            <Ionicons name='notifications-outline' size={20} color={(name == "Notifications")?'blue':"black"} />
            <Text style={{textAlign:"center",fontSize:10,fontWeight:"600",color:(name == "Notifications")?'blue':"black",marginTop:2}}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{justifyContent:"center",alignItems:"center"}} onPress={() => navigation.navigate("Profile")}>
            <Ionicons name='person-outline' size={20} color={(name == "Profile")?'blue':"black"} />
            <Text style={{textAlign:"center",fontSize:10,fontWeight:"600",color:(name == "Profile")?'blue':"black",marginTop:2}}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{justifyContent:"center",alignItems:"center"}} onPress={() => navigation.navigate("MyCart")}>
            <AntDesign name='shoppingcart' size={20} color={(name == "MyCart")?'blue':"black"} />
            <Text style={{position:'absolute',fontWeight:"700",color:'white',backgroundColor:'red',borderRadius:50,top:-5,right:-7,fontSize:11,marginTop:2,width:"auto",paddingHorizontal:3}} >20</Text>
            <Text style={{textAlign:"center",fontSize:10,fontWeight:"600",color:(name == "MyCart")?'blue':"black",marginTop:2}}>Cart</Text>
        </TouchableOpacity>  
    </View>
  )
}

export default BottomIcon

const styles = StyleSheet.create({})