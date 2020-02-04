import { workoutHistoryActions } from './actionTypes';
import { headers } from '../services/authentication';

export function loadWorkouts(year, month){
    let url = "http://localhost:8080/finished/"+ year + "/" + month;
    return dispatch => {
        fetch(url,
        {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: headers
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