
import React, { Component,useState } from 'react';
import { View,Text,StyleSheet, Modal, ImageBackground  } from 'react-native';
import CustomHeader from '../../navigations/CustomHeader';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/Fontisto';
import CustomInput from '../../components/CustomInput';

import MainButton from '../../components/MainButton'

import DropDownPicker from 'react-native-dropdown-picker';
import CustomPasswordInput from '../../components/CustomPasswordInput'

import ImagePicker from 'react-native-image-picker'
import TextInputMask from 'react-native-text-input-mask';
import PhoneInput from 'react-native-phone-input';
import * as Actions from '../../reyuRedux/actions'
import Ion from 'react-native-vector-icons/Ionicons'
import {connect} from 'react-redux'
import CustomSearch from '../../components/CustomSearch'
const AddStore=(props)=>{

    const [firstname,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState();
    const [confirmPassword,setConfirmPassword]=useState("")
    const [age,setAge]=useState(18);
    const [verifyModalActive,setVerifyModalActive]=useState(false);
    const [photo,setPhoto]=useState()
    const [company,setCompany]=useState("")
   

    const [vendorId,setVendorId]=useState('')

    const [phoneNumber, setPhoneNumber] = React.useState('');
    let phone=React.createRef();
    const [country, setCountryCode] = React.useState('506');
    return (
        <Modal
        style={styles.container}
        onRequestClose={()=>{props.onBack()}}
        >

<View style={{flex:1, backgroundColor:"white",}}>

<CustomHeader title={"Add Store"} nonNavigationHeader={true} back={props.onBack} navigation={props.navigation} />
<View style={{padding:20,flex:1,paddingBottom:0}}>
<ScrollView
showsHorizontalScrollIndicator={false}
showsVerticalScrollIndicator={false}
scrollEventThrottle={10}
style={{flex:1,}}
>

<View style={{marginBottom:30}}>

<Text style={styles.logintxt}>Store Name</Text>
<CustomInput
secureTextEntry={false}
value={company}
placeholder={"Store Name"}
onChangeText={(text)=>setCompany(text)}
/>
<View style={{flexDirection:'row',alignItems:'center'}}>
<Text style={styles.logintxt}>Location</Text>
<View style={{flex:1,flexDirection:'row-reverse'}}>
<CustomSearch placeholder='Search' />
</View>
</View>
<Text style={styles.logintxt}>Store Description</Text>
<CustomInput
secureTextEntry={false}
value={lastName}
placeholder={"Write here..."}
onChangeText={(text)=>setLastName(text)}
/>
<Text style={styles.logintxt}>Store Webpage (optional)</Text>
<CustomInput
secureTextEntry={false}
value={lastName}
placeholder={"example.com"}
onChangeText={(text)=>setLastName(text)}
/>

<Text style={styles.logintxt}>Instragram Link</Text>
<CustomInput
secureTextEntry={false}
value={lastName}
placeholder={""}
onChangeText={(text)=>setLastName(text)}
/>

<Text style={styles.logintxt}>Facebook Link</Text>
<CustomInput
secureTextEntry={false}
value={lastName}
placeholder={""}
onChangeText={(text)=>setLastName(text)}
/>


<Text style={styles.logintxt}>Twitter Link</Text>
<CustomInput
secureTextEntry={false}
value={lastName}
placeholder={""}
onChangeText={(text)=>setLastName(text)}
/>


<View style={{flexDirection:'row',marginTop:10}}>
    <View>
<Text style={{fontWeight:'bold',fontSize:14}}>Upload Store Front image</Text>
<Text style={{fontWeight:'bold',fontSize:13}}>(Required)</Text>
</View>
<View style={{flex:1,flexDirection:"row-reverse",marginRight:10}}>
<View style={{backgroundColor:'#e9e9e9',width:80,height:70,justifyContent:'center',alignItems:'center',borderRadius:10}}>
<Ion onPress={()=>{onlogoUpload()}} style={{fontSize:35,color:'orange'}} name='cloud-upload-outline' />


    </View>
    </View>
    </View>

    <View style={{flexDirection:'row',marginTop:10}}>
    <View>
<Text style={{fontWeight:'bold',fontSize:14}}>Upload Store Menu</Text>
<Text style={{fontWeight:'bold',fontSize:13}}>(Optional)</Text>
</View>
<View style={{flex:1,flexDirection:"row-reverse",marginRight:10}}>
<View style={{backgroundColor:'#e9e9e9',width:80,height:70,justifyContent:'center',alignItems:'center',borderRadius:10}}>
<Ion onPress={()=>{onlogoUpload()}} style={{fontSize:35,color:'orange'}} name='cloud-upload-outline' />


    </View>
    </View>
    </View>

<Text style={styles.logintxt}>Password</Text>
<CustomPasswordInput 
value={password}
placeholder={"*******"}
onChangeText={(text)=>setPassword(text)}/>

<Text style={styles.logintxt}>Confirm Password</Text>
<CustomPasswordInput
value={confirmPassword}
placeholder={"*******"}
onChangeText={(text)=>setConfirmPassword(text)}
/>



<MainButton title='signup' onPress={()=>{onVendorSubmit()}} />
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:15,}}>
<Text style={{color:'gray',fontSize:16}}>Already have an account ! </Text>

<Text onPress={()=>{props.navigation.goBack()}} style={{color:'#ff9933',fontSize:17}}>Login</Text>

    </View>

</View>



</ScrollView>

</View>
</View>



</Modal>
    )

}


const styles=StyleSheet.create({

    container:{
       flex:1,
    },
    
})

export default AddStore