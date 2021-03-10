
import React, { Component } from 'react';
import { View,Text,StyleSheet,Image  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather'
const StoreInfo=()=>{


    return (
        <View style={{flex:1,padding:0,}}>


            <Text style={{fontSize:17,fontWeight:'bold',marginLeft:20,marginTop:10,marginBottom:10,}}>About</Text>


<ScrollView
showsVerticalScrollIndicator={false}
scrollEventThrottle={10}
style={{padding:20,backgroundColor:'white',marginBottom:20}}
>
    
<Text style={{fontWeight:'bold',fontSize:15}}>Reuse the following:</Text>
<View style={{flexDirection:"row"}}>


    </View>

    
<Text style={{fontWeight:'bold',fontSize:15}}>Categories</Text>

    <Text>{"Indian"}</Text>

    <Text>{"Vegetarian"}</Text>

    <Text style={{color:'black'}}>{"Curry"}</Text>

<Text style={{fontWeight:'bold',marginTop:5}}>Social Links</Text>

<View style={{flexDirection:"row",marginTop:10,marginBottom:10}}>


    <Image style={{width:30,height:30,marginRight:20,}} source={require("../../../assest/images/social2.png")} />

    <Image style={{width:30,height:30,marginRight:20,}} source={require("../../../assest/images/social3.png")} />

    <Image style={{width:30,height:30}} source={require("../../../assest/images/social1.png")} />

    </View>


    <Text style={{fontWeight:'bold'}}>Description</Text>
    <Text style={{color:'gray',marginTop:2,marginBottom:8}}>{"Store Description .........."}</Text>

    <View style={{flexDirection:"row",alignItems:'center'}}>
    <View style={{width:10,height:10,borderRadius:20,backgroundColor:'#99ccff',marginRight:10}}></View>
    <Text style={{color:'black',marginTop:5,fontSize:13,marginBottom:5,}}>{"Noodles"}</Text>
    </View>
    
    <View style={{flexDirection:"row",alignItems:'center'}}>
    <View style={{width:10,height:10,borderRadius:20,backgroundColor:'#99ccff',marginRight:10}}></View>
    <Text style={{color:'black',fontSize:13,marginBottom:5,}}>{"Vegetarian"}</Text>
    </View>


<Text style={{fontWeight:'bold'}}>Opening Times:</Text>

<View style={{flexDirection:'row',borderBottomColor:'#E8E8E8',borderBottomWidth:1,paddingTop:10,paddingBottom:10}}>
<View>
    <Text>{"Mon"}-{"Sun"}</Text>
    </View>
    <View style={{flexDirection:"row-reverse",flex:1}}>
    <Text style={{color:"black",fontSize:12}}>{"11:30AM"}-{"12:00AM"}</Text>
        </View>

    </View>

    <View style={{flexDirection:'row',borderBottomColor:'#E8E8E8',borderBottomWidth:1,paddingTop:10,paddingBottom:10}}>


    <View>
    <Text style={{fontWeight:'bold',fontSize:13,}}>{"Phone No."}</Text>
    </View>
    <View style={{flexDirection:"row-reverse",flex:1,alignItems:'center'}}>
    <Text style={{color:"black",fontSize:12}}>{"+11-7647837399"}</Text>
       <Icon style={{fontSize:12,marginRight:5,}} name='phone-call' />
        </View>

    </View>

    <View style={{flexDirection:'row',borderBottomColor:'#E8E8E8',borderBottomWidth:1,paddingTop:10,paddingBottom:10}}>

    <View>
    <Text style={{fontWeight:'bold',fontSize:13,}}>{"Website"}</Text>
    </View>
    <View style={{flexDirection:"row-reverse",flex:1}}>
    <Text style={{color:"black",fontSize:12}}>{"www.website.com"}</Text>
        </View>

    </View>


    <Text style={{fontWeight:'bold',marginTop:10}}>Address</Text>
    
<View style={{flexDirection:"row",alignItems:'center',marginTop:5,marginBottom:25}}>
    <Image source={require('../../../assest/images/map.png')} style={{width:20,height:20}}/>

    <Text style={{marginLeft:5}}>{"1237 waterio Road ,SW! 6F"}

        </Text>

</View>
    </ScrollView>
           

           


            </View>
    )

}


const styles=StyleSheet.create({

    
})

export default StoreInfo