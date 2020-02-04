import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/PrimaryReducer';
import thunk from 'redux-thunk';

const myLogger = store => next => action => {
        console.log("NEW ACTION: " + action.type);
        console.log(action);
        next(action);

}

const store = createStore(reducer, applyMiddleware(thunk, myLogger));


export default store;