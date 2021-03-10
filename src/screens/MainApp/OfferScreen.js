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
import OfferComponent from '../../components/OfferComponent';
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

                <CustomSearch
                placeholder="Search by Name"
                />

                <Icon style={{fontSize:22,marginLeft:15,}} name='bell' />


                <Icon2 style={{fontSize:22,marginLeft:15,}} name='settings'/>



                </View>




<ScrollView
showsVerticalScrollIndicator={false}
scrollEventThrottle={10}
style={{padding:10,marginTop:20,height:'90%'}}
>


{

offerlist.map((offer,i)=>(

    <OfferComponent key={i} onPress={()=>{navTOOffer(offer.key)}} store={offer} />
   
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

    },
    upperHeaderRow:{

        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:20,
        paddingRight:30,

        marginLeft:10,
        marginRight:10,

    },
    


})

export default OfferScreen