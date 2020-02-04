import { loginActions } from '../actions/actionTypes';
import { svc_headers } from 'services/authentication';



const initialState = { 
    new_user: {},
    token:"",
    errors: []
}

export function loginReducer(loginData = initialState, action){
    switch (action.type){
        case loginActions.services.req_register_user:
        {
            console.log("IN LOGIN REDUCER");
            return { loginData }; 
        }
        case loginActions.auth_success:
        {
            svc_headers.set("Authorization", action.payload);
            return {...loginData, token: action.payload}
        }
        case loginActions.auth_error:
        {
            return {...loginData, errors: [action.payload]}
        }
        case loginActions.logout:
        {
            svc_headers.set("Authorization", null);
            return {...loginData, token:""}
        }
        default:
            return loginData;
    }
}