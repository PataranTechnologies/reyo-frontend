import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';

const ShareCustomHeader=(props)=>{

    const onBack=()=>{

        if(props.nonNavigationHeader===true)
        {
         props.back();
        }
        else
        {
        props.navigation.goBack(null);
    }}
    return (

        <View style={styles.container}>
  
  <Icon onPress={()=>{onBack()}} style={styles.backIcon} name='arrow-back' /> 
   
           <Text style={styles.title}>{props.title}</Text>

  
           <Icon onPress={()=>{props.onCameraPress()}} style={styles.cameraIcon} name='camera' /> 
   
            </View>
    )
}
const styles=StyleSheet.create({

    container:{
flexDirection:"row",
justifyContent:'center',
alignItems:'center',
marginBottom:10,
padding:10,

},
backIcon:{
    position:"absolute",
    left:10,
    fontSize:35,
},
title:{
    fontSize:21,
},
cameraIcon:{

    position:"absolute",
    right:10,
    fontSize:30


},
})

export default ShareCustomHeader;