import { StyleSheet, Text, View,onPress } from 'react-native'
import React from 'react'
import ProfileHeader from '../components/Profile/ProfileHeader'
import BottomIcon from '../components/Home/BottomIcon'
import { ScrollView } from 'react-native'
import ProfileMenu from '../components/Profile/ProfileMenu'
import { Divider } from '@rneui/themed'

const ProfileScreen = ({navigation}) => {
  return (
    <>
     <ProfileHeader navigation={navigation}/>
     <ScrollView>
        <ProfileMenu/>
     </ScrollView>
     <Divider style={{marginBottom:4}}/>
     <BottomIcon navigation={navigation} icon_name="Profile" />
    </>
    
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})