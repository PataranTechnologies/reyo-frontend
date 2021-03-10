import React, { Component ,useState} from 'react';
import { View, StyleSheet, Text, Modal } from 'react-native';
import CustomHeader from '../../navigations/CustomHeader';
import CustomInput from '../../components/CustomInput';
import { TextInput } from 'react-native-gesture-handler';
import MainButton from '../../components/MainButton'
import {connect} from 'react-redux'

const ForgetPassword=(props)=>{

    const [email,setEmail]=useState();

    const [isResetModalActive,setIsResetModalActive]=useState();

    const onSubmit=()=>{

        if(!email)
        {
            alert("Email Required");
        }

        const loginData={
            email,
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
          
          fetch('http://192.168.43.212:3000/api/user/forgotpassword/gettoken', data)
                  .then(response => response.json())  
                  .then(json => {
                      console.log(json)   
                    if(json.status===1)
                    {
                        setIsResetModalActive(true);
                    }
                    else
                    {
                      alert(json.msg);
                    }          
        
        
        });
        

        
    }
    return (

        <View style={{flex:1,backgroundColor:'white',}}>


            <CustomHeader title='Forget Password' navigation={props.navigation} />


            <View style={styles.container}>


    <Text style={styles.heading}>Enter Your Email Id to Find{'\n'}Account</Text>

    <Text style={styles.logintxt}>E-Mail</Text>

<TextInput
value={email}
onChangeText={(text)=>setEmail(text)}
placeholder={"example@gmail.com"}
style={styles.input} />


<MainButton title="Submit" onPress={()=>{onSubmit()}} />


                </View>



{
isResetModalActive?<Modal 
onRequestClose={()=>{setIsResetModalActive(false)}}
transparent={true}
animationType="fade"
backgroundColor='black'
>

    <View style={styles.modalBackground}>

    <CustomHeader title='Forget Password' navigation={props.navigation} />



<View style={styles.modalInnerContainer}>


    
<Text style={styles.text}>A LInk to Reset Your Password{'\n'}has been sent to your registered{'\n'}email account</Text>


<MainButton title='OK' onPress={()=>setIsResetModalActive(false)} />

    </View>

</View>
    </Modal>:null

}

            </View>

    )

}

const styles=StyleSheet.create({

    container:{
        flex:1,
       justifyContent:'center',
       padding:30,
    
    },
    logintxt:{
        fontSize:20,

      
        marginTop:5,
        marginBottom:5,
    },
    heading:{
        textAlign:'center',
        fontSize:20,
        marginBottom:20,

    },
    input:{

        borderBottomColor:'gray',
        borderBottomWidth:1,
        padding:5,
        marginBottom:20,

    },

    modalInnerContainer:{
        backgroundColor:'white',
        width:'90%',
        flex:1,
       borderRadius:20,
       justifyContent:'center',
       alignItems:'center',
       alignSelf:'center'
    },
    modalBackground: {
        flex: 1,
       
    flexDirection: 'column',
        backgroundColor: 'white'
      },
      text:{
          margin:10,
          marginTop:30,
          textAlign:"center",
          fontSize:18,
      },

})


const mapStateToProps=(state)=>({
    userType:state.userType
    })
    
    const mapDispatchToProps=(dispatch)=>({
    setUser:(payload)=>dispatch(Actions.setUser(payload))
    
    })
    
    export default connect(mapStateToProps,mapDispatchToProps)(ForgetPassword)