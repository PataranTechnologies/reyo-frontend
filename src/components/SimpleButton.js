import React, { Component } from 'react';
import { StyleSheet,TouchableWithoutFeedback ,Text, View} from 'react-native';


const SimpleButton=(props)=>{

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

       
        height:55,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        width:'100%',
        marginLeft:5,
        marginRight:5,
        borderColor:'#ff9933',
        borderWidth:2,
        marginTop:10,
       



    },
    buttonText:{

        color:'black',
        fontSize:20,


    }

})

export default SimpleButton