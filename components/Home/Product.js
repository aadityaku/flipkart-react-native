import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Product = ({navigation}) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate("category")}>Product</Text>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({})