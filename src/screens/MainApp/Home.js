import React, { Component, useState ,useEffect} from 'react';
import { View,Text, StyleSheet, Image, ImagePropTypes,ScrollView,TouchableOpacity } from 'react-native';
import CustomSearch from '../../components/CustomSearch'
import  Icon  from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/Octicons'
import Icon3 from 'react-native-vector-icons/Ionicons'
import MapView,{ Marker,Polyline,PROVIDER_GOOGLE  }  from  'react-native-maps'


import { color } from 'react-native-reanimated';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from 'react-native-geolocation-service';
import { PERMISSIONS, request } from 'react-native-permissions';
import SliderStores from '../../components/SliderStores'
import Store from '../../components/Store';
import StoreDetailsScreen from './StoreDetailsScreen';
import NotificationScreen from './NotificationScreen';
import Store2 from '../../components/Store2';
const Home=(props)=>{

    const [view,setView]=useState(1)
    const [isStoreViewModalActive,setIsStoreModalActive]=useState(false);
    const [selectedStoreObj,setSelectedStoreObj]=useState()
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
    let mapView = React.createRef();

  

    const getLocation = async () => {
        let status = await requestLocationPermisions();
        if (status == 'granted') {
         
            Geolocation.watchPosition(
                (position) => {
                    //console.log('Position: ', position);
                    const { coords: { latitude, longitude } } = position;
                  
                   setRegion({
                        latitude,
                        longitude,
                        latitudeDelta: 0.0143,
                        longitudeDelta: 0.0134,
                    });
                },
                (error) => {
                    // See error code charts below.
                    console.log('** ERRORES: ')
                    console.log(error.code, error.message);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        }
        if (status === 'denied') {
            Alert.alert('Permiso de ubicación denegado', 'Para mejorar la experiencia de usuario es necesario este permiso');
        }

        if (status === 'unavailable' || status === 'blocked') {
            Alert.alert(
                'Active los servicios de ubicación',
                `Para permitir que "${appConfig.displayName}" determine su ubicación.`,
                [
                    { text: "No usar Ubicación", onPress: () => { } },
                ],
            );
        }
    }

    const [isFinalScreenActive,setISFinalScreenActive]=useState(false)
    const requestLocationPermisions = async () => {
        const locationStatus = await request(
            Platform.select({
                android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
                ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
            }));
        return locationStatus;
    }

const [region,setRegion]=useState();




    useEffect(()=>
    {

 getLocation();
  
    },[])

    return (
        <View style={styles.container}>


            <View style={styles.upperHeaderRow}>

                <CustomSearch
                placeholder="Search by Name"
                />

                <Icon style={{fontSize:22,marginLeft:15,}} onPress={()=>{setNotificationScreenActive(true)}} name='bell' />


                <Icon2 style={{fontSize:22,marginLeft:15,}} name='settings'/>



                </View>
{view===1?
<View>
                <View style={{marginTop:20,flexDirection:'column'}}>

<ScrollView
horizontal
showsHorizontalScrollIndicator={false}
scrollEventThrottle={10}

style={{paddingLeft:10,paddingRight:10,}}

>
{

list.map((store,i)=>(

    <SliderStores key={i} store={store} />

))


}

    </ScrollView>



                    </View>


<ScrollView
showsVerticalScrollIndicator={false}
scrollEventThrottle={10}
style={{padding:10,marginTop:20,height:'63%',paddingRight:0}}
>


{

foodlist.map((store,i)=>(

    <Store key={i} onPress={()=>{navTOStore(store.key)}} store={store} />
   
))


}





</ScrollView>


</View>:


<View style={{flex:1}}>


<MapView
      style={styles.container}
      region={region}
      showsUserLocation={true}
    
      showsMyLocationButton={true}
      loadingEnabled
      ref={mapView}
     
    >

<Marker
coordinate={{latitude:region.latitude,longitude:region.longitude}}
onPress={()=>{
    setIsStoreModalActive(true)
    setSelectedStoreObj(foodlist[0])
    }}
>

<Icon3 name='location-sharp' style={{fontSize:40,color:'orange'}} />

    </Marker>


        </MapView>







</View>



}













{
    isStoreModalActive?<StoreDetailsScreen back={()=>{setStoreModalActive(false)}} key={selectedStore} />:null
}

{
    isNotificationScreenActive?<NotificationScreen onBack={()=>{setNotificationScreenActive(false)}} />:null
    
}

{
    view===1?
<TouchableOpacity onPress={()=>{setView(2)}} style={{position:'absolute',bottom:15,backgroundColor:'black',alignSelf:'center',padding:10,borderRadius:30,flexDirection:"row"}}>
<Icon3 style={{fontSize:20,color:'white',marginRight:5}} name='location-sharp' /> 
<Text style={{color:"white"}}>Map View</Text>


    </TouchableOpacity>:
    <TouchableOpacity onPress={()=>{setView(1)}} style={{position:'absolute',bottom:15,backgroundColor:'black',alignSelf:'center',padding:10,borderRadius:30,flexDirection:"row"}}>
<Icon3 style={{fontSize:20,color:'white',marginRight:5}} name='menu' /> 
<Text style={{color:"white"}}>List View</Text>


    </TouchableOpacity>
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

        marginLeft:10,
        marginRight:10,

    },
    


})

export default Home