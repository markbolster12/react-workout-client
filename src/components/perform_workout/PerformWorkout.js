import React from 'react'
import { addSet, removeSet, saveWorkout } from 'actions/PerformWorkoutActions';
import { connect } from 'react-redux';
import PerformSet from './PerformSet';
import { ViewSet } from './ViewSet';
import { getExercises } from 'actions/ExerciseActions';


class PerformWorkout extends React.Component {

    componentWillMount(){
        this.props.getExercises();
    }

    render(){
        return (
            <div>
                <PerformSet></PerformSet>
                <div className="list-container">{this.renderSets()}</div>
                <button className="btn btn-primary btn-full" onClick={this.saveWorkout}>Save</button>
            </div>);

    }

    renderSets() {
        //let setsRender = this.props.sets.map((set, ind) => <div key={ind}>{set.exerciseId}</div>);
        let setsRender = this.props.sets.map((set, ind) => <ViewSet key={ind} set={set}></ViewSet>);
        return setsRender;
        
    }

    saveWorkout = () => {
        this.props.saveWorkout({day:2, sets: this.props.sets});
    }
}

const mapStateToProps = (state, ownProps) => {
    return {sets: [...state.perform_workouts.sets]};

}

export default connect(mapStateToProps, {addSet, removeSet, saveWorkout, getExercises})(PerformWorkout);