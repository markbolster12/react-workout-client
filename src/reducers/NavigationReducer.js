import {navigationActions} from '../actions/actionTypes';
import {loginActions} from '../actions/actionTypes';

const initialState = { 
    selection: "login"
}

export function navigationReducer(navigationData = initialState, action){

    switch(action.type){
        case loginActions.auth_success:
        {
            console.log("In nav reducer");
            
            return {selection: "exercises"}
        }
        case navigationActions.change_primary_view:{
            return {selection: action.payload};
        }
        case loginActions.registration_success:{
            return {selection: "login"};
        }
        default:
        {
            return navigationData;
        }
    }
    

}