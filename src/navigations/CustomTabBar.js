
import React, { Component, useState } from 'react';
import { View,Text, StyleSheet,TouchableWithoutFeedback } from 'react-native';
import  Icon  from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/AntDesign'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import { set } from 'react-native-reanimated';
const CustomTabBar=(props)=>{


    const [selectedTab,setSelectedTab]=useState(1);
 const handleItemClick=(i)=>{

    setSelectedTab(i)

    if(i===1)
    {
    props.navigation.navigate("Home")
    }
    else
    if(i===2)
    {
        props.navigation.navigate("Invite")
    }
    else
    if(i===3)
    {
        props.navigation.navigate("Offer")
    }
    else
    {
        props.navigation.navigate("Menu")
    }
 }
    return (
        <View style={styles.tabContainer}>


<TouchableWithoutFeedback onPress={()=>{handleItemClick(1)}}>
            <View style={[styles.tabItem,selectedTab===1?styles.selectedContainer:styles.notSelectedConntainer]}>


                <Icon name="search" style={selectedTab===1?styles.selectedI:styles.notSelectedI} />

                <Text style={selectedTab===1?styles.selected:styles.notSelected}>Explore</Text>


                </View>
</TouchableWithoutFeedback>
<TouchableWithoutFeedback onPress={()=>{handleItemClick(2)}}>
                <View style={[styles.tabItem,selectedTab===2?styles.selectedContainer:styles.notSelectedConntainer]}>


                <Icon2 name="adduser" style={selectedTab===2?styles.selectedI:styles.notSelectedI} />

                <Text style={selectedTab===2?styles.selected:styles.notSelected}>Invite</Text>


                </View>
</TouchableWithoutFeedback>

<TouchableWithoutFeedback >
                <View style={[styles.tabItem,styles.qr]}>


                <Icon2 name="scan1" style={styles.qrScan} />

            

                </View>


</TouchableWithoutFeedback>
<TouchableWithoutFeedback onPress={()=>{handleItemClick(3)}}>
                <View style={[styles.tabItem,selectedTab===3?styles.selectedContainer:styles.notSelectedConntainer]}>


                <Icon3 name="offer" style={selectedTab===3?styles.selectedI:styles.notSelectedI} />

                <Text style={selectedTab===3?styles.selected:styles.notSelected}>My Offers</Text>


                </View>


</TouchableWithoutFeedback >
            <TouchableWithoutFeedback onPress={()=>{handleItemClick(4)}}>
            <View style={[styles.tabItem,selectedTab===4?styles.selectedContainer:styles.notSelectedConntainer]}>


                <Icon3 name="menu" style={selectedTab===4?styles.selectedI:styles.notSelectedI} />

                <Text style={selectedTab===4?styles.selected:styles.notSelected}>Menu</Text>


                </View>

                </TouchableWithoutFeedback>


           


            </View>
    )

}


const styles=StyleSheet.create({


    tabContainer:{

        flexDirection:"row",
        padding:5,
        backgroundColor:'white',

    },
    tabItem:{

        justifyContent:'center',
        alignItems:'center',
        flex:1,
        padding:6,
        borderRadius:12

    },
    selected:{
        fontSize:14,
        color:'white',

    },
    notSelected:{

        fontSize:14,
        color:'black',

    },
    selectedI:{
        fontSize:22,
        color:'white',

    },
    notSelectedI:{

        fontSize:22,
        color:'black',

    },
    selectedContainer:{
        backgroundColor:"#99ccff",
    },
    notSelectedConntainer:{
        backgroundColor:'white',
    },
    qr:{
        marginTop:-20

    },
    qrScan:{



        fontSize:35,
        color:'#99ccff'
    },
})

export default CustomTabBar