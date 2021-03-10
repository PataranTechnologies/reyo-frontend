import React, { Component } from 'react';
import { Text } from 'react-native-animatable';
import { StyleSheet, View,TouchableWithoutFeedback } from 'react-native';


const GrayButton=(props)=>{

    return (
        
        <TouchableWithoutFeedback  onPress={()=>props.onPress()}>
<View style={[styles.button,props.style]}>
    <Text style={styles.buttonText}>{props.title}</Text>

</View>
            </TouchableWithoutFeedback>
        
           )


}


const styles=StyleSheet.create({


    button:{

        backgroundColor:'#C0C0C0',
        height:55,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        width:'100%',
        marginLeft:5,
        marginRight:5,
        
        
        marginTop:10,
      



    },
    buttonText:{

        color:'white',
        fontSize:20,


    }

})

export default GrayButton