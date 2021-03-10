import React, { Component } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { StyleSheet, Text } from 'react-native';


const CustomInput=(props)=>{

    return (
        <TextInput 
        secureTextEntry={props.secureTextEntry}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={(text)=>{props.onChangeText(text)}}
        style={[styles.input,props.style]}
        />
    )

}
const styles=StyleSheet.create({

    input:{
        borderBottomColor:'#DCDCDC',
        borderBottomWidth:1,
        padding:10,
        paddingLeft:0,
        borderRadius:5,
        marginTop:5,
        marginBottom:5,
    }

})

export default CustomInput