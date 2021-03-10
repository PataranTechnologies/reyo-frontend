import React, { Component } from 'react';

import {createBottomTabNavigator} from 'react-navigation-tabs'
import InviteScreen from '../screens/MainApp/InviteScreens/InviteScreen';
import OfferScreen from '../screens/MainApp/OfferScreen';
import MenuScreen from '../screens/MainApp/MenuScreen';
import Home from '../screens/MainApp/Home';
import CustomTabBar from './CustomTabBar';
import InviteStack from './InviteStack';



import {createStackNavigator} from 'react-navigation-stack'
import StoreDetailsScreen from '../screens/MainApp/StoreDetailsScreen';


const HomeStack=createStackNavigator({
    Home:{screen:Home,
        navigationOptions: {
            headerShown: false,
          }
    },
    StoreDetailsScreen:{screen:StoreDetailsScreen,
      navigationOptions: ({ navigation }) => {
        let tabBarVisible = true;
        if (navigation.state.index > 0) {
          tabBarVisible = false;
        }
      
        return {
          tabBarVisible,
          headerShown:false,
        };
      }
     
    }
  },
{
    initialRoute: 'Home',
})







const Tab=createBottomTabNavigator({
    Home:{screen:Home},
    Invite:{screen:InviteScreen},
    Offer:{screen:OfferScreen},
    Menu:{screen:MenuScreen},
},
{
    initialRouteName: 'Home',
    tabBarComponent: CustomTabBar,
    tabBarOptions: {
      activeTintColor: '#000000',
      activeBackgroundColor: '#e6e6e6',
    }
  }
);




export default Tab



