import React, { Component, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';


const CustomInput=(props)=>{

    const [hidden,setHidden]=useState(true)
    return (

        <View style={[styles.input,props.style]}>
            <Icon onPress={()=>{setHidden(!hidden)}} name={"search"} style={styles.Icon} />
        
        <TextInput 
        style={styles.inputField}
        secureTextEntry={hidden}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={(text)=>{props.onChangeText(text)}}
        />
        </View>
    )

}
const styles=StyleSheet.create({

    input:{
        
      backgroundColor:'white',

        borderRadius:5,
        marginTop:5,
        marginBottom:5,
        flexDirection:"row",
        alignItems:"center",
        flex:.8
    },
    Icon:{
        fontSize:25,
       
        marginLeft:10,
        color:'gray'
    },
    inputField:{
        padding:10,
        flex:1,
        paddingLeft:5,

    },


})

export default CustomInput