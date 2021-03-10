import React, { Component,useState } from 'react';
import { View, StyleSheet,Text, ImagePropTypes } from 'react-native';
import CustomInput from '../../components/CustomInput';
import { ScrollView } from 'react-native-gesture-handler';
import MainButton from '../../components/MainButton'
import CustomHeader from '../../navigations/CustomHeader';
import DropDownPicker from 'react-native-dropdown-picker';
import CustomPasswordInput from '../../components/CustomPasswordInput'
import EmailVerificationScreen from './EmailVerificationScreen';
import ImagePicker from 'react-native-image-picker'
import TextInputMask from 'react-native-text-input-mask';
import PhoneInput from 'react-native-phone-input';
//import DeviceInfo from 'react-native-device-info';
import * as Actions from '../../reyuRedux/actions'
import Ion from 'react-native-vector-icons/Ionicons'
import {connect} from 'react-redux'

const formats = {
    "52": {
      placeholder: '000 000 0000',
      mask: "[000] [000] [0000]",
      size: 10,
    },
    "506": {
      placeholder: '0000 0000',
      mask: "[0000] [0000]",
      size: 8,
    },
    "1": {
      placeholder: '000 000 0000',
      mask: "[000] [000] [0000]",
      size: 10,
    }
  }

  

const RegisterScreen=(props)=>{
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
 
    const [country, setCountryCode] = React.useState('506');
    let ageList=[]
    for (var i=1;i<=100;i++)
    {
        
        ageList.push({
            label:i.toString(),
            value:i.toString(),
        });
    }

    const onlogoUpload=()=>{
        const options = {
            noData: true,
          }
          ImagePicker.launchImageLibrary(options, response => {
            if (response.uri) {
            setPhoto(response)
            }
          })
    }

    const onSubmit=()=>{

        if(!firstname || !lastName || !email || !password || !confirmPassword)
        {
            alert("Please Fill all the fields")
            return;
        }

        if(password!==confirmPassword)
        {
            alert("Password Does not Match");
            return;
        }


        const regData={
            firstname,
            lastName,
           password,
           confirmPassword,
           age,
            email,
            device:"Mi redmi note 7",
            
          }
  
          let data = {
            method: 'POST',
            body: JSON.stringify(regData),
            headers: {
              'Accept':       'application/json',
              'Content-Type': 'application/json',
            }
          }
          
          fetch('http://192.168.43.212:3000/api/user/register', data)
                  .then(response => response.json())  // promise
                  .then(json => {
                    console.log(json);
                    
                    if(json.success==true)
                    {
                    setVerifyModalActive(true)  
                    }  
                    else
                    {
                        alert('Failed to Register User,Error:-'+json.msg.msg);
                    }
                }).catch(err=>console.log(err));
        
    }



    const onVendorSubmit=()=>{

        if(!firstname || !lastName || !email || !password || !confirmPassword || !company || !vendorId || !phoneNumber)
        {
            alert("Please Fill all the fields")
            return;
        }

        if(password!==confirmPassword)
        {
            alert("Password Does not Match");
            return;
        }


        const regData={
            companyname:company,
            firstname:firstname,
            lastName:lastName,
            email,
            logo:photo,
            password,
            confirmPassword,
            vendorId,
            countryCode:country,
            phoneNumber:phoneNumber,
            device:"Mi redmi note 7",
            
          }
  
          let data = {
            method: 'POST',
            body: JSON.stringify(regData),
            headers: {
              'Accept':       'application/json',
              'Content-Type': 'application/json',
            }
          }
          
          fetch('http://192.168.43.212:3000/api/user/vendor/register', data)
                  .then(response => response.json())  // promise
                  .then(json => {
                    console.log(json);
                    
                    if(json.success==true)
                    {
                    setVerifyModalActive(true)  
                    }  
                    else
                    {
                        alert('Failed to Register User,Error:-'+json.msg.msg);
                    }
                }).catch(err=>console.log(err));
            }




    const onOk=()=>{
        setVerifyModalActive(false)

        props.navigation.navigate("LocationScreen");
    }

    let phone=React.createRef();
    return (

        <View style={styles.container}>
            <CustomHeader title="Register" navigation={props.navigation} />
<ScrollView style={{padding:20,paddingBottom:0,marginBottom:10}}>
{props.userType===1?<View>
<Text style={styles.logintxt}>First Name</Text>
<CustomInput
secureTextEntry={false}
value={firstname}
placeholder={"Name"}
onChangeText={(text)=>setFirstName(text)}
/>
<Text style={styles.logintxt}>Last Name</Text>
<CustomInput
secureTextEntry={false}
value={lastName}
placeholder={"Last Name"}
onChangeText={(text)=>setLastName(text)}
/>

<Text style={styles.logintxt}>E-Mail</Text>
<CustomInput
secureTextEntry={false}
value={email}
placeholder={"johnSmith@gmail.com"}
onChangeText={(text)=>setEmail(text)}
/>

<Text style={styles.logintxt}>Age Group</Text>
<View>
<DropDownPicker
    items={ageList}
    defaultValue={"18"}
    containerStyle={{height: 50}}
    style={{backgroundColor: 'white'}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    onChangeItem={item =>setAge(item.value)}
/>
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


<MainButton title='signup' onPress={()=>{onSubmit()}} />


<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:15,}}>
<Text style={{color:'gray',fontSize:16}}>Already have an account ! </Text>

<Text onPress={()=>{props.navigation.goBack()}} style={{color:'#ff9933',fontSize:17}}>Login</Text>

    </View>
</View>:

<View style={{marginBottom:30}}>
<Text style={{fontWeight:'bold',fontSize:30,marginBottom:10}}>Sign Up</Text>

<Text style={styles.logintxt}>Company Name</Text>
<CustomInput
secureTextEntry={false}
value={company}
placeholder={"Company"}
onChangeText={(text)=>setCompany(text)}
/>
<Text style={styles.logintxt}>First Name</Text>
<CustomInput
secureTextEntry={false}
value={firstname}
placeholder={"Name"}
onChangeText={(text)=>setFirstName(text)}
/>
<Text style={styles.logintxt}>Last Name</Text>
<CustomInput
secureTextEntry={false}
value={lastName}
placeholder={"Last Name"}
onChangeText={(text)=>setLastName(text)}
/>

<Text style={styles.logintxt}>E-Mail</Text>
<CustomInput
secureTextEntry={false}
value={email}
placeholder={"johnSmith@gmail.com"}
onChangeText={(text)=>setEmail(text)}
/>
<Text style={styles.logintxt}>Phone Number</Text>
<View style={styles.row}>
            <View style={[styles.phoneCodeContainer,{borderBottomColor:'lightgray',borderBottomWidth:1,marginLeft:-20}]}>
              <PhoneInput
                ref={(ref) => { phone = ref; }}
                initialCountry='cr'
                onPressFlag={() => { }}
                style={{ width: 70,marginLeft:-10, }}
                onChangePhoneNumber={(number) => {
                   setCountryCode(number);
                  
                }}
                textStyle={styles.textInputStyle}
                textProps={{ maxLength: 4 }}
                value={'+91'}
              />
            </View>
            <View style={{ marginLeft:0, flex: 1 }}>
            <CustomInput
secureTextEntry={false}
value={phoneNumber}
placeholder={""}
onChangeText={(text)=>setPhoneNumber(text)}
/>
            </View>
          </View>

<Text style={styles.logintxt}>Vendor Id</Text>
<CustomInput
secureTextEntry={false}
value={vendorId}
placeholder={""}
onChangeText={(text)=>setVendorId(text)}
/>
<View style={{flexDirection:'row',marginTop:10}}>
    <View>
<Text style={{fontWeight:'bold',fontSize:14}}>Upload Logo</Text>
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



}


</ScrollView>

{
    verifyModalActive?<EmailVerificationScreen
    onPressOk={()=>onOk()}
    />:null
}
            </View>
    )
}
const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'white',
    },
    logintxt:{
        fontSize:14,

        fontWeight:'bold',
        marginTop:5,
        marginBottom:5,
    },
    phoneCodeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 46,
        paddingHorizontal: 25,
      
        borderRadius: 25,
        
      },
      textInputStyle: {
        color: 'black', 
        fontSize: 16
      },
      row: { 
        flexDirection: 'row', 
        alignItems: 'center' 
      },
      text: { 
        fontFamily: 'Sarabun-Regular',
        color: 'black',
        fontSize: 16,
        marginRight: 10
      }
})


const mapStateToProps=(state)=>({
    userType:state.userType
    })
    
    const mapDispatchToProps=(dispatch)=>({
    setUser:(payload)=>dispatch(Actions.setUser(payload))
    
    })

export default connect(mapStateToProps,mapDispatchToProps)(RegisterScreen);