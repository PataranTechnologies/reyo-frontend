import React, { Component } from 'react';
import { View ,StyleSheet, Image, Text, ImagePropTypes, Modal} from 'react-native';
import MainButton from '../../components/MainButton'



const EmailVerificationScreen=(props)=>{

    const backToSignUpScreen=()=>{
     
       props.onPressOk();
    }
    return (

        <Modal style={styles.container}>


            <View style={styles.contentView}>

<View style={styles.image} ></View>


<Text style={styles.text}> An Email with Verification Link is Sent{'\n'}to your account.Please verify{'\n'}to login</Text>


<MainButton title='Ok' onPress={()=>{backToSignUpScreen()}} />


                </View>




            </Modal>


    )

}

const styles=StyleSheet.create({
container:{
    flex:1,
    padding:20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
},
image:{
    alignSelf:'center',
    width:120,height:120,
    borderRadius:120,
    backgroundColor:'gray',
},
text:{

    textAlign:'center',
    fontSize:18,
    marginTop:20,
    marginBottom:10,

},
contentView:{

    flex:1,
    justifyContent:'center',
    backgroundColor:'white',
    padding:20,

},

})

export default EmailVerificationScreen;