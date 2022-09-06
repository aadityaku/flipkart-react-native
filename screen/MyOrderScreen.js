import { StyleSheet, Text, View,onPress } from 'react-native'
import React from 'react'

const MyOrderScreen = ({navigation}) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate('Profile')} >MyOrderScreen</Text>
    </View>
  )
}

export default MyOrderScreen

const styles = StyleSheet.create({})