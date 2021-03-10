
import React, { Component,useState } from 'react';
import { View,Text,StyleSheet, Modal  } from 'react-native';
import CustomHeader from '../../../navigations/CustomHeader';
import CustomInput from '../../../components/CustomInput';
import { TextInput } from 'react-native-gesture-handler';

import MainButton from '../../../components/MainButton'
import  Icon  from 'react-native-vector-icons/Feather';
const InviteFriendScreen=(props)=>{

    const [name,setName]=useState()
    const [email,setMail]=useState();
    return (
        <Modal
        onRequestClose={()=>{props.onBack()}}

        style={styles.container}
        >
    <CustomHeader title="Invite a Friend" nonNavigationHeader={true} back={props.onBack} navigation={props.navigation} />

    <View style={{backgroundColor:'#F0F0F0',flexDirection:'row',padding:10,paddingLeft:20,paddingRight:10,}}>

<Text style={{color:'black',flex:9}}>Invite a Friend to your reuse neywork and help prevent further packaging waste.</Text>

<Icon style={{fontSize:25,color:'#99ccff',marginRight:10,flex:1,}} name='users' />
    </View>


<View style={{padding:25,}}>
            <Text style={styles.logintxt}>Friend's Name</Text>
<CustomInput
secureTextEntry={false}
value={name}
placeholder={"name"}
onChangeText={(text)=>setName(text)}
/>
<Text style={styles.logintxt}>Friend's Email Address</Text>
<CustomInput
secureTextEntry={false}
value={email}
placeholder={"Email"}
onChangeText={(text)=>setEmail(text)} />

            <Text style={{fontWeight:'bold',marginTop:20,}}>Note</Text>
<TextInput 
multiline={true}
style={{color:'gray', fontSize:15,marginTop:10,marginBottom:10,borderBottomColor:"gray",borderBottomWidth:1,paddingBottom:10,}} value={"I'ev joined ******** the app for packaging reuse and refilling .Come and join in and help prevent packaging waste!"} />
    
<MainButton title="Send Invie" onPress={()=>{}} />

<View style={{padding:20,borderRadius:20,backgroundColor:'#F0F0F0',marginTop:20,}}>
<Text style={{fontWeight:'bold'}}>Did you Know?</Text>
<Text>
  The more users you invite the bigger the ptential impact you can have on saving the environment?{'\n'}{'\n'}
  Invite friend to encourage more reuse action .if they invite your network becomes larger .you can see the increased impact your invite has had on preventing packaging waste in your <Text style={{fontWeight:'bold'}}>network</Text>.
</Text>
    </View>

</View>



            </Modal>
    )

}


const styles=StyleSheet.create({

    container:{
        flex:1,
    },logintxt:{
        fontSize:14,

        fontWeight:'bold',
        marginTop:5,
        marginBottom:5,
    },
    
})

export default InviteFriendScreen