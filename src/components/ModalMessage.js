import React, { Component } from 'react';
import { Modal, View, Text } from 'react-native';
import  MainButton from './MainButton'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { color } from 'react-native-reanimated';
const ModalMessage=(props)=>{
    return (
<Modal
  transparent
onRequestClose={props.close}
>

    <View style={{flex:1,justifyContent:'center',alignContent:'center',padding:20,backgroundColor: 'rgba(52, 52, 52, 0.6)',opacity:1}}> 

<View style={{width:'100%',padding:20,backgroundColor:'#777777'}}>

<View style={{alignSelf:'center',width:120,height:120,borderRadius:120,backgroundColor:'orange',justifyContent:'center',alignItems:'center'}}>
   <Icon name='check' style={{fontSize:60,color:'white'}} />
    </View>

    <Text style={{fontSize:18,textAlign:'center',color:'white',margin:10,fontWeight:'bold'}}>Thank You!</Text>
    <Text style={{fontSize:18,textAlign:'center',color:'white',margin:10,fontWeight:'bold',marginBottom:10}}>{props.message}</Text>

    <MainButton onPress={()=>{props.close()}} title="Ok" />
</View>
        </View>


    </Modal>

    )

}

export default ModalMessage;