import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SignInScreen = () => {
  return (
    <View>
      <Text>SignInScreen</Text>
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({})
// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';



// function Feed() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Feed Screen</Text>
//     </View>
//   );
// }

// function Article() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Article Screen</Text>
//     </View>
//   );
// }



// const Drawer = createDrawerNavigator();

// function MyDrawer() {
  
//   return (
//     <Drawer.Navigator
//       useLegacyImplementation
//       drawerContent={(props) => <CustomDrawerContent {...props}   />}
//     >
//       <Drawer.Screen name="Feed" component={Feed} />
//       <Drawer.Screen name="Article" component={Article} />
//     </Drawer.Navigator>
//   );
// }

// export default function SignInScreen() {
//   return (
   
//       <MyDrawer />
    
//   );
// }
