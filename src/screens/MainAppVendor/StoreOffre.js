
import React, { Component } from 'react';
import { View,Text,StyleSheet,Image  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import OfferItem from '../../components/OfferItem';


const StoreOffer=()=>{

    var lis=[1,2,3]

    return (
        <View style={{flex:1,padding:20,}}>


            <Text style={{fontSize:17,fontWeight:'bold'}}>Current Offers</Text>


<ScrollView
showsVerticalScrollIndicator={false}
scrollEventThrottle={10}
style={{marginTop:10}}
>

{

lis.map((el)=>{

return <OfferItem />

})


}


    </ScrollView>
           

           


            </View>
    )

}


const styles=StyleSheet.create({

    
})

export default StoreOffer