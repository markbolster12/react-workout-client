import { workoutActions } from './actionTypes';
import store from '../stores/WorkoutStore';
import { headers } from '../services/authentication';

export function addWorkout(workout){
    return {
        type: workoutActions.addWorkout,
        payload: workout
    };
}

export function editWorkout(workout){
    return {
        type: workoutActions.editWorkout,
        payload: workout
    }
}

export function saveWorkoutAJAX(workout){
    return dispatch => {
        let sets = workout.sets;
        let sets2 = []
        sets.forEach( (s) => sets2.push({exerciseId: s.id, name: store.getState().exercises.exercisesById[s.id].name, exercise: store.getState().exercises.exercisesById[s.id], reps: s.reps}))
        workout = {...workout, sets: sets2}
        console.log(workout);
        fetch("http://localhost:8080/workouts",
        {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: headers,
            body: JSON.stringify({...workout})
        }).then((resp) =>  resp.json()
          .then((workout)=> {
                    dispatch({
                        type: workoutActions.saveWorkout,
                        payload: workout
                    });
                }),
                (err) => console.log("ERR", err));
        
    }
    
}

export function deleteWorkoutAJAX(workout) {
    return dispatch => {
        fetch("http://localhost:8080/workouts",
        {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: headers,
            body: JSON.stringify({...workout})
        }).then((resp) =>  resp.json()
          .then((workout)=> {
                    dispatch(deleteWorkout(workout));
                }),
                (err) => console.log("ERR", err));
    }
}

export function deleteWorkout(workout){
    return {
        type: workoutActions.deleteWorkout,
        payload: workout
    };
}

export function getWorkoutsAJAX(){
    return dispatch => {
        fetch("http://localhost:8080/workouts/",
        {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: "same-origin", // include, *same-origin, omit
            headers: headers,
        }).then((resp) =>  resp.json().then(
                (workouts)=> {
                    dispatch(setWorkouts(workouts));
                }),
                (err) => console.log("ERR", err));
    }
}

export function setWorkouts(workouts){
    return {
        type: workoutActions.setWorkouts,
        payload: workouts
    }
}