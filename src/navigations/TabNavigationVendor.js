import React, { Component } from 'react';

import {createBottomTabNavigator} from 'react-navigation-tabs'
import InviteScreen from '../screens/MainAppVendor/InviteScreens/InviteScreen';
import OfferScreen from '../screens/MainAppVendor/OfferScreen';
import MenuScreen from '../screens/MainAppVendor/MenuScreen';
import Home from '../screens/MainAppVendor/Home';
import CustomTabBar from './CustomTabBar';
import InviteStack from './InviteStack';



import {createStackNavigator} from 'react-navigation-stack'
import StoreDetailsScreen from '../screens/MainAppVendor/StoreDetailsScreen';
import CustomTabbarVendor from './CustonTabbarVendor';
import ShareOnSocialMedia from '../screens/MainAppVendor/ShareOnSocialMedia';


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
    Invite:{screen:ShareOnSocialMedia},
    Offer:{screen:OfferScreen},
    Menu:{screen:MenuScreen},
},
{
    initialRouteName: 'Home',
    tabBarComponent: CustomTabbarVendor,
    tabBarOptions: {
      activeTintColor: '#000000',
      activeBackgroundColor: '#e6e6e6',
    }
  }
);




export default Tab



