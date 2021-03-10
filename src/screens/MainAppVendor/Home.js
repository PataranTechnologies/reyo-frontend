import React, { Component, useState ,useEffect} from 'react';
import { View,Text, StyleSheet, Image, ImagePropTypes,ScrollView,TouchableOpacity } from 'react-native';
import CustomSearch from '../../components/CustomSearch'
import  Icon  from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/Octicons'
import Icon3 from 'react-native-vector-icons/Ionicons'
import MapView,{ Marker,Polyline,PROVIDER_GOOGLE  }  from  'react-native-maps'
import ModalMessage from '../../components/ModalMessage'

import { color } from 'react-native-reanimated';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from 'react-native-geolocation-service';
import { PERMISSIONS, request } from 'react-native-permissions';
import SliderStores from '../../components/SliderStores'
import VendorsStore from '../../components/VendorsStore';
import StoreDetailsScreen from './StoreDetailsScreen';
import NotificationScreen from './NotificationScreen';
import Store2 from '../../components/Store2';
import AddStore from './AddStore';
const Home=(props)=>{

  
    const [isStoreViewModalActive,setIsStoreModalActive]=useState(false);
    const [selectedStoreObj,setSelectedStoreObj]=useState()
    const [isAddStoreModalActive,setIsAddStoreModalActive]=useState(false)
    const [messageModal,setMessageModal]=useState(false);

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



    const [foodlist,setFoodList]=useState([{

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

    const [isStoreModalActive,setStoreModalActive]=useState(false)
    const [selectedStore,setSelectedStore]=useState();

    const [isNotificationScreenActive,setNotificationScreenActive]=useState();

    const navTOStore=(key)=>{




        setSelectedStore(key);

        setStoreModalActive(true)



    }
   
    

    useEffect(()=>
    {

 
  
    },[])

    return (
        <View style={styles.container}>


            <View style={styles.upperHeaderRow}>

                <Text style={{textAlign:'center',fontSize:18}}>
                    My Store
                    </Text>

<View style={{position:'absolute',right:10,flexDirection:'row'}}>
                <Icon style={{fontSize:25,marginLeft:15,}} onPress={()=>{setNotificationScreenActive(true)}} name='bell' />


                <Icon2 style={{fontSize:25,marginLeft:15,fontWeight:'bold'}} onPress={()=>{setIsAddStoreModalActive(true)}} name='plus'/>

</View>

            </View>


                

<ScrollView
showsVerticalScrollIndicator={false}
scrollEventThrottle={10}
style={{padding:10,flex:1,paddingRight:0,marginTop:20}}
>


{

foodlist.map((store,i)=>(

    <VendorsStore key={i} onPress={()=>{navTOStore(store.key)}} store={store} />
   
))


}


</ScrollView>



{
    messageModal?<ModalMessage close={()=>{setMessageModal(false)}} />:null
}
{
    isAddStoreModalActive?<AddStore onBack={()=>{}} />:null
}

{
    isStoreModalActive?<StoreDetailsScreen back={()=>{setStoreModalActive(false)}} key={selectedStore} />:null
}

{
    isNotificationScreenActive?<NotificationScreen onBack={()=>{setNotificationScreenActive(false)}} />:null
    
}



{

isStoreViewModalActive?<Store2 store={selectedStoreObj} onBack={()=>setIsStoreModalActive(false)}></Store2>:null

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

export default Home