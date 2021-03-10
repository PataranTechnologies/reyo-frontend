import React, { Component, useState } from 'react';
import { View,Text, StyleSheet, Image, ImagePropTypes } from 'react-native';
import CustomSearch from '../../components/CustomSearch'
import  Icon  from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/Octicons'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

import SliderStores from '../../components/SliderStores'
import Store from '../../components/Store';
import StoreDetailsScreen from './StoreDetailsScreen';
import OfferComponentVendor from '../../components/OfferComponentVendor';
import OfferPage from './OfferPage';
const OfferScreen=(props)=>{

    const [list,setList]=useState([{

        name:"Bombay Balti",
        openTime:"09:00",
        closingTime:"20:00",
        style:'Indian',
        type:"Vegitarian",
        address:'i27 waterloo Road,SWI 6tf',
        storeLogo:'https://www.logodesign.net/logo/fruits-and-vegetable-in-shopping-cart-with-stars-6047ld.png?size=2&industry=grocery-shop',
        foodImage:'https://www.thespruceeats.com/thmb/UMT0Jx65qwNd0wxGdPk8nED3FBo=/2000x1500/filters:fill(auto,1)/GettyImages-1042998066-518ca1d7f2804eb09039e9e42e91667c.jpg',



    },{

        name:"Bombay Balti",
        openTime:"09:00",
        closingTime:"20:00",
        style:'Indian',
        type:"Vegitarian",
        address:'i27 waterloo Road,SWI 6tf',
        storeLogo:'https://www.logodesign.net/logo/fruits-and-vegetable-in-shopping-cart-with-stars-6047ld.png?size=2&industry=grocery-shop',
        foodImage:'https://www.thespruceeats.com/thmb/UMT0Jx65qwNd0wxGdPk8nED3FBo=/2000x1500/filters:fill(auto,1)/GettyImages-1042998066-518ca1d7f2804eb09039e9e42e91667c.jpg',



    },
    {

        name:"Bombay Balti",
        openTime:"09:00",
        closingTime:"20:00",
        style:'Indian',
        type:"Vegitarian",
        address:'i27 waterloo Road,SWI 6tf',
        storeLogo:'https://www.logodesign.net/logo/fruits-and-vegetable-in-shopping-cart-with-stars-6047ld.png?size=2&industry=grocery-shop',
        foodImage:'https://www.thespruceeats.com/thmb/UMT0Jx65qwNd0wxGdPk8nED3FBo=/2000x1500/filters:fill(auto,1)/GettyImages-1042998066-518ca1d7f2804eb09039e9e42e91667c.jpg',



    },
    {

        name:"Bombay Balti",
        openTime:"09:00",
        closingTime:"20:00",
        style:'Indian',
        type:"Vegitarian",
        address:'i27 waterloo Road,SWI 6tf',
        storeLogo:'https://www.logodesign.net/logo/fruits-and-vegetable-in-shopping-cart-with-stars-6047ld.png?size=2&industry=grocery-shop',
        foodImage:'https://www.thespruceeats.com/thmb/UMT0Jx65qwNd0wxGdPk8nED3FBo=/2000x1500/filters:fill(auto,1)/GettyImages-1042998066-518ca1d7f2804eb09039e9e42e91667c.jpg',



    }])



    const [offerlist,setOfferList]=useState([{

        name:"Jade Dragon",
        openTime:"09:00",
        closingTime:"20:00",
        item:'Noodles',
        type:"Vegitarian",
        address:'i27 waterloo Road,SWI 6tf',
        storeLogo:'https://www.logodesign.net/logo/fruits-and-vegetable-in-shopping-cart-with-stars-6047ld.png?size=2&industry=grocery-shop',
        foodImage:'https://www.thespruceeats.com/thmb/UMT0Jx65qwNd0wxGdPk8nED3FBo=/2000x1500/filters:fill(auto,1)/GettyImages-1042998066-518ca1d7f2804eb09039e9e42e91667c.jpg',



    },
    {

        name:"Jade Dragon",
        openTime:"09:00",
        closingTime:"20:00",
        item:'Noodles',
        type:"Vegitarian",
        address:'i27 waterloo Road,SWI 6tf',
        storeLogo:'https://www.logodesign.net/logo/fruits-and-vegetable-in-shopping-cart-with-stars-6047ld.png?size=2&industry=grocery-shop',
        foodImage:'https://www.thespruceeats.com/thmb/UMT0Jx65qwNd0wxGdPk8nED3FBo=/2000x1500/filters:fill(auto,1)/GettyImages-1042998066-518ca1d7f2804eb09039e9e42e91667c.jpg',



    },
    {

        name:"Jade Dragon",
        openTime:"09:00",
        closingTime:"20:00",
        item:'Noodles',
        type:"Vegitarian",
        address:'i27 waterloo Road,SWI 6tf',
        storeLogo:'https://www.logodesign.net/logo/fruits-and-vegetable-in-shopping-cart-with-stars-6047ld.png?size=2&industry=grocery-shop',
        foodImage:'https://www.thespruceeats.com/thmb/UMT0Jx65qwNd0wxGdPk8nED3FBo=/2000x1500/filters:fill(auto,1)/GettyImages-1042998066-518ca1d7f2804eb09039e9e42e91667c.jpg',



    },
    {

        name:"Jade Dragon",
        openTime:"09:00",
        closingTime:"20:00",
        item:'Noodles',
        type:"Vegitarian",
        address:'i27 waterloo Road,SWI 6tf',
        storeLogo:'https://www.logodesign.net/logo/fruits-and-vegetable-in-shopping-cart-with-stars-6047ld.png?size=2&industry=grocery-shop',
        foodImage:'https://www.thespruceeats.com/thmb/UMT0Jx65qwNd0wxGdPk8nED3FBo=/2000x1500/filters:fill(auto,1)/GettyImages-1042998066-518ca1d7f2804eb09039e9e42e91667c.jpg',



    },{

        name:"Jade Dragon",
        openTime:"09:00",
        closingTime:"20:00",
        item:'Noodles',
        type:"Vegitarian",
        address:'i27 waterloo Road,SWI 6tf',
        storeLogo:'https://www.logodesign.net/logo/fruits-and-vegetable-in-shopping-cart-with-stars-6047ld.png?size=2&industry=grocery-shop',
        foodImage:'https://www.thespruceeats.com/thmb/UMT0Jx65qwNd0wxGdPk8nED3FBo=/2000x1500/filters:fill(auto,1)/GettyImages-1042998066-518ca1d7f2804eb09039e9e42e91667c.jpg',



    }])

    const [isOfferModalActive,setOfferModalActive]=useState(false)
    const [selectedOffer,setSelectedOffer]=useState();
    const navTOOffer=(key)=>{





        setSelectedOffer(key);

        setOfferModalActive(true)



    }


    return (
        <View style={styles.container}>


<View style={styles.upperHeaderRow}>

<Text style={{textAlign:'center',fontSize:18}}>
    My Offers
    </Text>

<View style={{position:'absolute',right:10,flexDirection:'row'}}>
<Icon style={{fontSize:25,marginLeft:15,}} onPress={()=>{setNotificationScreenActive(true)}} name='bell' />


<Icon2 style={{fontSize:25,marginLeft:15,fontWeight:'bold'}} name='plus'/>

</View>

</View>




<ScrollView
showsVerticalScrollIndicator={false}
scrollEventThrottle={10}
style={{padding:10,marginTop:10,flex:1}}
>


{

offerlist.map((offer,i)=>(

    <OfferComponentVendor key={i} onPress={()=>{navTOOffer(offer.key)}} store={offer} />
   
))


}





</ScrollView>


{
    isOfferModalActive?<OfferPage onBack={()=>{setOfferModalActive(false)}} key={selectedOffer} />:null
}
            </View>
    )

}


const styles=StyleSheet.create({


    container:{
flex:1
    },
    upperHeaderRow:{

        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:20,
        paddingRight:30,
marginTop:10,
        marginLeft:10,
        marginRight:10,

    },
    


})

export default OfferScreen