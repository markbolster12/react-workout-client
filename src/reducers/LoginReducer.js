import { loginActions } from '../actions/actionTypes';
import { svc_headers } from 'services/authentication';

const initialStateTemplate = { 
    new_user: {},
    token:"",
    errors: [],
    username: ""
}

//This should only run when the reducer is loaded (once per page refresh?)
function getInitialState(){
    const state = {...initialStateTemplate};
    
    const myStorage = window.localStorage;

    const token = myStorage.getItem("header");
    if(token){
        state.token = token;
    }

    const username = myStorage.getItem("username");
    if(username){
        state.username = username;
    }
    return state;
}

const initialState = getInitialState();

export function loginReducer(loginData = initialState, action){
    switch (action.type){
        case loginActions.auth_success:
        {
            const myStorage = window.localStorage;
            myStorage.setItem("header", action.payload.token);
            myStorage.setItem("username", action.payload.username);
            svc_headers.set("Authorization", action.payload.token);
            return {...loginData, errors:[], token: action.payload, username: action.payload.username}
        }
        case loginActions.auth_error:
        {
            return {...loginData, errors: [action.payload]}
        }
        case loginActions.logout:
        {
            const myStorage = window.localStorage;
            myStorage.removeItem("header");
            myStorage.removeItem("username");

            svc_headers.set("Authorization", null);
            
            return {...getInitialState()};
        }
        default:
            return loginData;
    }
}