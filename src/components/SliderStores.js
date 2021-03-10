import React, { Component } from 'react';
import { View,Text, StyleSheet, Image } from 'react-native';

const SliderStores=({store})=>{

    return (
        <View>
        <View style={{padding:6,borderRadius:10,backgroundColor:'orange',marginRight:20,width:330}}>
    
    
            <View style={{flexDirection:'row',backgroundColor:'#928988',borderRadius:10,}}>
    
                <Image style={{width:140,height:'100%',borderRadius:10,}} source={{uri:store.foodImage}} />
    
                <View style={{flexDirection:"column",margin:10,marginLeft:15,marginRight:10,width:"50%"}}>
    
    <Text style={{color:"white",fontWeight:'bold',fontSize:16,}}>{store.name}</Text>
    
    <Text style={{color:'orange',fontSize:11,}}>Opening times:</Text>
    
    <Text style={{color:'white',fontSize:11,marginTop:5,}}>{store.openTime}-{store.closingTime}</Text>
    <Text style={{color:'white',fontWeight:'bold',marginTop:5,marginBottom:5,}}>{store.style}</Text>
    
    
    <Text style={{color:'white',fontSize:12,marginBottom:5,}}>{store.type}</Text>
    
    <View style={{flexDirection:"row",}}>
    
    
    <Text style={{color:'white',fontSize:11,flexShrink: 1,}}>Address:{store.address}</Text>
        </View>
    
    
                    </View>
    
    
    
    
    
                </View>
    
    
    
    
    </View>
    
    <View style={{position:"absolute",bottom:0,left:0,}}>
    
    
    <Image style={{width:60,height:60,borderRadius:60,}} source={{uri:store.storeLogo}} />
    
    </View>
    
    </View>
      
    )

}

export default SliderStores