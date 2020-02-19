import { performWorkoutActions } from 'actions/actionTypes';

const initialData = {
    sets: [
        /*{
            exerciseId: 1,
            reps: 10,
            exerciseName: "",
            dateTimeEntered: "",
            repGoal: 10
        }*/
    ],
    current_set: {

    },
    datetime: ""
}




export const performWorkoutReducer = (state, action) => {    

    switch(action.type){
        case performWorkoutActions.addSet:
            let newSets = [...state.sets];
            newSets.push(action.payload);

            return {sets:newSets};
        case performWorkoutActions.removeSet:
            return {...initialData};
        case performWorkoutActions.saveWorkout:
            return state;
        default:
            return {...initialData};
    }




}