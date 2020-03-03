import React from 'react';
import './App.scss';
import WorkoutStore from './stores/WorkoutStore';
import { Provider } from 'react-redux';
import WorkoutAppLayout from './WorkoutAppLayout';


export default function WorkoutApp(props)
{
   
     return (
        <Provider store={WorkoutStore}>
            <WorkoutAppLayout></WorkoutAppLayout>
        </Provider>
  );
}
