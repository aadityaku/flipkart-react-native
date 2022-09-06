import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import { Divider } from '@rneui/themed'
const logo = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
const logo2="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
const coin = "https://rukminim1.flixcart.com/lockin/32/32/images/super_coin_icon_22X22.png?q=90"
const ProfileHeader = ({navigation}) => {
  return (
    <>
        <View style={{alignItems:"center",justifyContent:"space-between",padding:14,backgroundColor:"blue",flexDirection:"row"}}>
            <Text style={{color:"white",fontSize:18}}>My Account</Text>
            <View style={{alignItems:"center",justifyContent:"space-around",flexDirection:"row"}}>
                <TouchableOpacity style={{paddingHorizontal:10}} onPress={() => navigation.navigate("SearchScreen")} >
                   <AntDesign name='search1' size={21} color={"white"}  />
                </TouchableOpacity>
                <TouchableOpacity style={{paddingHorizontal:10}} onPress={() => navigation.navigate("SearchScreen")} >
                   <MaterialIcons name='photo-camera' size={23} color={"white"}  />
                </TouchableOpacity>
            </View>
        </View>
        <View style={{alignItems:"center",justifyContent:"space-between",padding:14,flexDirection:"row"}}>
            <TouchableOpacity>
                <Text style={{color:"black",fontSize:16,fontWeight:"600"}}>Hey! Aaditya Kumar</Text>
                <View style={{flexDirection:"row",marginTop:3}}>
                    <Text style={{fontSize:12}}>Explore  </Text>
                    <Text style={{fontWeight:"bold",fontStyle:"italic",fontSize:12,color:"blue"}}>FlipKart  </Text>
                    <Text style={{color:"#deb887",fontSize:12}}>Plus</Text>
                    <Image source={{uri: logo2}} style={{height:14,width:14,marginLeft:5}} />
                    <SimpleLineIcons name='arrow-right' size={14} style={{marginLeft:4}} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{borderRadius:30,justifyContent:"center",alignItems:"center",padding:5,backgroundColor:"#dcdcdc",borderWidth:0.3,marginLeft:10,flexDirection:"row"}}>
                <Image source={{uri:coin}} style={{height:10,width:10,marginRight:4}} />
                <Text style={{textAlign:"center",fontWeight:"500",color:"black",paddingRight:4}}>96</Text>
            </TouchableOpacity>
        </View>
        <Divider/>
    </>
    
  )
}

export default ProfileHeader

const styles = StyleSheet.create({})