import React, { Component, useEffect } from 'react';
import { ImageBackground } from 'react-native';
import { View,Text } from 'react-native-animatable';


const SplashScreen=(props)=>{

    useEffect(()=>{
        setTimeout(()=>{
            props.navigation.navigate("AuthStack");
        },3000)
    },[])

    return (
        <View style={{backgroundColor:'black',flex:1,justifyContent:'center',alignItems:'center'}}>




            <Text style={{fontSize:40,color:'white',fontWeight:'bold'}}>Reyo</Text>



            </View>
    )


}


export default SplashScreen;