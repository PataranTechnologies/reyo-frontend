import React, { Component } from 'react';
import { View,Text, StyleSheet, Image ,TouchableOpacity} from 'react-native';

const Store=({store,onPress})=>{

    return (
        <TouchableOpacity onPress={()=>onPress()} style={{padding:10,borderRadius:10,marginRight:10,marginBottom:10,backgroundColor:'white'}}>

        <Text style={{color:"black",fontWeight:'bold',fontSize:19,}}>{store.name}</Text>
        
        <Text style={{color:'gray',fontSize:14,flexShrink: 1,marginBottom:5}}>Address:{store.address}</Text>
        
        
                <View style={{flexDirection:'row',borderRadius:10,}}>
        
                    <Image style={{width:140,height:'100%',borderRadius:10,}} source={{uri:store.foodImage}} />
        
                    <View style={{flexDirection:"column",margin:10,marginLeft:15,marginRight:10,width:"50%"}}>
        
        
        <Text style={{color:'gray',fontSize:14,}}>Opening times:</Text>
        
        <Text style={{color:'gray',fontSize:14,marginTop:2,}}>{store.openTime}-{store.closingTime}</Text>
        <Text style={{color:'black',marginTop:5,marginBottom:5,}}>{store.item}</Text>
        
        
        <Text style={{color:'black',fontSize:15,marginBottom:5,}}>{store.type}</Text>
        
        
                        </View>
        
        
        
        
        
         
                    </View>
        
        
                    <View style={{backgroundColor:'#F0F0F0',position:"absolute",top:15,right:10,padding:7,borderRadius:150,justifyContent:'center',alignItems:'center'}}>
        
        <Text style={{color:'orange',}}>1.3</Text>
        <Text style={{color:'black',}}>Miles</Text>
        
        </View>
        
        
        <View style={{position:"absolute",backgroundColor:'#F0F0F0',bottom:15,right:10,padding:7,borderRadius:150,justifyContent:'center',alignItems:'center'}}>
        
        <Text style={{color:'orange',}}>12</Text>
        <Text style={{color:'black',}}>Mins</Text>
        
        </View>
        
        
        
        
        
                </TouchableOpacity>
    )

}

export default Store