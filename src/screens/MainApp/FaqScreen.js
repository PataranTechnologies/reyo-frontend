
import React, { Component, useState } from 'react';
import { View,Text,StyleSheet, Modal, ImageBackground ,ScrollView,TouchableWithoutFeedback } from 'react-native';
import CustomHeader from '../../navigations/CustomHeader';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import Faq from '../../components/Faq';


const FaqScreen=(props)=>{


  

    return (
        <Modal
        style={styles.container}
        onRequestClose={()=>{props.onBack()}}
        >

<View style={{flex:1, backgroundColor:"#F0F0F0",}}>

<CustomHeader title={"FAQ's"} nonNavigationHeader={true} back={props.onBack} navigation={props.navigation} />

<ScrollView
showsHorizontalScrollIndicator={false}
scrollEventThrottle={10}
style={{flex:1,}}
>

<Faq />

<Faq />

<Faq />

<Faq />

<Faq />


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

export default FaqScreen