import React, { Component } from 'react';
import { View,Text, StyleSheet, Image ,TouchableOpacity} from 'react-native';

const OfferComponent=({store,onPress})=>{

    return (
        <TouchableOpacity onPress={()=>onPress()} style={{padding:10,borderRadius:10,marginRight:10,marginBottom:10,backgroundColor:'white'}}>

        <Text style={{color:"black",fontWeight:'bold',fontSize:19,}}>{store.name}</Text>

        <Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>Save {"20%"} when reusing</Text>
        <Text style={{marginTop:2,fontSize:13,marginBottom:4}}>offer validity:{"Till 31 Aug 20"}</Text>
        
     
       
                <View style={{flexDirection:'row',borderRadius:10,}}>
        
                    <Image style={{width:140,height:'100%',borderRadius:10,}} source={{uri:store.foodImage}} />
        
                    <View style={{flexDirection:"column",margin:10,marginLeft:15,marginRight:10,width:"50%"}}>
        
                    <View style={{flexDirection:"row"}}>
    <Text style={{color:'orange',fontSize:14,}}>Offer Value:</Text>
        <Text style={{color:'black',fontSize:13,marginLeft:10,}}>{"$230"}</Text>
    
    
    </View>
        
        <View style={{flexDirection:"row",alignItems:'center'}}>
    <View style={{width:10,height:10,borderRadius:20,backgroundColor:'#99ccff',marginRight:10}}></View>
    <Text style={{color:'black',marginTop:5,fontSize:13,marginBottom:5,}}>{store.item}</Text>
    </View>
    
    <View style={{flexDirection:"row",alignItems:'center'}}>
    <View style={{width:10,height:10,borderRadius:20,backgroundColor:'#99ccff',marginRight:10}}></View>
    <Text style={{color:'black',fontSize:13,marginBottom:5,}}>{store.type}</Text>
    </View>
        
                        </View>
        
        
        
        
        
         
                    </View>
        
        
        
        
        
        
        
                </TouchableOpacity>
    )

}

export default OfferComponent