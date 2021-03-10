
import React, { Component } from 'react';
import { View,Text,StyleSheet, Modal, ImageBackground  } from 'react-native';
import CustomHeader from '../../navigations/CustomHeader';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/Fontisto';


const NotificationScreen=(props)=>{


    return (
        <Modal
        style={styles.container}
        onRequestClose={()=>{props.onBack()}}
        >

<View style={{flex:1, backgroundColor:"#F0F0F0",}}>

<CustomHeader title={"Notifications"} nonNavigationHeader={true} back={props.onBack} navigation={props.navigation} />

<ScrollView
showsHorizontalScrollIndicator={false}
scrollEventThrottle={10}
style={{flex:1,}}
>

    






</ScrollView>


</View>



</Modal>
    )

}


const styles=StyleSheet.create({

    container:{
       flex:1,
    },
    
})

export default NotificationScreen