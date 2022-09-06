import { StyleSheet, Text, View,Image,TouchableOpacity, Linking, TextInput } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import AntDesign from "react-native-vector-icons/AntDesign"
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"
import Fontisto from "react-native-vector-icons/Fontisto"


import Product from './components/Home/Product';
import Index from './components/Home/Index';
import Category from './screen/CategoryScreen'
import ProfileScreen from './screen/ProfileScreen';
import SearchScreen from './screen/SearchScreen';
import MyOrderScreen from './screen/MyOrderScreen';
import MyCartScreen from './screen/MyCartScreen';
import CheckoutScreen from './screen/CheckoutScreen';
import SignInScreen from './screen/SignInScreen';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  useDrawerProgress,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import HomeScreen from './screen/HomeScreen';
import Notifications from './screen/Notifications';

const logo = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
const logo2="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"

const Stack= createStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const progress = useDrawerProgress();
  const navigation = useNavigation();
  const translateX = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  return (
    <DrawerContentScrollView {...props}>
      <Animated.View style={{ transform: [{ translateX }]  }}>
        <DrawerItemList {...props} />
        <DrawerItem label="All Categories" style={{marginBottom:0,padding:0,borderTopColor:"black",borderTopWidth:1}} onPress={() => navigation.navigate('MyOrder')} />
        <DrawerItem label="Offer Zone" style={{marginBottom:0,padding:0 ,borderBottomColor:"black",borderBottomWidth:1}} onPress={() => Linking.openURL('https://codewithsadiq.com/')} />

        <DrawerItem label="Sell on Flipkart" style={{marginBottom:0,padding:0,borderBottomColor:"black",borderBottomWidth:1}} onPress={() => Linking.openURL('https://codewithsadiq.com/')} />
        <DrawerItem label="My Orders" style={{marginBottom:0,padding:0}} onPress={() => Linking.openURL('https://codewithsadiq.com/')} />
        <DrawerItem label="Coupons" style={{marginBottom:0,padding:0}} onPress={() => Linking.openURL('https://codewithsadiq.com/')} />
        <DrawerItem label="My Cart" style={{marginBottom:0,padding:0}} onPress={() => Linking.openURL('https://codewithsadiq.com/')} />
        <DrawerItem label="My Wishlist" style={{marginBottom:0,padding:0}} onPress={() => Linking.openURL('https://codewithsadiq.com/')} />
        <DrawerItem label="My Account" style={{marginBottom:0,padding:0}} onPress={() => Linking.openURL('https://codewithsadiq.com/')} />
        <DrawerItem label="My Notifaction" style={{marginBottom:0,padding:0,borderBottomColor:"black",borderBottomWidth:1}} onPress={() => Linking.openURL('https://codewithsadiq.com/')} />
        <DrawerItem label="Help Centre" style={{marginBottom:0,padding:0}} onPress={() => Linking.openURL('https://codewithsadiq.com/')} />
        <DrawerItem label="Logout" style={{marginBottom:0,padding:0,borderBottomColor:"black",borderBottomWidth:1 }} onPress={() => Linking.openURL('https://codewithsadiq.com/')} />
      </Animated.View>
    </DrawerContentScrollView>
  );
}
function LogoTitle() {
  const navigation=useNavigation();
  return (
    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}} >
      <View style={{marginTop:10,position:"absolute"}}>
        <Image source={{uri : logo}} style={{height:20,width:80}} />
          <View style={{flexDirection:"row"}}>
             <Text style={{fontStyle:"italic",fontSize:11,color:"white"}}>Explore <Text style={{color:"yellow"}}>puls</Text></Text>
             <Image source={{uri : logo2}} style={{height:15,width:15,marginHorizontal:3}} />
          </View>
       </View>
       <View style={{flexDirection:"row",justifyContent:"space-around",marginLeft:150}}>
          <TouchableOpacity style={{paddingHorizontal:10}} onPress={() => navigation.navigate("SearchScreen")} >
               <AntDesign name='search1' size={23} color={"white"}  />
          </TouchableOpacity>
          <TouchableOpacity  style={{paddingHorizontal:10}} >
            <SimpleLineIcons name='bag' size={21} color={"white"} onPress={() => navigation.navigate("MyCart")}  />
          </TouchableOpacity>
          <TouchableOpacity  style={{paddingHorizontal:10}}>
            <Ionicons name='person-outline' size={23} color={"white"} onPress={() => navigation.navigate("Profile")} />
          </TouchableOpacity>
         
       </View>
    </View>
  );
}

function DrawerScreen(){
  return(
    <Drawer.Navigator 
      screenOptions={{headerTintColor:"white",drawerStyle:{
        borderTopRightRadius:7,
        borderBottomRightRadius:7,
        width: '75%',
        },
      }}
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props}   />}
      >
      <Drawer.Screen name='Home' component={HomeScreen} options={{ headerStyle:{
          backgroundColor:"blue",
        },
        // title:"FlipKart",
        drawerLabel:"Home",
        drawerItemStyle:{marginBottom:0},
        headerTitle:(props) => <LogoTitle/>
        }}   />
          {/* <Drawer.Screen name='Search' component={SearchScreen}  /> */}
    </Drawer.Navigator>
  )
}

function DrawerContext(){
  return(
    <DrawerScreen/>
  )
} 

function HeaderTitleSeearch(){
  const[searchData,setSearchData] = useState('')
  return(
       <View style={{flexDirection:"row",justifyContent:"space-between",width:"100%",alignItems:"center"}}>
          <TextInput onChangeText={search => setSearchData(search)} value={searchData}  placeholder='Serach here Product' placeholderTextColor="gray"   style={{backgroundColor:"white" ,color:"black",fontSize:16,width:"90%"}}/>
          {
             searchData.length > 6 && <Entypo name='circle-with-cross' size={25} color="black" onPress={() => setSearchData('')} style={{marginLeft:2}}/>
          }
       </View> 
  )
}

function  App(){
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerTintColor:"white"}}>
          <Stack.Screen name='root' component={DrawerContext} options={{headerShown:false}} />
          <Stack.Screen name='index' component={Index}  options={{headerShown:false , headerStyle:{
          backgroundColor:"blue",
        }}} />
          <Stack.Screen name='category' component={Category}  options={{headerShown:false}} />
          <Stack.Screen name='Notifications' component={Notifications}  options={{headerShown:false}} />
          <Stack.Screen name='Profile' component={ProfileScreen}  options={{headerShown:false}} />
         
          <Stack.Screen name='MyOrder' component={MyOrderScreen}  options={{ headerStyle:{
          backgroundColor:"blue",
        }}} />
          <Stack.Screen name='MyCart' component={MyCartScreen}  options={{headerShown:false , headerStyle:{
          backgroundColor:"blue",
        }}} />
          <Stack.Screen name='CheckOut' component={CheckoutScreen}  options={{headerShown:false , headerStyle:{
          backgroundColor:"blue",
        }}} />
          <Stack.Screen name='SignInScreen' component={SignInScreen}  options={{ headerStyle:{
          backgroundColor:"blue",
        }}} />
          <Stack.Screen name='SearchScreen' component={SearchScreen}  options={{ headerStyle:{
          backgroundColor:"white",

        },
        headerTintColor:"black",
        headerTitle : (props) => <HeaderTitleSeearch />
        }} />
        </Stack.Navigator>
     </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  
})