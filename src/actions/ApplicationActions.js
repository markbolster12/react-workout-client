import {applicationActions} from './actionTypes';

export function setErrors(errors)
{
    return{
        type: applicationActions.addErrors,
        payload: errors
    }
}

export function clearErrors()
{
    return {
        type: applicationActions.clearErrors,
        payload: {}
    }
}