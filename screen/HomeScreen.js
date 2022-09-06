import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Category from '../components/Home/Category'
import { Divider } from '@rneui/themed'
import Index from '../components/Home/Index'
import BottomIcon from '../components/Home/BottomIcon'
import { ScrollView } from 'react-native'
import ProductGroup from '../components/Home/ProductGroup'

const HomeScreen = ({navigation}) => {
  return (
    <>
    <ScrollView>
        <Category navigation={navigation}/>
        <Divider/>
        <Index navigation={navigation}/>
        <ProductGroup/>
    </ScrollView>
        <Divider style={{marginBottom:5}}/>
   
        <BottomIcon navigation={navigation} icon_name="Home"/>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})