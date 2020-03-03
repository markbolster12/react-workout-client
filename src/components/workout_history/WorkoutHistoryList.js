import React from 'react';
import './WorkoutHistory.scss';
import CollapsibleListItem from '../CollapsibleLisItem';

class WorkoutHistoryList extends React.Component{

    constructor(props)
    {
        super(props);
    }

    /*componentDidMount() {
        doChart(800,400,this.props.workouts, "exercise_chart");
    }
    
    componentDidUpdate() {
        doChart(800,400,this.props.workouts, "exercise_chart")
    }*/

    render2(){
        let workouts = this.props.workouts.map((wo, k) => this.renderWorkout(wo, k));
        return(  
        <div className="workout-section">
            {workouts}
        </div>);
    }

    render(){
        let workouts = this.props.workouts.map((wo, k) => this.renderWorkout(wo, k));
        return workouts;
    }

    renderWorkout(workout, k)
    {
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
            <div key={k}>
                {s.exerciseName}
                {s.type==="CARDIO"?
                    <span>{s.meters}m in {s.seconds} seconds</span>:
                    <span>{s.weight}lb for {s.reps} reps</span>}
            </div>
        );
        return (
            <div>
                {detail}
            </div>
        );
    }
}

export default WorkoutHistoryList;