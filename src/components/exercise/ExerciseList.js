import React from 'react';
import { connect } from 'react-redux';
import { deleteExerciseAJAX, selectExercise } from 'actions/ExerciseActions';
import './Exercise.css';

class ExerciseList extends React.Component{

    renderExerciseList(){
        return this.props.exercises.map((val) => (
            <div className="exercise-list-item" onClick={() => this.selectExercise(val)} key={val.id}>
                <span>{val.name}</span>
                <div className="delete-button">
                    <i className="fa fa-close" onClick={() => this.deleteExercise(val)}></i>
                </div>
                
            </div>));
    }

    render(){
        return(
        <div className="exercise-list scrollable">
            {this.renderExerciseList()}
        </div>);
    }

    selectExercise = function(exercise) {
        this.props.selectExercise(exercise);
    }

    deleteExercise = function(exercise) {
        this.props.deleteExerciseAJAX(exercise);

    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    let allExercises = state.exercises.exerciseIds.map(id => ({ ...state.exercises.exercisesById[id]}));
    //let selectedExercise = { ...state.exercises.exercisesById[state.selections.exerciseId]}
    return { exercises: allExercises }
}

export default connect(mapStateToProps, {selectExercise, deleteExerciseAJAX})(ExerciseList);