import React, { Component } from 'react';

import {createStackNavigator} from 'react-navigation-stack'
import AuthMain from '../screens/AuthScreens/AuthMain';

import SignUpOptionScreen from '../screens/AuthScreens/SignUpOptionScreen'
import SignUpScreen from '../screens/AuthScreens/SignUpScreen';
import RegisterScreen from '../screens/AuthScreens/RegisterScreen';
import ForgetPassword from '../screens/AuthScreens/ForgetScreen';
import GuestModeScreen from '../screens/AuthScreens/GuestModeScreen';
import LocationScreen from '../screens/AuthScreens/LocationScreen';
const AuthStack=createStackNavigator({
    AuthMain:{screen:AuthMain,
        navigationOptions: {
            headerShown: false,
          }
    },
    SignUpOption:{screen:SignUpOptionScreen,
        navigationOptions: {
            headerShown: false,
          }
    },
    SignUpScreen:{screen:SignUpScreen,
        navigationOptions: {
            headerShown: false,
          }
    },
    RegisterScreen:{screen:RegisterScreen,
        navigationOptions: {
            headerShown: false,
          }
    },
    ForgetScreen:{screen:ForgetPassword,
        navigationOptions: {
            headerShown: false,
          }
    },
    GuestMode:{screen:GuestModeScreen,
        navigationOptions: {
            headerShown: false,
          }
    },
    LocationScreen:{screen:LocationScreen,
        navigationOptions: {
            headerShown: false,
          }
    }
})


export default AuthStack