

import React, { Component, useState } from 'react';
import { View,Text,StyleSheet, Modal, ImageBackground, Image  } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/Octicons'
import Icon3 from 'react-native-vector-icons/Ionicons'
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
        

<View style={{flex:1, backgroundColor:"#F0F0F0",}}>

<View style={styles.upperHeaderRow}>

<Text style={{textAlign:'center',fontSize:18}}>
  Share
    </Text>

<View style={{position:'absolute',right:10,flexDirection:'row'}}>
<Icon style={{fontSize:25,marginLeft:15,}} onPress={()=>{setNotificationScreenActive(true)}} name='bell' />


<Icon3 style={{fontSize:25,marginLeft:15,fontWeight:'bold'}} name='camera'/>

</View>

</View>
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




    )

}


const styles=StyleSheet.create({

    container:{
       flex:1,
    },
    upperHeaderRow:{

      flexDirection:"row",
      justifyContent:'center',
      alignItems:'center',
      paddingLeft:20,
      paddingRight:30,
      marginTop:10,
      marginLeft:10,
      marginRight:10,

  },
  


    
})

export default ShareOnSocialMedia