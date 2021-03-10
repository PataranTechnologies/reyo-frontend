
import React, { Component } from 'react';

import { View,Text,StyleSheet,Image  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const StoreMenu=()=>{


    return (
        <View style={{flex:1,padding:20,}}>


        <Text style={{fontSize:17,fontWeight:'bold'}}>Restaurant's Menu</Text>


<ScrollView
showsVerticalScrollIndicator={false}
scrollEventThrottle={10}
style={{marginTop:10}}
>

{




}


</ScrollView>
       

       


        </View>
    )

}


const styles=StyleSheet.create({

    
})

export default StoreMenu