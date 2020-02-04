import {navigationActions} from '../actions/actionTypes'


export function selectPrimaryView(viewName){
    return {
        type: navigationActions.change_primary_view,
        payload: viewName
    }
} 

export const loginView = "login"