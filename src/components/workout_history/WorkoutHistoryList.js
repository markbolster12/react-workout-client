import React from 'react';
import './WorkoutHistory.css';
import CollapsibleListItem from '../CollapsibleLisItem';

class WorkoutHistoryList extends React.Component{

    constructor(props)
    {
        super(props);
        console.log(props);
        this.state = {workouts: this.props.workouts};
    }

    render(){
        let workouts = this.props.workouts.map(wo => this.renderWorkout(wo));
        return(  
        <div>
            {workouts}
        </div>);
    }

    renderWorkout(workout){

        return (
            <div key={workout.day}>
                <CollapsibleListItem title={()=><div className="workout-details-header">{this.props.month}/{workout.day}/{this.props.year}</div>}
                                     details={()=>this.workoutDetails(workout)}>

                </CollapsibleListItem>
            </div>
        );
    }

    workoutDetails(workout) {
        let detail = workout.sets.map((s) =>
            <div>{s.exerciseName}</div>
        );
        return (
            <div>
                {detail}
            </div>
        );
    }
}

export default WorkoutHistoryList;