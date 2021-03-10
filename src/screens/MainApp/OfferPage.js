
import React, { Component } from 'react';
import { View,Text,StyleSheet, Modal, ImageBackground  } from 'react-native';
import CustomHeader from '../../navigations/CustomHeader';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/Fontisto';


const OfferPage=(props)=>{


    return (
        <Modal
        style={styles.container}
        onRequestClose={()=>{props.onBack()}}
        >

<View style={{flex:1, backgroundColor:"#F0F0F0",}}>

<CustomHeader title={"Store name"} nonNavigationHeader={true} back={props.onBack} navigation={props.navigation} />
<ScrollView style={{padding:10}}>
<ImageBackground source={{uri:''}} style={{width:'100%',height:180,backgroundColor:'gray',borderRadius:20}}>

<View style={{position:'absolute',bottom:-25,right:20}}>
<TouchableOpacity style={{backgroundColor:'#99ccff',width:60,height:60,borderRadius:60,justifyContent:'center',alignItems:'center',}}>
<Icon style={{fontSize:28,color:'white'}} name="share" />
    </TouchableOpacity>
</View>
    </ImageBackground>


<View style={{padding:5,marginTop:20}}>

<View style={{backgroundColor:'white',padding:10,marginTop:5,marginBottom:5,borderRadius:20,}}>

    <Text style={{fontWeight:'bold',marginTop:10,marginBottom:2}}>Cup Cakes-store name</Text>

    <Text style={{fontWeight:'bold'}}>save {"20%"} when reusing - offer heading </Text>


    <Text>Offer start: offer date and time start</Text>

    <Text>Offer End: offer data and time end </Text>


    </View>




    <View style={{backgroundColor:'white',padding:10,marginTop:5,marginBottom:5,borderRadius:20,}}>

    <Text style={{fontWeight:'bold',marginTop:10,marginBottom:5}}>Offer Description</Text>

    <Text>save {"20%"} when reusing - offer heading </Text>


    <Text style={{fontWeight:'bold',fontSize:12,marginTop:10}}>To claim your offer show this page to the cashier when</Text>


    </View>


    <View style={{backgroundColor:'white',padding:10,marginTop:5,marginBottom:5,borderRadius:20,}}>

    <Text style={{fontWeight:'bold',marginTop:10,marginBottom:5}}>Offer Validity</Text>

    <Text> dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy </Text>



    </View>



    <View style={{backgroundColor:'white',padding:10,marginTop:5,marginBottom:5,borderRadius:20,}}>

    <Text style={{fontWeight:'bold',marginTop:10,marginBottom:5}}>Offer Terms</Text>

    <Text>dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy</Text>



    </View>


</View>









    </ScrollView>

</View>



</Modal>
    )

}


const styles=StyleSheet.create({

    container:{
       flex:1,
    },
    
})

export default OfferPage