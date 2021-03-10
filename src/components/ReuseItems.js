import React, { Component } from 'react';
import { View,Text, StyleSheet, Image ,TouchableOpacity} from 'react-native';

const ReuseItems=({reuseItem,onPress})=>{

    return (
        <View onPress={()=>onPress()} style={{padding:10,borderRadius:10,marginRight:10,marginBottom:10,backgroundColor:'white'}}>

        <Text style={{color:"black",fontWeight:'bold',fontSize:19,marginBottom:5}}>{reuseItem.name}</Text>
        
      
        
                <View style={{flexDirection:'row',borderRadius:10,}}>
        
                    <Image style={{width:140,height:'100%',borderRadius:10,}} source={{uri:reuseItem.storeLogo}} />
        
                    <View style={{flexDirection:"column",margin:10,marginLeft:15,marginRight:10,width:"50%"}}>
        
        
    <Text style={{color:'gray',fontSize:14,}}>For <Text style={{fontWeight:'bold'}}>{reuseItem.for}</Text> Reuse</Text>
        
        <Text style={{color:'gray',fontSize:13,marginTop:2,}}>On {reuseItem.on}</Text>
        
        
        <Text style={{color:'gray',fontSize:14,marginTop:2,}}>Address: {reuseItem.address}</Text>
        
                        </View>
        
        
        
        
        
         
                    </View>
        
        
                    <View style={{backgroundColor:'#F0F0F0',width:55,height:55,position:"absolute",top:10,right:10,padding:7,borderRadius:150,justifyContent:'center',alignItems:'center'}}>
        
        <Text style={{color:'orange',}}>1.3</Text>
        <Text style={{color:'black',}}>Miles</Text>
        
        </View>
        
        
      
        
        
        
                </View>
    )

}

export default ReuseItems