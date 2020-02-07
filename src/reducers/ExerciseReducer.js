import { exerciseActions } from '../actions/actionTypes';

const initialState = { 
    exerciseIds: [],
    exercisesById: {},
    exercise: {
        name:"",
        description:""
    }
}

export function exerciseReducer(exerciseData = initialState, action){
    switch (action.type){
        case exerciseActions.selectExercise:
        {
            return {...exerciseData, exercise: action.payload};
        }
        case exerciseActions.addExercise:
        {
            let exIds = [...exerciseData.exerciseIds, action.payload.name];
            let exsById = {...exerciseData.exercisesById};
            
            exsById[action.payload.name] = action.payload;
            
            return {
                ...exerciseData, 
                exercisesById:exsById, exerciseIds: exIds, 
                exercise: {
                    name:"",
                    description:""
                }
            }
        }
        case exerciseActions.receiveExercises:
        {
            let exerciseIds = [];
            let exerciseMap = {};

            action.payload.forEach(element => {
                exerciseIds.push(element.name);
                exerciseMap[element.name] = element;
            });
            return {...exerciseData, exerciseIds, exercisesById: exerciseMap};
        }
        case exerciseActions.deleteExercise:
        {
            let ids = exerciseData.exerciseIds;
            let exercises = exerciseData.exercisesById;
            for(var i = 0; i < ids.length; i++){ 
                if ( ids[i] === action.payload.id) {
                    ids.splice(i, 1); 
                }
             }
            delete exercises[action.payload.id];
            //exerciseData.exerciseIds.pop(action.payload.id);
            return {...exerciseData, exerciseIds: ids, exercisesById: exercises};
        }
        case exerciseActions.newExercise:
        {
            return {...exerciseData, exercise:{...initialState.exercise}};
        }
        case exerciseActions.editExercise:
        {
            return {...exerciseData, exercise: action.payload};
        }
        default:
            return {...exerciseData};
    }
}