import React, { Component } from 'react';
import { View,Text, StyleSheet, Image ,TouchableOpacity, Modal, ImageBackground} from 'react-native';
import AboutScreen from '../screens/MainApp/AboutScreen';

const Store2=({store,onBack})=>{

    return (

        <Modal 
        onRequestClose={()=>{onBack()}}
        transparent={true}
        style={{flex:1,}}
        >
        <View onPress={()=>onPress()} style={styles.modalBackground}>
<View style={styles.activityIndicatorWrapper}>

<ImageBackground  style={{height:180,width:'100%',borderTopLeftRadius:20}} source={{uri:store.foodImage}}>
<View style={{position:"absolute",bottom:5,flexDirection:'row',left:10}}>
       <Image style={{width:60,height:60,borderRadius:60,backgroundColor:'orange',marginRight:20}} />
        <View >
        <Text style={{color:"white",fontWeight:'bold',fontSize:19,}}>{store.name}</Text>
        
        <Text style={{color:'white',fontSize:14,flexShrink: 1,marginBottom:5}}>Address:{store.address}</Text>
</View>


</View>
</ImageBackground>
                <View style={{flexDirection:'row',borderRadius:10,alignItems:'center',paddingLeft:10}}>
        
                    <View style={{flexDirection:"column",margin:10,marginLeft:-10,marginRight:10,}}>
        
        
        <Text style={{color:'orange',fontSize:14,}}>Opening times:</Text>
        
        <Text style={{color:'gray',fontSize:14,marginTop:2,}}>{store.openTime}-{store.closingTime}</Text>
        <View style={{flexDirection:"row",alignItems:'center'}}>
    <View style={{width:10,height:10,borderRadius:20,backgroundColor:'#99ccff',marginRight:10}}></View>
    <Text style={{color:'black',marginTop:5,fontSize:13,marginBottom:5,}}>{"Noodles"}</Text>
    </View>
    
    <View style={{flexDirection:"row",alignItems:'center'}}>
    <View style={{width:10,height:10,borderRadius:20,backgroundColor:'#99ccff',marginRight:10}}></View>
    <Text style={{color:'black',fontSize:13,marginBottom:5,}}>{"Vegetarian"}</Text>
    </View>
    
                        </View>
        
                        <View style={{backgroundColor:'#F0F0F0',margin:5,width:60,height:60,borderRadius:60,padding:7,borderRadius:150,justifyContent:'center',alignItems:'center'}}>
        
        <Text style={{color:'orange',}}>1.3</Text>
        <Text style={{color:'black',}}>Miles</Text>
        
        </View>
        
        
        <View style={{backgroundColor:'#F0F0F0',margin:5,width:60,height:60,borderRadius:60,padding:7,borderRadius:150,justifyContent:'center',alignItems:'center'}}>
        
        <Text style={{color:'orange',}}>12</Text>
        <Text style={{color:'black',}}>Mins</Text>
        
        </View>


        <View style={{backgroundColor:'orange',margin:5,marginLeft:10,width:70,height:70,borderRadius:70,padding:7,borderRadius:150,justifyContent:'center',alignItems:'center'}}>
        
        <Text style={{color:'white',fontSize:25,fontWeight:'bold'}}>Go!</Text>
        
        
        </View>
        
        
        
         
                    </View>
        
        
                    
        
        
        
        
        </View>
                </View>

                </Modal>
    )

}
const styles=StyleSheet.create({

    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
      },

      activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        borderRadius:20,
        borderRadius: 30,
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        margin:30,
        width:'90%',
        elevation:3,

      },
})
export default Store2