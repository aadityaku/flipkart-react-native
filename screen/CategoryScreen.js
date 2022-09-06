import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryCart from '../components/CategoryComponent/CategoryCart'
import BottomIcon from '../components/Home/BottomIcon'
import CategoryHeader from '../components/CategoryComponent/CategoryHeader'
import { Divider } from '@rneui/themed'
import { ScrollView } from 'react-native'

const CategoryScreen = ({navigation}) => {
  return (
      <>
      <ScrollView>
          <CategoryHeader navigation={navigation}/>
        
          <CategoryCart navigation={navigation}/>
      </ScrollView>
        
        <Divider style={{marginBottom:5}}/>
        <BottomIcon navigation={navigation} icon_name="category"/>
        
      </>
        
  )
}

export default CategoryScreen

const styles = StyleSheet.create({})