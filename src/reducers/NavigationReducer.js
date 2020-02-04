import {navigationActions} from '../actions/actionTypes';

const initialState = { 
    selection: "login"
}

export function navigationReducer(navigationData = initialState, action){

    switch(action.type){
        case navigationActions.change_primary_view:{
            return {selection: action.payload};
        }
        default:
        {
            return navigationData;
        }
    }
    

}