import { workoutHistoryActions } from 'actions/actionTypes';

const initialState = {workouts:[]};


export function workoutHistoryReducer(state, action) {

    switch(action.type) {
        case workoutHistoryActions.loadHistory:
            let workouts = action.payload;
            return {workouts};
        default:
            return {...initialState};
    }

}