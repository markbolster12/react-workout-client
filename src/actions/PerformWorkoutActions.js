import { performWorkoutActions } from './actionTypes';
import { headers } from '../services/authentication';


export function addSet(set){
    return {
        type: performWorkoutActions.addSet,
        payload: set
    }
}

export function removeSet(){
    return {
        type: performWorkoutActions.removeSet,
        payload: {}
    }
}

export function saveWorkout(workout){
    let today = new Date();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    return dispatch => {
        fetch("http://localhost:8080/finished/" + year + "/" + month,
        {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: "same-origin", // include, *same-origin, omit
            headers: headers,
            body: JSON.stringify({...workout})
        }).then((resp) =>  resp.json().then(
                (exercise)=> {
                    dispatch({type:performWorkoutActions.saveWorkout, payload:workout});//saveExercise(exercise));
                }),
                (err) => console.log("ERR", err));
    }
}