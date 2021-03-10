import React, { Component } from 'react';
import { Text } from 'react-native-animatable';
import { StyleSheet,TouchableWithoutFeedback, View } from 'react-native';
import Icon  from 'react-native-vector-icons/MaterialIcons';


const BlackButton=(props)=>{

    return (
        <TouchableWithoutFeedback style={{flex:1,width:'100%',height:'100%'}} onPress={()=>props.onPress()}>

        <View style={[styles.button,props.style]}>
        
    <Text style={styles.buttonText}>{props.title}</Text>

      <Icon name='arrow-right-alt' style={styles.Icon} />
           
        </View>
        </TouchableWithoutFeedback>
           )


}


const styles=StyleSheet.create({


    button:{

        backgroundColor:'#ffb366',
        height:55,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        width:'70%',
        marginLeft:5,
        marginRight:5,
        
        
        marginTop:10,
      



    },
    buttonText:{

        color:'white',
        fontSize:20,


    },
    Icon:{
        fontSize:40,
        position:"absolute",
        right:10,
        color:'white',
    }, 

})

export default BlackButton