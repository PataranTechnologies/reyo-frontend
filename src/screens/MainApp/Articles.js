
import React, { Component } from 'react';
import { View,Text,StyleSheet, Modal, ImageBackground, Image,ScrollView  } from 'react-native';
import CustomHeader from '../../navigations/CustomHeader';
import  Icon  from 'react-native-vector-icons/Fontisto';
import Article from '../../components/Article';


const Articles=(props)=>{


    return (
        <Modal
        style={styles.container}
        onRequestClose={()=>{props.onBack()}}
        >

<View style={{flex:1, backgroundColor:"#F0F0F0",}}>

<CustomHeader title={"Articles"} nonNavigationHeader={true} back={props.onBack} navigation={props.navigation} />

<ScrollView
showsHorizontalScrollIndicator={false}
scrollEventThrottle={10}
style={{flex:1,padding:15,paddingTop:0}}
>


<Article />

<Article />


<Article />

    






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

export default Articles