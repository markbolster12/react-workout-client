import { applicationActions } from "../actions/actionTypes";

const initialState = { 
    errors: []
}

export function applicationReducer(applicationData = initialState, action){
    switch (action.type){
        case applicationActions.addErrors:
            return {...applicationData, errors: action.payload};
        case applicationActions.clearErrors:
            return {...applicationData, errors: []};
        default:
            return applicationData;
    }
}
