import { workoutActions } from "actions/actionTypes";

//let nextWorkoutId = 0;

const initialState = { 
    workoutIds: [],
    workoutsById: {},
    workout: {
        name: "",
        description: ""
    }
};



export function workoutReducer(workoutData = initialState, action){
    switch (action.type){
        case workoutActions.saveWorkout:
            let idList = [...workoutData.workoutIds, action.payload.id];
            let workoutMap = {...workoutData.workoutsById};
            workoutMap[action.payload.id] = action.payload;
            return {...workoutData, workoutIds: idList, workoutsById: workoutMap};
        case workoutActions.setWorkouts:
            let ids = action.payload.map( (x) => x.name);
            let byId = {};
            for(let x=0; x<action.payload.length; x++)
            {
                byId[action.payload[x].name] = action.payload[x];
            }
            return {...workoutData, workoutIds: ids,  workoutsById: byId};
        case workoutActions.deleteWorkout:
            let idsForDelete = [...workoutData.workoutIds]
            idsForDelete.pop(action.payload.name);
            let byIdForDelete = {...workoutData.workoutsById};
            delete byIdForDelete[action.payload.name];
            return {...workoutData, workoutIds: idsForDelete,  workoutsById: byIdForDelete};
        default:
            return {...workoutData};
    }
}