import React, { Component } from 'react';
import { View,Text,StyleSheet, Modal, ImageBackground, Image  } from 'react-native';

import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/Fontisto';

const Article=(props)=>{

    return (


<View style={{marginTop:10}}>

<Image source={{uri:props.article?props.article.image:""}} style={{width:"100%",height:180,backgroundColor:'orange'}} />
<Text style={{marginTop:5,color:'gray'}}>{'12 Aug,11:30 AM'}</Text>

<Text style={{fontSize:16,marginRight:10,marginTop:3}}>Article Info Article Info Article Info Article Info Article Info Article Info Article Info Article Info Article Info Article Info Article Info v Article Info v</Text>


</View>
    )


}

export default Article;