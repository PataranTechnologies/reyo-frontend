import React, { Component ,useState} from 'react';
import { View, StyleSheet, Text, Modal } from 'react-native';
import CustomHeader from '../../navigations/CustomHeader';
import CustomInput from '../../components/CustomInput';
import { TextInput } from 'react-native-gesture-handler';
import MainButton from '../../components/MainButton'
import SimpleButton from '../../components/SimpleButton';


const LocationScreen=(props)=>{

    const [email,setEmail]=useState();

    const [isResetModalActive,setIsResetModalActive]=useState();

    const onSubmit=()=>{

        setIsResetModalActive(true);
    }
    return (

        <View style={{flex:1,backgroundColor:'white',}}>


            <CustomHeader title='location' navigation={props.navigation} />


            <View style={styles.container}>

            


    <Text style={styles.heading}>Enable Location</Text>

    <Text style={styles.text}>Please Enable Location to Proceed{'\n'}further</Text>


<MainButton title="Enable Location" onPress={()=>{onSubmit()}} />

<SimpleButton title='Not Now' onPress={()=>{onSubmit()}} />


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
          fontSize:17,
          marginBottom:20,
      },

})


export default LocationScreen