import { loginActions } from './actionTypes';
import { svc_headers } from '../services/authentication';
import { settings } from 'services/settings';
import { selectPrimaryView } from './NavigationActions';


export function registerUser(user){
    return function (dispatch) {
        fetch(settings.base_url + "/registration",
        {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: "same-origin", // include, *same-origin, omit
            headers: svc_headers,
            body: JSON.stringify(user)
        }).then(
            (resp) => {
                resp.json().then(
                    (json_body)=>dispatch({type:loginActions.registration_success}))
            },
            (err) => console.log("ERR", err));

    }
}

export function login(username, password){
    return function (dispatch) {
        fetch(settings.base_url + "/login",
        {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: "same-origin", // include, *same-origin, omit
            headers: svc_headers,
            body: JSON.stringify({"username": username, "password": password})
        }).then((resp) =>  {
            console.log("LOGIN RESPONSE");
            console.log(resp);
            if(resp.status===200){
                let auth_str = resp.headers.get("Authorization");
                dispatch({type: loginActions.auth_success, payload:auth_str});
            }
            else{
                dispatch({type: loginActions.auth_error, payload: "Unable to login"});
            }
            
            
            //svc_headers.token = auth_str;
            //resp.json()
                //.then((json_body)=>console.log("JSON BODY:", json_body)
            //)
        },
        (err) => {
            console.log("ERR", err);
            console.log(err);
            dispatch({type: loginActions.auth_error, payload:err.message});
        }
        );

    }
}

export function logout()
{
    return function (dispatch){
        dispatch({
            type: loginActions.logout
        });
        dispatch(selectPrimaryView("login"))

    }
    
}