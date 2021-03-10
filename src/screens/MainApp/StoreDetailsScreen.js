import React, { Component, useEffect, useState } from 'react';
import { View,Text,StyleSheet, Modal, Image, ImageBackground,TouchableWithoutFeedback,TouchableOpacity  } from 'react-native';
import StoreOffer from './StoreOffre';
import StoreMenu from './StoreMenu';
import StoreInfo from './StoreInfo';



const StoreDetailsScreen=(props)=>{

    const [selectedOption,setSelectedOption]=useState(1);

    useEffect(()=>{


        //api call toi get store data;

     
        


    },[])

    return (
        <Modal style={styles.container} onRequestClose={()=>{props.back()}}>


            <ImageBackground style={{flex:3}} source={{uri:'https://media.architecturaldigest.in/wp-content/uploads/2019/07/The-Brew-Chapter-bangalore-restaurant-pub.jpg'}} >


                </ImageBackground>


<View style={{flex:7,}}>


<View style={{flexDirection:"row",padding:10,height:84}}>
<View style={{flex:8,marginLeft:10,}}>
<Text style={{fontSize:25,fontWeight:'bold'}}>Store Name</Text>


<Text style={{color:'gray',fontSize:15}}>Address: dummy address</Text>

    </View>


    <TouchableOpacity >
<View style={{backgroundColor:'orange',padding:12,borderRadius:70,justifyContent:'center',alignItems:'center',flex:2,width:70,height:70}}>

<Text style={{fontSize:27,fontWeight:'bold',color:'white'}}>Go!</Text>

</View>
        </TouchableOpacity>




    </View>


<View style={{flexDirection:"row",marginTop:5,paddingTop:15,borderTopColor:'#E8E8E8',borderTopWidth:1,}}>


    <TouchableOpacity

    onPress={()=>{setSelectedOption(1)}}
    
    style={[{flex:1,justifyContent:'center',alignItems:'center',paddingBottom:10},selectedOption===1?{borderBottomColor:'#99ccff',borderBottomWidth:2,}:{}]}
    >
<Text> OFFERS </Text>
 </TouchableOpacity>  



    <TouchableOpacity

onPress={()=>{setSelectedOption(2)}}
style={[{flex:1,justifyContent:'center',alignItems:'center',paddingBottom:10},selectedOption===2?{borderBottomColor:'#99ccff',borderBottomWidth:2,}:{}]}
>
<Text> MENU </Text>
</TouchableOpacity>



<TouchableOpacity

onPress={()=>{setSelectedOption(3)}}
style={[{flex:1,justifyContent:'center',alignItems:'center',paddingBottom:10},selectedOption===3?{borderBottomColor:'#99ccff',borderBottomWidth:2,}:{}]}
>
<Text> INFO </Text>
</TouchableOpacity>



    </View>


<View style={{backgroundColor:'#F0F0F0',height:'77%'}}>
{
    selectedOption===1?
<StoreOffer />:null
}
{
    selectedOption===2?
<StoreMenu />:null
}
{
    selectedOption===3?
<StoreInfo />:null
}

    </View>






    </View>




        


            </Modal>
    )

}


const styles=StyleSheet.create({


    container:{

        flex:1,
        backgroundColor:'red'
        

    },
    
})

export default StoreDetailsScreen