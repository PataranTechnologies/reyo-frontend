
import React, { Component,useState } from 'react';
import { View,Text,StyleSheet, Modal, ImageBackground  } from 'react-native';
import CustomHeader from '../../navigations/CustomHeader';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/Fontisto';
import HistoryHeader from './HistoryHeader';
import ReuseItems from '../../components/ReuseItems';
import ReuseFilter from './ReuseFilter'

const MyReuseHistoryScreen=(props)=>{


    const [isFilterScreenActive,setIsFilterScreenActive]=useState(false)
    


    const [list,setList]=useState([{

        name:"Jade Dragon",
        for:"Cup/Mug",
        on:'2 Aug 20 - 12:30PM',
        address:'i27 waterloo Road,SWI 6tf',
        storeLogo:'https://www.logodesign.net/logo/fruits-and-vegetable-in-shopping-cart-with-stars-6047ld.png?size=2&industry=grocery-shop',
       

    },
    {

        name:"Jade Dragon",
        for:"Cup/Mug",
        on:'2 Aug 20 - 12:30PM',
        address:'i27 waterloo Road,SWI 6tf',
        storeLogo:'https://www.logodesign.net/logo/fruits-and-vegetable-in-shopping-cart-with-stars-6047ld.png?size=2&industry=grocery-shop',
       

    },
    {

        name:"Jade Dragon",
        for:"Cup/Mug",
        on:'2 Aug 20 - 12:30PM',
        address:'i27 waterloo Road,SWI 6tf',
        storeLogo:'https://www.logodesign.net/logo/fruits-and-vegetable-in-shopping-cart-with-stars-6047ld.png?size=2&industry=grocery-shop',
       

    },
    {

        name:"Jade Dragon",
        for:"Cup/Mug",
        on:'2 Aug 20 - 12:30PM',
        address:'i27 waterloo Road,SWI 6tf',
        storeLogo:'https://www.logodesign.net/logo/fruits-and-vegetable-in-shopping-cart-with-stars-6047ld.png?size=2&industry=grocery-shop',
       

    },
    {

        name:"Jade Dragon",
        for:"Cup/Mug",
        on:'2 Aug 20 - 12:30PM',
        address:'i27 waterloo Road,SWI 6tf',
        storeLogo:'https://www.logodesign.net/logo/fruits-and-vegetable-in-shopping-cart-with-stars-6047ld.png?size=2&industry=grocery-shop',
       

    }

])


    return (
        <Modal
        style={styles.container}
        onRequestClose={()=>{props.onBack()}}
        >

<View style={{flex:1, backgroundColor:"#f4f4f4",}}>

<HistoryHeader title={"Your Reuse History"} onFilterPress={()=>{setIsFilterScreenActive(true)}} nonNavigationHeader={true} back={props.onBack} navigation={props.navigation} />

<ScrollView
showsHorizontalScrollIndicator={false}
scrollEventThrottle={10}
style={{flex:1,paddingTop:0,marginTop:-10}}
>
<View style={{height:10,backgroundColor:'white',marginTop:0}}></View>
    
<View style={{backgroundColor:'#e7e7e7',padding:10,paddingLeft:20,marginTop:40,marginBottom:40,height:50,justifyContent:'center'}}>


    <Text style={{fontWeight:'bold',fontSize:15}}>Total Reuse</Text>


    <View style={{position:'absolute',right:30,backgroundColor:'orange',width:110,height:110,borderRadius:110,justifyContent:'center',alignItems:'center',flex:2,marginTop:-30}}>
   <View style={{justifyContent:'center',alignItems:'center'}}>
    <Text style={{color:'white',fontWeight:'bold',fontSize:40}}>{"10"}</Text>
    <Text style={{color:'white',fontWeight:'bold',marginTop:-8,fontSize:16}}>{"Mugs"}</Text>
        
        </View>
            </View>


    </View>


<View style={{padding:10,paddingTop:0,marginRight:-10}}>
    {

list.map((item,i)=>(

    <ReuseItems key={i} onPress={()=>{navTOStore(store.key)}} reuseItem={item} />
   
))


}


</View>





</ScrollView>


</View>

{

    isFilterScreenActive?<ReuseFilter onBack={()=>{setIsFilterScreenActive(false)}} />:null
}

</Modal>
    )

}


const styles=StyleSheet.create({

    container:{
       flex:1,
    },
    
})

export default MyReuseHistoryScreen