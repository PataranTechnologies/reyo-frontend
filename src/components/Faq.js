import React, { Component,useState } from 'react';

import { View,Text,StyleSheet, Modal, ImageBackground ,ScrollView,TouchableWithoutFeedback } from 'react-native';

import  Icon  from 'react-native-vector-icons/MaterialIcons';
const Faq=()=>{
    const [answerShown,setAnswerShown]=useState(false);
    return (


<TouchableWithoutFeedback  onPress={()=>{setAnswerShown(!answerShown)}}>
<View style={{marginBottom:10}}>
<View style={{paddingLeft:15,alignItems:'center',flexDirection:'row',paddingRight:15}}>


    <View style={{padding:5,backgroundColor:'gray',width:25,height:25,borderRadius:25,justifyContent:'center',alignItems:'center'}}>
    <Text style={{color:'white'}}>{"1"}</Text>
        </View>


        <Text style={{fontWeight:'900',fontSize:19,marginLeft:10}} >

          {"Lorem ipsum dolor sit amet ?"}

            </Text>
  
        <View style={{flexDirection:'row-reverse',flex:1,}}>


                <Icon style={{fontSize:40,fontWeight:'bold',color:'orange'}} name={answerShown?"keyboard-arrow-up":"keyboard-arrow-down"} />

            </View>



    </View>


{
    answerShown?

    <View  style={{padding:30,paddingTop:10}}>
    <Text style={{fontSize:16}}>
        {"answer"}

        </Text></View>:null
}

    </View>

</TouchableWithoutFeedback>



    );
}


export default Faq