import { exerciseActions } from './actionTypes';
import { svc_headers } from 'services/authentication';
import { selectPrimaryView } from 'actions/NavigationActions';
import { settings } from 'services/settings';


export function addExercise(exercise){
    return {
        type: exerciseActions.addExercise,
        payload: exercise
    }
}

export function newExercise(exercise){
    return {
        type: exerciseActions.newExercise
   }
}

export function saveExercise(exercise){
    return dispatch => {
        fetch(settings.base_url + "/exercises/",
        {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: "same-origin", // include, *same-origin, omit
            headers: svc_headers,
            body: JSON.stringify({...exercise})
        }).then((resp) =>  resp.json().then(
                (exercise)=> {
                    dispatch({type:exerciseActions.addExercise, payload:exercise});
                }),
                (err) => console.log("ERR", err));
    }
}

export function selectExercise(exercise){
    return {
        type: exerciseActions.selectExercise,
        payload: exercise
    }
}

export function getExercises() {
    console.log(svc_headers.get("Authorization"));
    return dispatch => {
        fetch(settings.base_url + "/exercises/",
        {
            method: 'GET', 
            mode: 'cors', 
            cache: 'no-cache', 
            headers: svc_headers,
        })
        .then((resp) => {
            if(resp.status===403){
                console.log("GOT RIGHT STATUS");
                dispatch(selectPrimaryView("login"));
            }
            else if(resp.status===200){
                resp.json()
                .then((exercises)=> 
                {
                    dispatch(receiveExercises(exercises));
                })
            }
            
        }
        ,(err)=>console.log(err));
        
    }
}



export function receiveExercises(exerciseList){
    return {
        type: exerciseActions.receiveExercises,
        payload: exerciseList
    }
}

export function deleteExerciseAJAX(exercise) {
    return dispatch => {
        fetch(settings.base_url + "/exercises/",
        {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: "same-origin", // include, *same-origin, omit
            headers: svc_headers,
            body: JSON.stringify(exercise)
        }).then((resp) =>  resp.json().then(
                (success) => 
                {
                    dispatch(deleteExercise(exercise));
                },
                (err) => console.log("ERR", err)));
            }
}

export function deleteExercise(exercise){
    return {
        type: exerciseActions.deleteExercise,
        payload: exercise
    }
}

export function editExercise(exercise){
    return {
        type: exerciseActions.editExercise,
        payload: exercise
    }
}