import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from '@rneui/themed'
import Octicons from "react-native-vector-icons/Octicons"
import notifications from '../../data/notifications'

const Notificaations = ({description,title,image}) => {
  return(
    <>
    <TouchableOpacity style={{flexDirection:"row",marginBottom:10,padding:7}}>
          <View style={{flex:0.3,marginTop:2,padding:3}}>
              <Octicons name='north-star' style={{color:"blue"}}  size={18}/>
          </View>
           <View style={{flex:3}}>
                <Text style={{fontWeight:"600",color:"black",fontSize:14}}>{title}</Text>
                <Text style={{fontSize:11,color:'gray'}}>{description}</Text>
                <Text style={{fontSize:9,color:'gray',marginTop:10}}>3 minutes ago</Text>
           </View>
           <View style={{flex:0.8}}>
               <Image source={{uri : image}} style={{height:60,width:60}} />
           </View>
    </TouchableOpacity>
    <Divider/>
    </>
    
  )
}

const NotificationsIndex = ({navigation}) => {
  return (
    <View>
       <View style={{alignItems:"center",flexDirection:"row",paddingHorizontal:10,paddingVertical:8}}>
             <TouchableOpacity style={{borderRadius:30,justifyContent:"center",alignItems:"center",padding:10,backgroundColor:"#b0c4de",borderWidth:0.8,borderColor:"#00bfff"}}>
                <Text style={{textAlign:"center",fontWeight:"500",paddingHorizontal:22,color:"blue"}}>All</Text>
             </TouchableOpacity>
             
             <TouchableOpacity style={{borderRadius:30,justifyContent:"center",alignItems:"center",padding:10,backgroundColor:"#dcdcdc",borderWidth:0.3,marginLeft:10}}>
                <Text style={{textAlign:"center",fontWeight:"500",paddingHorizontal:22,color:"black"}}>Offers</Text>
             </TouchableOpacity>
             
       </View>
       <Divider/>
         {
          notifications.map((item,index) =>(
                <Notificaations description={item.description} title={item.title} image={item.image} key={index}/>
          ))
         }
    </View>
  )
}

export default NotificationsIndex

const styles = StyleSheet.create({})