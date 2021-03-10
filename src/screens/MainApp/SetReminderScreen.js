
import React, { Component, useState } from 'react';
import { View,Text,StyleSheet, Modal, ImageBackground,Picker, Image,ScrollView,TouchableOpacity  } from 'react-native';
import CustomHeader from '../../navigations/CustomHeader';
import  Icon  from 'react-native-vector-icons/Fontisto';
import MainButton from '../../components/MainButton';
import DropdownMenu from 'react-native-dropdown-menu';
import DropDownPicker from 'react-native-dropdown-picker';
import OrangeButton from  '../../components/OrangeButon'
const SetRemainderScreen=(props)=>{


    const [hour,setHour]=useState("0")
    const [minutes,setMinutes]=useState("0")
    var data = [["Java", "JavaScript", "PHP","C"]];


    const hours=[]

    let min=[]
    
    for (var i=0;i<=23;i++)
    {
        hours.push(`${i}`)
    }

    for(var i=0;i<=59;i++)
    {
        min.push(`${i}`);
    }



    return (
        <Modal
        style={styles.container}
        onRequestClose={()=>{props.onBack()}}
        >

<View style={{flex:1, backgroundColor:"white",}}>

<CustomHeader title={"Set Remainder"} nonNavigationHeader={true} back={props.onBack} navigation={props.navigation} />

<ScrollView
showsHorizontalScrollIndicator={false}
scrollEventThrottle={10}
style={{flex:1,}}
>


<View style={{padding:30,paddingTop:10,paddingBottom:20,flexDirection:"row",backgroundColor:'#f5f5f5'}}>
<View style={{flex:7}}> 

    <Text style={{fontSize:15,fontWeight:'bold',marginBottom:3,color:"#626262"}}>Set Remainders</Text>
    <Text style={{fontSize:11,color:'#7d7d7d'}}>Keep forgetting your reuse box,cup or bottle?{'\n'}Then set yourself a remainder and we'll send a{'\n'}notificationn alarm to you automatically</Text>


    </View>


<Icon style={{flex:3}} />

    </View>


    <View style={{padding:30,borderBottomColor:'gray',borderBottomWidth:1,}}>
    <Text style={{fontSize:18,fontWeight:'bold',marginBottom:20}}>Time</Text>
    <View style={{flexDirection:"row",alignItems:'center'}}>

        <Text style={{color:'gray',fontSize:18,marginRight:20}}>Hour</Text>

       
       <View style={{flexDirection:'row',justifyContent:'center'}}>

      <Picker
  mode="dropdown"
  style={{backgroundColor: 'red',width:100}}
  selectedValue={hour}
  onValueChange={(value) => setHour(value)}>

{

hours.map((item)=>{

    return (

       <Picker.Item key={item} label={item} value={item} />
       

    );

})


}


 </Picker>



</View>


<Text style={{color:'gray',fontSize:18,marginRight:20}}>Min</Text>


<Picker
  mode="dropdown"
  style={{backgroundColor: 'red',width:100}}
  selectedValue={minutes}
  onValueChange={(value) => setMinutes(value)}>

      {

min.map((item)=>{


    return (
        <Picker.Item key={item} label={item} value={item} />
            
    )

})

      }
  </Picker>
      




    </View>
</View>







    <View style={{padding:30,borderBottomColor:'gray',borderBottomWidth:1,}}>
    <View style={{flexDirection:"row",alignItems:'center'}}>

        <Text style={{color:'black',fontSize:18,marginRight:20,fontWeight:'bold'}}>How often?</Text>

       
       <View style={{flexDirection:'row-reverse',justifyContent:'center',flex:1}}>

      <Picker
  mode="dropdown"
  style={{backgroundColor: 'red',width:100}}
  selectedValue={hour}
  onValueChange={(value) => setHour(value)}>

{

hours.map((item)=>{

    return (

       <Picker.Item key={item} label={item} value={item} />
       

    );

})


}


 </Picker>



</View>


    </View>
</View>



<View style={{padding:20,paddingLeft:40,paddingRight:40}}>

<OrangeButton title={'Add Remainder'} />

    </View>


<View style={{padding:30,paddingTop:10,paddingBottom:20,flexDirection:"column",backgroundColor:'#f5f5f5'}}>
<Text  style={{fontSize:15,fontWeight:'bold',marginBottom:3,color:"#626262"}}>
Current Remainder
    </Text>
<Text style={{fontSize:11,color:'#7d7d7d'}}>You have {"2"} remainders</Text>
    </View>


{

<View style={{flexDirection:'row',padding:20,borderBottomColor:'gray',borderBottomWidth:1,}}>

    <View style={{backgroundColor:'#eaeaea',borderRadius:20,flexDirection:'row',flex:10,padding:15}}>

<Text style={{fontWeight:'bold',marginRight:10}}>
    {'08:05'}
    </Text>
    <Text style={{color:'gray',fontSize:14}}>
        {"Every Weekday"}
        </Text>

        </View>

        <TouchableOpacity style={{backgroundColor:'#83c2cb' ,flex:2,borderRadius:100,marginLeft:10,width:50,height:50}} >
<View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
         <Text style={{fontSize:80,fontWeight:'bold',color:'white',marginTop:-15,textAlign:'center'}}>
                    -
             </Text>
     </View>
            </TouchableOpacity>


    </View>

}




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

export default SetRemainderScreen