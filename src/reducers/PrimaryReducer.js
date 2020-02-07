import { combineReducers } from 'redux';
import { exerciseReducer } from './ExerciseReducer';
import { workoutReducer } from './WorkoutReducer';
import { loginReducer } from './LoginReducer';
import { navigationReducer } from './NavigationReducer';
import { performWorkoutReducer } from './PerformWorkoutReducer';
import { workoutHistoryReducer } from './WorkoutHistoryReducer';
import { loginActions } from 'actions/actionTypes';

const reducer = combineReducers({
    navigation: navigationReducer,
    exercises: exerciseReducer,
    workouts: workoutReducer,
    perform_workouts: performWorkoutReducer,
    workout_history: workoutHistoryReducer,
    login: loginReducer

});

const extension = (state, action) =>
{
    if(action.type===loginActions.logout)
    {
        state = undefined;
        return reducer(state, action);
    }
    return reducer(state,action);
}



export default extension;