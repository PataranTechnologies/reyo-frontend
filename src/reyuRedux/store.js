import {createStore} from 'redux'
import reducer from './reducer'
import { AsyncStorage } from 'react-native';
import SyncStorage from 'sync-storage';
const persistedState = SyncStorage.get('reduxState') 
                       ? JSON.parse(SyncStorage.get('reduxState'))
                       : {};
const store=createStore(reducer,persistedState);

store.subscribe(()=>{
    SyncStorage.set('reduxState', JSON.stringify({...store.getState()}))
  })

export default store;