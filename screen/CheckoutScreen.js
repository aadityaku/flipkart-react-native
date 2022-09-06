import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator();

const Hello = ({navigation}) => {
    return(
        <View>
            <Text onPress={() => navigation.navigate('world')}>This is hello</Text>
        </View>
    )
}
const World = () => {
    return(
        <View>
            <Text>This is hello</Text>
        </View>
    )
}

const CheckoutScreen = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='hello' component={Hello} />
        <Stack.Screen name='world' component={World} />
    </Stack.Navigator>
  )
}

export default CheckoutScreen

const styles = StyleSheet.create({})