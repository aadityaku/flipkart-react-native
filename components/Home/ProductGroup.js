import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import subCategory from '../../data/subCategory'
import { TouchableOpacity } from 'react-native'
const ProductCard = ({image,title,price}) => {
    return(
        <TouchableOpacity style={{borderWidth:0.2,width:"45%",padding:5,marginTop:8,backgroundColor:"white",borderRadius:5,padding:14}}>
            <Image source={{uri: image}} style={{height:100,width:"100%",resizeMode:"contain"}} />
            <Text style={{textAlign:"center",marginTop:4,color:"black"}} >{(title.length >= 13)?title.slice(0,13)+"...":title}</Text>
            <Text style={{textAlign:"center",fontWeight:"500",marginTop:2,color:"green"}} >Min {price}</Text>
        </TouchableOpacity>
    )
}
const ProductGroup = () => {
    let a=0;
  return (
    <>
    <View style={{padding:5,backgroundColor:"blue",paddingHorizontal:25,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <Text style={{color:"white",fontWeight:"500",fontSize:16,textDecorationLine:"underline"}}>See All offerrs </Text>
       <TouchableOpacity >
            <Text style={{textAlign:"center",backgroundColor:"white",height:40,flex:0.2,padding:10,fontSize:16,borderRadius:8,color:"blue"}}>See All</Text>
       </TouchableOpacity>
    </View>
    <View style={{padding:10,paddingHorizontal:20,flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap",backgroundColor:"blue"}}>
        
        {
            subCategory.map((item,index) => {

                    if(index < 4){
                       return  <ProductCard image={item.image} title={item.title} price={item.price} key={index} />
                    }
                    else{
                        return;
                    }
                
            })
        }
        
    </View>
    
    </>
  )
}

export default ProductGroup

const styles = StyleSheet.create({})