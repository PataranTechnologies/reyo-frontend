import React, { Component } from 'react';
import { View,Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const InviteComponent=(props)=>{

return (

<TouchableOpacity onPress={()=>{props.onPress()}} style={{backgroundColor:'#99ccff',borderRadius:10,justifyContent:'center',alignItems:'center',paddingLeft:15,paddingRight:15,paddingBottom:10,flex:1,margin:5,}}>
<TouchableOpacity onPress={()=>{props.onPress()}} style={{backgroundColor:'#ffb366',margin:10,justifyContent:'center',alignItems:'center',width:100,height:100,borderRadius:100,marginTop:-25}}>


    <Text style={{color:'white',fontSize:15,}}>Invite a </Text>
<Text style={{color:'white',fontSize:22,}}>{props.invite}</Text>


    </TouchableOpacity>

    
<Text style={{textAlign:'center',color:'white'}}>{props.message}</Text>


</TouchableOpacity>

)

}



export default InviteComponent