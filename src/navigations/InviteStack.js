import React, { Component } from 'react';

import {createStackNavigator} from 'react-navigation-stack'
import InviteScreen from '../screens/MainApp/InviteScreens/InviteScreen';
import InviteFriendScreen from '../screens/MainApp/InviteScreens/InviteFriendScreen';
import InviteVendorScreen from '../screens/MainApp/InviteScreens/InviteVendorScreen';



const InviteStack=createStackNavigator({
    InviteScreen:{screen:InviteScreen,
        navigationOptions: {
            headerShown: false,
          }
    },
    InviteFriendScreen:{screen:InviteFriendScreen,
        navigationOptions: {
            headerShown: false,
          }
    },
    InviteVendorScreen:{screen:InviteVendorScreen,
        navigationOptions: {
            headerShown: false,
          }
    },
    
},
{
    initialRoute: 'InviteScreen',
})


export default InviteStack