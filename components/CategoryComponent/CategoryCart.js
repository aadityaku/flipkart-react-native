import { StyleSheet, Text, View ,Image } from 'react-native'
import React from 'react'
import category from '../../data/category'
import { TouchableOpacity } from 'react-native'
import { Divider } from '@rneui/themed'
const SubCategoryCart = ({image,title}) => {
    return(
        <TouchableOpacity style={{alignItems:"center",marginTop:5}}>
            <Image source={{uri:image}} style={{height:50,margin:5,width:50,backgroundColor:"#778899",borderRadius:50,padding:32}}/>
            <Text style={{color:"black",textAlign:"center"}}>{title}</Text>
        </TouchableOpacity>
    
    )
}
const CategoryCart = ({navigation}) => {
    let a=0;
  return (
    <View style={{padding:5,flexDirection:"row",flexWrap:"wrap",marginTop:5,margin:5,justifyContent:"space-between"}}>
        {
            category.map((item,index)=>{
                //     a+=index
                // if (a % 4 == 0) {
                    
                //     return  <SubCategoryCart image={item.image} title={item.title} key={index} />      
                //     // </>
                //     // )
                // }
                // else{
                //    return <>
                //    <SubCategoryCart image={item.image} title={item.title} key={index} />
                   
                //    </>
                // }
                return <SubCategoryCart image={item.image} title={item.title} key={index} />
            })
        }
    </View>
  )
}

export default CategoryCart

const styles = StyleSheet.create({})