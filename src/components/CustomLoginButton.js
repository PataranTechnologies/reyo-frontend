import React, { Component } from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Text } from 'react-native-animatable';
import { StyleSheet, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { withOrientation } from 'react-navigation';


const CustomLoginButton=(props)=>{

    const facebook=<FontAwesome style={styles.ficon} name='facebook' />;
    const apple= <AntDesign style={styles.aicon} name='apple1' />;
    const google=<AntDesign style={styles.gicon} name='google' />
  
    const facebookStyle={
        borderColor:'#99ccff',
        borderWidth:1,
        backgroundColor:'white',
        flex:1,
        borderRadius:30,
     
        
    }
    const appleStyle={
       borderColor:'black',
       borderWidth:1,
       borderRadius:30,
       backgroundColor:'white',
        flex:1,
      

    }
    const googleStyle={
        backgroundColor:'white',
        borderColor:'black',
        borderWidth:1,
        flex:1,
        borderRadius:30,
        
      
    }

    let buttonStyle=null;
    if(props.type==='facebook')
    {
        buttonStyle=facebookStyle;

    }
    else
    if(props.type==='apple')
    {
        buttonStyle=appleStyle

    }
    else
    if(props.type==='google')
    {
        buttonStyle=googleStyle;
    }


    return (
        <View style={[styles.button,buttonStyle]}>
        <TouchableWithoutFeedback  onPress={()=>props.onPress()}>



         {props.type==="facebook"?facebook:null
         }

{props.type==="apple"?apple:null
         }

{props.type==="google"?google:null
         }


            </TouchableWithoutFeedback>
        </View>
           )


}


const styles=StyleSheet.create({


    button:{

        flex:1,
        backgroundColor:'black',
        borderRadius:10,
        padding:20,
        justifyContent:'center',
        alignItems:'center',
        margin:5,
        height: 60,
      



    },
     ficon:{
       
        color:'#00ace6',
        fontSize:22,
     },
     aicon:{

        color:"black",
        fontSize:22,

    },
    gicon:{

        color:'#808080',
        fontSize:22,

    },
})

export default CustomLoginButton