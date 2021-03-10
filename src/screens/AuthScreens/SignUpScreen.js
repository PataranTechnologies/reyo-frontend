import React, { Component, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MainButton from '../../components/MainButton'
import SimpleButton from '../../components/SimpleButton'
import CustomInput from '../../components/CustomInput';
import GrayButton from '../../components/GrayButton'
import CustomLoginButton from '../../components/CustomLoginButton';
import CustomPasswordInput from '../../components/CustomPasswordInput'
import { appleAuth } from '@invertase/react-native-apple-authentication';
import SignInButton from '../../components/SignInButton'
import * as Actions from '../../reyuRedux/actions'
import {connect} from 'react-redux'
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-community/google-signin';
import { LoginManager,LoginButton,AccessToken,GraphRequest,GraphRequestManager} from 'react-native-fbsdk';
const SignUpScreen=(props)=>{

   
    const onAppleButtonPress=async()=> {
        
        const appleAuthRequestResponse = await appleAuth.performRequest({
          requestedOperation: appleAuth.Operation.LOGIN,
          requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
        });
      
        const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);
       
        if (credentialState === appleAuth.State.AUTHORIZED) {
          // user is authenticated
        }
      }

    GoogleSignin.configure({

        scopes: [],
        webClientId: '437000312243-su29k0rlfg768eai4coi5tajcmen02d8.apps.googleusercontent.com' ,
        offlineAccess: true, 
        hostedDomain: '', 
        loginHint: '', 
        forceConsentPrompt: true, 
        accountName: '',
        androidClientId:'437000312243-3ul510bvi92pvp79f7loq65r7arj9dn0.apps.googleusercontent.com'
        });
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const onRegister=()=>{
        props.navigation.navigate('RegisterScreen');
    }

    const onSignIn=()=>{


      if(!email || !password)
      {
        alert("Email and Passwork required");
        return;
      } 

        const loginData={
          email,
          password,
          role:props.userType===2?'vendor':'user',
        }

        let data = {
          method: 'POST',
          body: JSON.stringify(loginData),
          headers: {
            'Accept':       'application/json',
            'Content-Type': 'application/json',
          }
        }
        
        fetch('http://192.168.43.212:3000/api/user/login', data)
                .then(response => response.json())  // promise
                .then(json => {
                    console.log(json)   
                  if(json.status===1)
                  {
                  props.setUser(json.data)
                if(props.userType==2)
                {
                  props.navigation.navigate("MainAppVendor")
                }
                else
                {
        props.navigation.navigate("MainApp")
                }           
      }
                  else
                  {
                    alert(json.msg);
                  }          
      
      
      });
      
            


    }
    const onDataFromFaceboo=(error,fbdata)=>{

        console.log(data)

        const data={

          firstname:fbdata.first_name,
          lastName:fbdata.last_name,
          email:fbdata.email,
          device:"Mi redmi note 7",
          signInType:'facebook',
          role:props.userType===2?'vendor':'user',

        }
        
        thirdParty(data)

    }



    const thirdParty=(loginData)=>{

      

      let data = {
        method: 'POST',
        body: JSON.stringify(loginData),
        headers: {
          'Accept':       'application/json',
          'Content-Type': 'application/json',
        }
      }
      
      fetch('http://192.168.43.212:3000/api/user/thirdPartySign', data)
              .then(response => response.json())  // promise
              .then(json => {
                  console.log(json)   
                if(json.status===1)
                {
                props.setUser(json.data)
              
      props.navigation.navigate("MainApp")
                }
                else
                {
                  alert(json.msg);
                }          
    
    
    });
    
    }

    const onGoogleSignIn=signIn = async () => {
        try {
           await GoogleSignin.hasPlayServices();
           const userInfo = await GoogleSignin.signIn();
              console.log('_____userinfo',userInfo.user)

              const data={

                firstname:userInfo.user.givenName,
                lastName:userInfo.user.familyName,
                email:userInfo.user.email,
                device:"Mi redmi note 7",
                signInType:'google',
                role:props.userType===2?'vendor':'user',

              }
              
              thirdParty(data)
             
        } catch (error) {
            console.log(error)
        }
   }

   const onFacebookSignIn=()=>{
    LoginManager.logInWithPermissions(["public_profile", 'email', 'user_friends']).then(
        function(result) {
          if (result.isCancelled) {
            console.log("Login cancelled");
          } else {
              console.log(result);
            console.log(
              "Login success with permissions: " +
                result.grantedPermissions.toString()
            );

            AccessToken.getCurrentAccessToken().then(
                (data) => {
                  const infoRequest = new GraphRequest(
                    '/me?fields=email,first_name,last_name,age_range',
                    null,
                    onDataFromFaceboo
                  );
                  // Start the graph request.
                  new GraphRequestManager().addRequest(infoRequest).start();
                }
              )

          }
        },
        function(error) {
          console.log("Login fail with error: " + error);
        }
      );
   }
 
 
 
    return (
        <View style={styles.container}>

<Text style={{textAlign:'center',fontSize:30,margin:10,}}>LOGO</Text>
            <View style={styles.bottomView}>

                <Text style={styles.welcomeText}>Sign In</Text>
                


<Text></Text>


<Text style={styles.logintxt}>EMAIL</Text>
<CustomInput
secureTextEntry={false}
value={email}
placeholder={"johnSmith@gmail.com"}
onChangeText={(text)=>setEmail(text)}
/>
<Text style={styles.logintxt}>PASSWORD</Text>
<CustomPasswordInput
secureTextEntry={true}
value={password}
placeholder={"*******"}
onChangeText={(text)=>setPassword(text)} />
<Text onPress={()=>props.navigation.navigate("ForgetScreen")} style={styles.forgotPassword}>Forgot Password?</Text>

<SignInButton title='Sign In' onPress={()=>{onSignIn()}} />

{
  props.userType==1?
<View style={styles.authButtonsRow}>

<CustomLoginButton type='facebook' onPress={()=>{onFacebookSignIn()}} />

<CustomLoginButton type='apple' onPress={()=>{onAppleButtonPress()}}/>

<CustomLoginButton  type='google' onPress={()=>{onGoogleSignIn()}}/>


</View>:null
}




<MainButton title='Create an Account' onPress={()=>{onRegister()}}/>
<View style={{margin:3,}}></View>
<SimpleButton title='Continue as Guest' onPress={()=>{props.navigation.navigate("GuestMode")}} />

                </View>


            </View>
    )

}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    bottomView:{

        
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        backgroundColor:'white',
        padding:25,
        paddingBottom:30,
    },
    header:{
        alignSelf:'center',
        fontSize:23,
    },
    text:{
        fontSize:14,
        textAlign:'center',
        margin:10,
        color:'black',
        marginBottom:25,
    },

    welcomeText:{
        fontSize:28,
        fontWeight:'bold',
    },
    loginMessage:{
        fontSize:15,
        color:'#696969',
        marginTop:3,
    },
    authButtonsRow:{
       
        flexDirection:"row",
      marginTop:30,
        flex:1,
        marginBottom:90,
        backgroundColor:'red',
        height:70
    },
    orText:{
        textAlign:'center',
        color:'#696969',
        marginTop:5,
        marginBottom:5,
    },
    logintxt:{
        fontSize:14,

        fontWeight:'bold',
        marginTop:5,
        marginBottom:5,
    },
    forgotPassword:{

        textAlign:"right",
        marginTop:5,
        fontSize:15,
        marginBottom:10,
        color:'gray'
    },
})

const mapStateToProps=(state)=>({
userType:state.userType
})

const mapDispatchToProps=(dispatch)=>({
setUser:(payload)=>dispatch(Actions.setUser(payload))

})

export default connect(mapStateToProps,mapDispatchToProps)(SignUpScreen)