import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Notificaations/NotificationsHeader'
import NotificationsIndex from '../components/Notificaations/NotificationsIndex'
import { ScrollView } from 'react-native'
import BottomIcon from '../components/Home/BottomIcon'

const Notifications = ({navigation}) => {
  return (
    <>
     <ScrollView>
        <Header/>
        <NotificationsIndex navigation={navigation}/>
     </ScrollView>
     <BottomIcon navigation={navigation} icon_name="Notifications" />
    </>
  )
}

export default Notifications

const styles = StyleSheet.create({})