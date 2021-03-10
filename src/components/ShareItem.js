import React, { Component } from 'react';
import { View,Text,StyleSheet, Modal, ImageBackground, Image  } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/Fontisto';
const ShareItem=(props)=>{

    return (


<View style={{borderRadius:30,marginBottom:10}}>
<View style={{backgroundColor:'white',elevation:2,borderRadius:10}}>

<ImageBackground style={{width:'100%',height:180,backgroundColor:'black',borderTopLeftRadius:10,borderTopRightRadius:10}} >

<Image style={{position:'absolute',bottom:5,left:15,width:45,height:45,borderRadius:45,backgroundColor:'white',}} />


<Text style={{right:10,bottom:5,position:'absolute',color:'white',fontSize:13}}>Shared on Facebook at 12 Aug 11:30 AM</Text>

    </ImageBackground>
<View style={{padding:10}}>
<Text style={{fontWeight:'bold',fontSize:18}}>{"Store Name"}</Text>

    <Text style={{color:'gray'}}>Address: {"127 waterloo Road ,SWI 6tF"}</Text>

<Text style={{color:'gray'}}>I refilled and saved packagin by using Reyo app </Text>
</View>
    </View>
    </View>
    )
}

export default ShareItem;