import React, { Component } from 'react';
import { View,Text, StyleSheet } from 'react-native';

import Swiper from 'react-native-swiper'
import MainButton from '../../components/MainButton'
import SimpleButton from '../../components/SimpleButton'
import { Image } from 'react-native-animatable';
const AuthMain=(props)=>{

    const onSignUp=()=>{


        props.navigation.navigate("SignUpOption")

    }

    const onSkip=()=>{


    }

    return (
        
        <View style={{flex:1,}}>

<Image  />



            <View style={styles.content}>
            <Swiper style={styles.wrapper} >
        <View style={styles.slide}>
          <Text style={styles.text}> Lorem lpsum is simple{'\n'} dummy text</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>Lorem lpsum is simple{'\n'}dummy text</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>Lorem lpsum is simple{'\n'}dummy text</Text>
        </View>
      </Swiper>
           
          


            <MainButton title='Sign up' onPress={()=>{onSignUp()}} />


            <SimpleButton title='Skip' onPress={()=>{onSkip()}} />
</View>

            </View>
    )

}

const styles=StyleSheet.create({



    content:{
        position:"absolute",
        bottom:0,
        padding:20,
       
    },
    wrapper:{
       
        height:120,
        
    },
    slide:{
        alignItems:'center',
        justifyContent:'center'


    },
    text:{
color:'black',
fontSize:20,
textAlign:'center'

    },

})

export default AuthMain