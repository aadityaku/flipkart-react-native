import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import category from '../../data/category';
import { ScrollView } from 'react-native';

const categoryIcon = "https://cdn.pixabay.com/photo/2021/10/11/23/49/app-6702044_960_720.png";
const categoryIcon2 = "https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/000000/external-categories-shopping-mall-xnimrodx-lineal-xnimrodx.png";

const Category = ({navigation}) => {
   
  return (
    <View style={{flexDirection:"row",width:"100%"}}>
       <TouchableOpacity style={{width:"20%",justifyContent:"center",alignItems:"center"}} onPress={() => navigation.navigate("category")}>
            <Image source={{uri: categoryIcon}} style={{width:40,height:40}} />
            <Text style={{fontSize:11.5,color:"black"}}>Categories</Text>
       </TouchableOpacity>
       
       <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginTop:2}}>
       {
         category.map((item,index) => (
            <TouchableOpacity style={{justifyContent:"center",alignItems:"center",margin:12}} key={index} >
                <Image source={{uri: item.image }} style={{width:40,height:40}} />
                <Text style={{fontSize:11.5,marginTop:2,color:"black"}}>{item.title}</Text>
                
            </TouchableOpacity>
           
         ))
       }
       
       </ScrollView>
      
       
    </View>
  )
}

export default Category

const styles = StyleSheet.create({})