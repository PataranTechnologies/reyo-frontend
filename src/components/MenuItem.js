import React, { Component } from 'react';

import { View,Text,StyleSheet, ImageBackground ,Image,TouchableOpacity,ScrollView ,TouchableWithoutFeedback} from 'react-native';
import  Icon  from 'react-native-vector-icons/Feather';

import Material from 'react-native-vector-icons/MaterialIcons'
const MenuItem=(props)=>{

    return (


<TouchableWithoutFeedback onPress={()=>{props.onPress()}} >
<View style={{borderBottomColor:'#DCDCDC',borderBottomWidth:1,paddingLeft:20,paddingRight:20,flexDirection:"row",paddingBottom:10,paddingTop:10}}>

    <Text style={{fontWeight:'bold'}}>{props.title}</Text>
    
    <View style={{flexDirection:"row-reverse",flex:1}}>

<Material name='arrow-forward-ios' style={{fontSize:22,color:'#99ccff'}} />
        </View>
    
</View>
</TouchableWithoutFeedback>

    )


}

export default MenuItem;