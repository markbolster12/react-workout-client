import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WorkoutAppLayout from './WorkoutAppLayout';
import * as serviceWorker from './serviceWorker';
import './navigation_utility';


ReactDOM.render(<WorkoutAppLayout />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
