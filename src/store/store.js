import * as actionTypes from "./types";
import { combineReducers } from "redux";

// create your reducers here

/*
    steps to create  a reducer
    1. define a default state  

    ==>    const initial_reducerName_state={}

    2.handle all the action of reducer

    ==> const reducerName = (state = initial_reducerName_state,action)=>
        {
            // will switch through the actions and update default state

            switch(action.type)
            {
                case actionTypes.ACTION_NAME
                    return {
                        ...state,
                        reducerStateElementNameToUpdate:action.payload.PAYLOAD_NAME
                    }
                default :
                
                    return state

            } 
        }
*/
//layout reducer starts


const initial_layout_reducer_state=
{
    authStatus:false,
    userDetails:{

    },
    accessToken:""

}


const user_reducer=(state=initial_layout_reducer_state,action)=>
{
    switch(action.type)
    {
        case actionTypes.SET_USER_AUTH_STATUS:
            return{
                    ...state,
                    authstatus: action.payload.authStatus
            }
        case actionTypes.SET_USER_DETAILS:
            return{
                ...state,
                userDetails:action.payload.userDetails
            }
        case actionTypes.SET_ACCESS_TOKEN:
            return{
                ...state,
                accessToken:action.payload.accessToken
            }
        default:
            return state

    }
}


const rootReducer = combineReducers({
    //todo combine your all reducers in a root reducer 
    /* 
       reducerKey:reducerName
    */
       user:user_reducer,
})


export default rootReducer
