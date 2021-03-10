
import React, { Component, useState } from 'react';
import { View,Text,StyleSheet, Modal, ImageBackground ,ScrollView,TouchableWithoutFeedback } from 'react-native';
import CustomHeader from '../../navigations/CustomHeader';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import Ent from 'react-native-vector-icons/Entypo'
import Ion from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AboutScreen from './AboutScreen';
import PrivacyScreen from './PrivacyScreen';
import TermsScreen from './TermsScreen';
import FaqScreen from './FaqScreen';
import ContactScreen from './ContackUs';
import GDRPScreen from './GDRPScreen'
const SettingScreen=(props)=>{

    const [isAboutScreenActive,setIsAboutScreenActive]=useState(false)
    const [isFaqScreenActive,setIsFaqScreenActive]=useState(false)
    const [isContactScreenActive,setIsContactScreenActive]=useState(false)
    const [isPrivacyScreenActive,setIsPrivacyScreenActive]=useState(false)
    const [isGDRPScreenActive,setIsGDRPScreenActive]=useState(false)
    const [isTermsAndCScreenActive,setIsTermsAndCScreenActive]=useState(false)


    return (
        <Modal
        style={styles.container}
        onRequestClose={()=>{props.onBack()}}
        >

<View style={{flex:1, backgroundColor:"#F0F0F0",}}>

<CustomHeader title={"Setting"} nonNavigationHeader={true} back={props.onBack} navigation={props.navigation} />

<ScrollView
showsHorizontalScrollIndicator={false}
scrollEventThrottle={10}
style={{flex:1,}}
>

<TouchableWithoutFeedback onPress={()=>{setIsAboutScreenActive(true)}}>
<View style={{flexDirection:"row",paddingLeft:20,paddingRight:20,alignItems:'center',paddingTop:10,paddingBottom:10}}>

<View style={{backgroundColor:'#99ccff',padding:5,width:30,height:30,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
    <Ent name='info-with-circle' style={{fontSize:16,color:'white'}} />
</View>

    <Text style={{fontSize:17,fontWeight:'bold',marginLeft:15}}>About Us</Text> 




    </View>
</TouchableWithoutFeedback>
    







<TouchableWithoutFeedback onPress={()=>{setIsFaqScreenActive(true)}}> 
<View style={{flexDirection:"row",paddingLeft:20,paddingRight:20,alignItems:'center',paddingTop:10,paddingBottom:10}}>

<View style={{backgroundColor:'#99ccff',padding:5,width:30,height:30,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
    <Ent name='chat' style={{fontSize:16,color:'white'}} />
</View>

    <Text style={{fontSize:17,fontWeight:'bold',marginLeft:15}}>FAQ's</Text> 




    </View>
</TouchableWithoutFeedback>
 









<TouchableWithoutFeedback onPress={()=>{setIsContactScreenActive(true)}}>
<View style={{flexDirection:"row",paddingLeft:20,paddingRight:20,alignItems:'center',paddingTop:10,paddingBottom:10}}>

<View style={{backgroundColor:'#99ccff',padding:5,width:30,height:30,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
    <Ent name='mail' style={{fontSize:16,color:'white'}} />
</View>

    <Text style={{fontSize:17,fontWeight:'bold',marginLeft:15}}>Contact Us</Text> 




    </View>
</TouchableWithoutFeedback>
 








<TouchableWithoutFeedback onPress={()=>{setIsPrivacyScreenActive(true)}}>
<View style={{flexDirection:"row",paddingLeft:20,paddingRight:20,alignItems:'center',paddingTop:10,paddingBottom:10}}>

<View style={{backgroundColor:'#99ccff',padding:5,width:30,height:30,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
    <Icon name='privacy-tip' style={{fontSize:16,color:'white'}} />
</View>

    <Text style={{fontSize:17,fontWeight:'bold',marginLeft:15}}>Privacy policy</Text> 




    </View>
</TouchableWithoutFeedback>
 









<TouchableWithoutFeedback onPress={()=>{setIsGDRPScreenActive(true)}}>
<View style={{flexDirection:"row",paddingLeft:20,paddingRight:20,alignItems:'center',paddingTop:10,paddingBottom:10}}>

<View style={{backgroundColor:'#99ccff',padding:5,width:30,height:30,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
    <Icon name='privacy-tip' style={{fontSize:16,color:'white'}} />
</View>

    <Text style={{fontSize:17,fontWeight:'bold',marginLeft:15}}>GDRP</Text> 




    </View>
</TouchableWithoutFeedback>
 















<TouchableWithoutFeedback onPress={()=>{setIsTermsAndCScreenActive(true)}}> 
<View style={{flexDirection:"row",paddingLeft:20,paddingRight:20,alignItems:'center',paddingTop:10,paddingBottom:10}}>

<View style={{backgroundColor:'#99ccff',padding:5,width:30,height:30,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
    <Ion name='documents' style={{fontSize:16,color:'white'}} />
</View>

    <Text style={{fontSize:17,fontWeight:'bold',marginLeft:15}}>Terms and Conditions</Text> 




    </View>
</TouchableWithoutFeedback>
 








<TouchableWithoutFeedback>
<View style={{flexDirection:"row",paddingLeft:20,paddingRight:20,alignItems:'center',paddingTop:10,paddingBottom:10}}>

<View style={{backgroundColor:'#99ccff',padding:5,width:30,height:30,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
    <FontAwesome name='user' style={{fontSize:16,color:'white'}} />
</View>

    <Text style={{fontSize:17,fontWeight:'bold',marginLeft:15}}>Logout</Text> 




    </View>
</TouchableWithoutFeedback>
 












</ScrollView>


</View>

{
isAboutScreenActive?<AboutScreen onBack={()=>{setIsAboutScreenActive(false)}} />:null

}

{
isPrivacyScreenActive?<PrivacyScreen onBack={()=>{setIsPrivacyScreenActive(false)}} />:null
}


{
isTermsAndCScreenActive?<TermsScreen onBack={()=>{setIsTermsAndCScreenActive(false)}} />:null

}


{
isFaqScreenActive?<FaqScreen onBack={()=>{setIsFaqScreenActive(false)}} />:null

}
{
    isContactScreenActive?<ContactScreen onBack={()=>{setIsContactScreenActive(false)}} />:null
}
{

isGDRPScreenActive?<GDRPScreen onBack={()=>{setIsGDRPScreenActive(false)}} />:null

}


</Modal>
    )

}


const styles=StyleSheet.create({

    container:{
       flex:1,
    },
    
})

export default SettingScreen