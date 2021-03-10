import React, { Component ,useState} from 'react';
import { View, StyleSheet, Text, Modal } from 'react-native';
import CustomHeader from '../../navigations/CustomHeader';
import CustomInput from '../../components/CustomInput';
import { TextInput } from 'react-native-gesture-handler';

import SimpleButton from '../../components/SimpleButton';
import MainButton from '../../components/MainButton'

const GuestModeScreen=(props)=>{

    const [email,setEmail]=useState();

    const [isResetModalActive,setIsResetModalActive]=useState();

    const onSubmit=()=>{

        setIsResetModalActive(true);
    }
    return (

        <View style={{flex:1,backgroundColor:'white',}}>


            <CustomHeader title='Guest Mode' navigation={props.navigation} />


            <View style={styles.container}>

            


    <Text style={styles.heading}>Login or Signup</Text>

    <Text style={styles.text}>Please Signup to proceed further.{'\n'}if you are an existing user{'\n'}please login </Text>


<MainButton title="Signin" onPress={()=>{onSubmit()}} />

<SimpleButton title='Signup' />


                </View>




            </View>

    )

}

const styles=StyleSheet.create({

    container:{
        flex:1,
       justifyContent:'center',
       padding:30,
    
    },
    
    heading:{
        textAlign:'center',
        fontSize:27,
        fontWeight:'bold',

    },
   
    
      text:{
          margin:10,
          textAlign:"center",
          fontSize:20,
          marginBottom:20,
      },

})


export default GuestModeScreen