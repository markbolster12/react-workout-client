import { workoutHistoryActions } from './actionTypes';
import { svc_headers } from 'services/authentication';
import { settings } from '../services/settings';

export function loadWorkouts(year, month){
    let url = settings.base_url + "/registry/" + year + "/" + month;
    return dispatch => {
        fetch(url,
        {
            method: 'GET', 
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: svc_headers
        }).then((resp) =>  resp.json()
          .then((workouts)=> {
                    dispatch({
                        type: workoutHistoryActions.loadHistory,
                        payload: workouts
                    });
                }),
                (err) => console.log("ERR", err));
        
    }
    
}