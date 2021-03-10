
import React, { Component } from 'react';
import { View,Text,StyleSheet, Modal, ImageBackground, Image  } from 'react-native';
import CustomHeader from '../../navigations/CustomHeader';
import { TouchableOpacity, ScrollView, TextInput } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/Fontisto';
import MainButton from '../../components/MainButton'

const ContactScreen=(props)=>{


    return (
        <Modal
        style={styles.container}
        onRequestClose={()=>{props.onBack()}}
        >

<View style={{flex:1, backgroundColor:"white",}}>

<CustomHeader title={"Contact Admin"} nonNavigationHeader={true} back={props.onBack} navigation={props.navigation} />

<ScrollView
showsHorizontalScrollIndicator={false}
scrollEventThrottle={10}
style={{flex:1,}}
>

<TextInput 
underlineColorAndroid='transparent'
style={{margin:20,padding:10,height:250,textAlignVertical:'top',backgroundColor:'#f1f4f6'}} multiline={true} placeholder='How can we help You?' />


<View style={{marginLeft:30,marginRight:30}}>
<MainButton title='Submit' onPress={()=>{}} />
</View>

    <Text style={{margin:30,textAlign:'center',fontWeight:'bold',fontSize:20,marginBottom:0}} >Or</Text>

    <Text style={{margin:30,textAlign:'center',fontWeight:'bold',fontSize:20}}>Can direct Message on{'\n'}Social sites.</Text>
    




    <View style={{flexDirection:'row',justifyContent:'center',backgroundColor:'#f0f0f0'}}>


    <Image source={require("../../../assest/images/social2.png")} style={{width:50,height:50,margin:10}} />
        

    <Image source={require("../../../assest/images/social3.png")} style={{width:50,height:50,margin:10}} />
        
        
        <Image source={require("../../../assest/images/social1.png")} style={{width:50,height:50,margin:10}} />
        
        
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

export default ContactScreen