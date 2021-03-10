import {Types} from './types'
let initialState={
    userType:1,
    user:null,
}
const reducer=(store=initialState,action)=>{

    switch (action.type) {
        case Types.SetUser:
            return  {...store,user:action.payload};
            
        case Types.SetUserType:
            return {...store,userType:action.payload};    
         
    
        default:
            return store;
    }

}


export default reducer;