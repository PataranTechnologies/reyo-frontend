import React, { Component } from 'react';

import Switch from './src/navigations/switchNaviation'
import {createAppContainer} from 'react-navigation'
import Store from './src/reyuRedux/store'
const AppContainer=createAppContainer(Switch)
import {Provider} from 'react-redux'
const App=()=>{

return (
  <Provider store={Store}>
  <AppContainer />
</Provider>
  
)

}


export default App