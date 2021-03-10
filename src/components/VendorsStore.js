import React, { Component } from 'react';
import { View,Text, StyleSheet, Image ,TouchableOpacity} from 'react-native';

const VendorsStore=({store,onPress})=>{

    return (
        <TouchableOpacity onPress={()=>onPress()} style={{padding:10,borderRadius:10,marginRight:10,marginBottom:10,backgroundColor:'white',paddingBottom:25}}>

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
        
                    <View style={{backgroundColor:'#F0F0F0',position:"absolute",top:15,right:10,width:55,height:55,padding:7,borderRadius:150,justifyContent:'center',alignItems:'center'}}>
        
    <Text style={{color:'orange',}}>{store.points}</Text>
        <Text style={{color:'black',fontSize:12}}>reuses</Text>
        
        </View>
                    <View style={{position:"absolute",backgroundColor:'white',bottom:5,right:10,padding:7,borderRadius:150,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
        
        <View style={{marginRight:10,flexDirection:'row',justifyContent:'flex-end',alignItems:'flex-end'}}>
        <Text style={{color:'orange',fontSize:15,marginRight:2}}>1.3</Text>
        <Text style={{color:'black',fontSize:12}}>Miles</Text>
        </View>
       <View style={{marginRight:10,flexDirection:'row',justifyContent:'flex-end',alignItems:'flex-end'}}>
        <Text style={{color:'orange',fontSize:15,marginRight:2}}>12</Text>
        <Text style={{color:'black',fontSize:12}}>Mins</Text>
        </View>
        </View>
        
        
        
        
        
                </TouchableOpacity>
    )

}

export default VendorsStore