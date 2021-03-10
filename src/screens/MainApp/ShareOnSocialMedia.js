

import React, { Component, useState } from 'react';
import { View,Text,StyleSheet, Modal, ImageBackground, Image  } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/Fontisto';
import ShareCustomHeader from './ShareCustomHeader'
import ShareItem from '../../components/ShareItem';
import ImagePicker from "react-native-image-picker"
const ShareOnSocialMedia=(props)=>{

    const [shareImage,setShareImage]=useState()

    const camera=()=>{
        const options = {
            title: 'Select Avatar',
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };
        ImagePicker.launchCamera(options, (response) => {
        

            console.log('Response = ', response);

  if (response.didCancel) {
    console.log('User cancelled image picker');
  } else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  } else if (response.customButton) {
    console.log('User tapped custom button: ', response.customButton);
  } else {
    const source = { uri: response.uri };
     setShareImage(source);
  }
            
          });
        

    }

    return (
        <Modal
        style={styles.container}
        onRequestClose={()=>{props.onBack()}}
        >

<View style={{flex:1, backgroundColor:"#F0F0F0",}}>

<ShareCustomHeader title={"Share"} onCameraPress={()=>{camera()}} nonNavigationHeader={true} back={props.onBack} navigation={props.navigation} />

<ScrollView
showsHorizontalScrollIndicator={false}
scrollEventThrottle={10}
style={{flex:1,padding:15,marginBottom:0,paddingBottom:0}}
>
<ShareItem  />

<ShareItem  />

<ShareItem  />
<ShareItem  />







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

export default ShareOnSocialMedia