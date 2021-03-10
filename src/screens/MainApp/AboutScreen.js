
import React, { Component } from 'react';
import { View,Text,StyleSheet, Modal, ImageBackground  } from 'react-native';
import CustomHeader from '../../navigations/CustomHeader';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/Fontisto';


const AboutScreen=(props)=>{


    return (
        <Modal
        style={styles.container}
        onRequestClose={()=>{props.onBack()}}
        >

<View style={{flex:1, backgroundColor:"#F0F0F0",}}>

<CustomHeader title={"About Us"} nonNavigationHeader={true} back={props.onBack} navigation={props.navigation} />

<ScrollView
showsHorizontalScrollIndicator={false}
scrollEventThrottle={10}
style={{flex:1,padding:20}}
>

<Text style={{fontWeight:'bold',fontSize:18,marginBottom:10,}}>

What is *******?</Text>
<Text style={{fontSize:20,marginBottom:20}}>
******* is a packaging reuse and
achievement app that helps you
locate sustainable vendors and stores
where reusing or refilling packaging is
possible.
</Text>
<Text style={{fontSize:20,marginBottom:20}}>
Each vendor is a Reuse Opportunity
where you can use your mug, bottle,
lunchbox or container for reusing and
refilling anything!
</Text>
<Text style={{fontSize:20,marginBottom:20}}>
Want to claim a reuse? Scan a vendors
QR code to claim a Reuse Action point
to increase your points by 1.
</Text>
<Text style={{fontSize:20,marginBottom:20}}>
The more you claim or users you invite
the more badges and achievements
you earn as thanks for preventing
packaging waste and helping save the
environment!

</Text>


<Text style={{fontSize:20,marginBottom:20}}>
Know what you're looking for? Search
o filter vendors by category, cuisine or
non-food.
</Text>








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

export default AboutScreen