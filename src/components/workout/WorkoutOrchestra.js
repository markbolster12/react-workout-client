import React from 'react';
import WorkoutList from './WorkoutList';
import EditWorkout from './EditWorkout';
import 'styles/WorkoutModule.css';


class WorkoutOrchesta extends React.Component {
    render(){
        return (<div className="">
                <h1>Workout Orchestra</h1> 
                <div className="orchestra-layout">
                    <div><EditWorkout></EditWorkout></div><div></div>                    
                </div>
                
                <div className="list-container">
                    <WorkoutList></WorkoutList>
                </div>
                
            </div>);
    }
}

export default WorkoutOrchesta;