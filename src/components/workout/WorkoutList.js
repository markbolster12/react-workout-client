import React from 'react';
import { connect } from 'react-redux';
import { getWorkoutsAJAX, deleteWorkoutAJAX } from 'actions/WorkoutActions';
import './Workout.css';

class WorkoutList extends React.Component{

    componentWillMount(){
        this.props.getWorkoutsAJAX();
    }

    deleteWorkout = (val) => {
        this.props.deleteWorkoutAJAX(val);
    }

    renderWorkoutList(){

        let workouts =  this.props.workouts.map((val) => (
            <div className="workout-list-item" key={val.name}>
                <span>{val.name}</span>
                <div className="delete-button">
                    <i className="fa fa-close" onClick={() => this.deleteWorkout(val)}></i>
                </div>
            </div>));
            
        return workouts;
    }

    render(){
        return(
        <div className="workout-list">
            {this.renderWorkoutList()}
        </div>);
    }
}

const mapStateToProps = (state, ownProps) => {
    let allWorkouts = state.workouts.workoutIds.map(id => ({ ...state.workouts.workoutsById[id]}));
    return {workouts: allWorkouts}
}

export default connect(mapStateToProps, {getWorkoutsAJAX, deleteWorkoutAJAX})(WorkoutList);