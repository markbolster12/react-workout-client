import { devActions } from './devActionTypes';
import { svc_headers } from 'services/authentication';
import { settings } from 'services/settings';

export function generatePerformedWorkout(params)
{
    console.log("SENDING" + params);
    console.log(params);
    return dispatch => {
        fetch(settings.base_url + "/generate/",
        {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: "same-origin", // include, *same-origin, omit
            headers: svc_headers,
            body: JSON.stringify(params)
            //body: JSON.stringify({...params})
        }).then((resp) =>  resp.json().then(
                (response)=> {
                    console.log("Got " + response)
                }),
                (err) => console.log("ERR", err));
    }
}