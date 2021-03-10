import React, { Component } from 'react';

import { View,Text,StyleSheet,Image  } from 'react-native';
const OfferItem=(props)=>{


    return (



        <View style={{backgroundColor:'white',borderRadius:10,padding:10,marginTop:10}}>
        <Text style={{fontWeight:'bold',fontSize:18}}>Save {"20%"} when reusing</Text>
        <Text style={{marginTop:2,fontSize:13,marginBottom:4}}>offer validity:{"Till 31 Aug 20"}</Text>
        
    
    
        <View style={{flexDirection:'row',borderRadius:10,}}>
        
        <Image style={{flex:5,height:'100%',borderRadius:10,}} source={{uri:'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872'}} />
    
        <View style={{flex:4, flexDirection:"column",margin:10,marginLeft:15,marginRight:10,width:"50%"}}>
    
    <View style={{flexDirection:"row"}}>
    <Text style={{color:'orange',fontSize:11,}}>Offer Value:</Text>
        <Text style={{color:'black',fontSize:11,marginLeft:10,}}>{"$230"}</Text>
    
    
    </View>
    
    <View style={{flexDirection:"row",alignItems:'center'}}>
    <View style={{width:10,height:10,borderRadius:20,backgroundColor:'#99ccff',marginRight:10}}></View>
    <Text style={{color:'black',marginTop:5,fontSize:13,marginBottom:5,}}>{"Noodles"}</Text>
    </View>
    
    <View style={{flexDirection:"row",alignItems:'center'}}>
    <View style={{width:10,height:10,borderRadius:20,backgroundColor:'#99ccff',marginRight:10}}></View>
    <Text style={{color:'black',fontSize:13,marginBottom:5,}}>{"Vegetarian"}</Text>
    </View>
    
    
            </View>
    
    
    
    
    
        </View>
    
    
    
    
    
    
                       </View>
    

    )


}


export default OfferItem