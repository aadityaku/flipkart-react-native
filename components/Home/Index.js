
import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import banner from '../../data/banner';
import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Divider } from '@rneui/themed';
import { ScrollView } from 'react-native';
import Item from '../../data/Item';
// import category from '../../data/category';

const Index = ({navigation}) => {
  const[count,setCount] = useState(0);

  useEffect(() => {
    const internalData = setInterval(() => {
         (count == 2)? setCount(0) : setCount(count + 1)
    },2000) 
      
    return () => clearInterval(internalData)
},[count])
   
  
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
        <Image source={{uri: banner[count]}} style={{height:150,width:"100%"}} />
      
      </TouchableOpacity>
      <Divider />
      <View style={{padding:12,elevation:2,borderWidth:0.3}}>
        <Text style={{fontWeight:"600",color:"black",fontSize:18}}>Recently Viewed Stores</Text>
        <ScrollView horizontal={true}>
           <View style={{justifyContent:"center",borderLeftWidth:0.1,marginLeft:5,padding:5,marginTop:5,borderRightWidth:0.1,borderTopWidth:0.1,borderBottomWidth:0.2,borderRadius:5}}>
                <Image source={{uri: Item[0].image}} style={{height:70,width:70,resizeMode:"contain"}}/>
                <Text style={{color:"black",textAlign:"center"}}>{Item[0].category[0].title}</Text>
           </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})