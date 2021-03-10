import React, { Component, useState } from 'react';
import { View,Text,StyleSheet,Image,ScrollView, Modal } from 'react-native';

import  Icon  from 'react-native-vector-icons/Fontisto';
import InviteComponent from '../../../components/InviteComponent';
import { round } from 'react-native-reanimated';
import InviteFriendScreen from './InviteFriendScreen';
import InviteVendorScreen from './InviteVendorScreen';
import LinearGradient from 'react-native-linear-gradient';
const InviteScreen=(props)=>{


    const [isInviteFriendModalActive,setIsInviteFriendModalActive]=useState(false)

    const [isInviteVendorModalActive,setIsInviteVendorModalActive]=useState(false)
    const [invited,setInvited]=useState([{

        name:'John Smith',
        points:23,
        photo:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

    },
    {

        name:'John Smith',
        points:23,
        photo:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

    },{

        name:'John Smith',
        points:23,
        photo:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

    },
    {

        name:'John Smith',
        points:23,
        photo:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

    },
    {

        name:'John Smith',
        points:23,
        photo:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

    },{

        name:'John Smith',
        points:23,
        photo:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

    }
])

const onCloseModal=()=>{

    setIsInviteFriendModalActive(false)
    setIsInviteVendorModalActive(false)

}

    return (
        <View style={styles.container}>

            <View style={styles.header}>

              <Text style={{textAlign:'center',fontSize:22,marginTop:5,}}>Invite</Text>
 
              <Icon style={{fontSize:26,marginLeft:15,position:"absolute",top:10,right:20}} name='bell' />


                </View>

                <LinearGradient colors={['white','#e2e7e8', '#E8E8E8']} style={{marginTop:40}}>
 
        <View style={{flexDirection:"row",marginBottom:20,padding:20}}>
<InviteComponent onPress={()=>{setIsInviteFriendModalActive(true)}} invite="Friend" message="Invite a friend to your reuse network and help prevent further packaging waste"/>
<InviteComponent onPress={()=>{setIsInviteVendorModalActive(true)}} invite="Vendor" message="Invite your favourite vendors to the app to create more reuse opportunities"/>
            </View>

            </LinearGradient>
<View style={{marginTop:0}}>

<View style={{backgroundColor:'#E8E8E8',padding:10,paddingLeft:20}}>
    <Text style={{fontWeight:'bold',fontSize:16}}>You Invited</Text>
    
</View>


  

<ScrollView
showsVerticalScrollIndicator={false}
scrollEventThrottle={10}
style={{marginTop:0,height:"50%",paddingTop:10,backgroundColor:'white'}}
>
{

invited.map((item,i)=>(

    <View key={"rp"+i} style={{flexDirection:'row',margin:10,marginTop:20,marginBottom:20,borderBottomColor:'#D0D0D0',borderBottomWidth:1,paddingBottom:20}}>


<View style={{flex:1,flexDirection:"row",alignItems:'center'}}>
        <Image style={{width:70,height:70,borderRadius:70,}} source={{uri:item.photo}} />

<Text style={{marginLeft:10,fontWeight:'bold',fontSize:16,}}>{item.name}</Text>
</View>


<Text style={{textAlign:'right',fontSize:20,fontWeight:'bold',marginRight:20,paddingTop:20,}}>{item.points}</Text>
  
   <Text style={{textAlign:'right',color:'gray',position:"absolute",bottom:15,right:20,}} >Reuse Points</Text>
 


        </View>

    
    
    ))



}


</ScrollView>

<View style={{right:20,position:"absolute",backgroundColor:'#E8E8E8',margin:10,justifyContent:'center',alignItems:'center',width:110,height:110,borderRadius:110,marginTop:-45}}>
<View style={{backgroundColor:'white',justifyContent:'center',alignItems:'center',width:95,height:95,borderRadius:95}}>
    <Text style={{color:'orange',fontSize:35,}}>216</Text>
<Text style={{color:'black',fontSize:14,textAlign:'center',fontWeight:'bold',marginTop:-5}}>Network{'\n'}Reuses </Text>
</View>
</View>

</View>

  
            

{

isInviteFriendModalActive?<InviteFriendScreen
onBack={()=>onCloseModal()}
/>:null


}


{

isInviteVendorModalActive?<InviteVendorScreen
onBack={()=>onCloseModal()}
/>:null


}




            </View>
    )

}



const styles=StyleSheet.create({
container:
{
    backgroundColor:'white',
}
    
})

export default InviteScreen