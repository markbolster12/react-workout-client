import React from 'react';
import {connect} from 'react-redux';
import ExerciseList from './ExerciseList';
import EditExercise from './EditExercise';
import { getExercises } from 'actions/ExerciseActions';
import './ExerciseModule.css';

class ExerciseSection extends React.Component {

    componentWillMount(){
        this.props.getExercises();
    }

    render(){
        return (
            <div className="exercise-section">
                <div className="exercise-edit-section">
                    <EditExercise exercise={this.props.exercise}></EditExercise>
                </div>
                <ExerciseList></ExerciseList>
            </div>);
    }
}
const mapStateToProps = (state, ownProps) => {
    return {exercise: state.exercises.exercise};
}
export default connect(mapStateToProps, {getExercises})(ExerciseSection);