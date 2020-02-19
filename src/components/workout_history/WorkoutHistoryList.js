import React from 'react';
import './WorkoutHistory.css';
import CollapsibleListItem from '../CollapsibleLisItem';

class WorkoutHistoryList extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {workouts: this.props.workouts};
    }

    render(){
        let workouts = this.props.workouts.map((wo, k) => this.renderWorkout(wo, k));
        return(  
        <div className="workout-section">
            {workouts}
        </div>);
    }

    renderWorkout(workout, k)
    {
        console.log(workout);
        return (
            <div key={workout.day}>
                <CollapsibleListItem key={k} title={()=><div className="workout-details-header">{workout.month}/{workout.day}/{workout.year}</div>}
                                     details={()=>this.workoutDetails(workout)}>

                </CollapsibleListItem>
            </div>
        );
    }

    workoutDetails(workout) {
        let detail = workout.sets.map((s, k) =>
            <div key={k}>{s.exerciseName}</div>
        );
        return (
            <div>
                {detail}
            </div>
        );
    }
}

export default WorkoutHistoryList;