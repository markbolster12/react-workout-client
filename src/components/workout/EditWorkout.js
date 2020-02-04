import { connect } from 'react-redux';
import React from 'react';
import { addWorkout, saveWorkoutAJAX } from '../../actions/WorkoutActions';
import ExercisePicker from './ExercisePicker';

const emptyWorkout = {name: "", description: "", sets: []};

class EditWorkout extends React.Component {

    constructor(props){
        super(props);
        this.state = {workout:{...emptyWorkout}};
    }

    handleNameChange = (e) => {
        this.setState({workout:{...this.state.workout, name: e.target.value}});
    }

    handleDescriptionChange = (e) => {
        this.setState({workout:{...this.state.workout, description: e.target.value}});
    }

    saveWorkout = () => {
        this.props.saveWorkoutAJAX(this.state.workout);
    }

    addExercise = () => {
        let sets = [...this.state.workout.sets];
        sets.push({})
        this.setState({workout: {...this.state.workout, sets}})
    }

    editExerciseName = (ind, val) => {
        let sets = this.state.workout.sets;
        sets[ind] = {...sets[ind], name:val}
        this.setState({workout: {...this.state.workout, sets: sets}});
    }

    editExerciseReps = (ind, val) => {
        let sets = this.state.workout.sets;
        sets[ind] = {...sets[ind], reps:val}
        this.setState({workout: {...this.state.workout, sets: sets}});
    }

    setExerciseId = (index, id) => {
        const sets = this.state.workout.sets;
        sets[index].id = id;

        this.setState({workout: {...this.state.workout, sets}})
    }

    renderExerciseList()
    {
        let exerciseList = this.state.workout.sets.map(
            (ex, index) => (
                <div key={index}>
                    <div>
                        <label>Exercise:</label>
                        <ExercisePicker selected={(selectedId) => this.setExerciseId(index, selectedId)}></ExercisePicker>
                    </div>
                    <div>
                        <label>Reps:</label>
                        <input type="number" value={ex.reps} onChange={(e) => this.editExerciseReps(index, e.target.value)}></input>
                    </div>
                </div>));
        return (<div>{exerciseList}</div>);
    }

    render(){
        return (
            <div className="edit-workout">
                <h5>New Workout</h5>
                <div className="grid-double">
                    <div><label>Name:</label></div>
                    <div className="formControl"><input type="text" value={this.state.workout.name} onChange={this.handleNameChange}></input></div>
                    
                    <div><label>Description:</label></div>
                    <div className="formControl"><input value={this.state.workout.description} onChange={this.handleDescriptionChange}></input></div>
                </div>
                <h3>Exercises</h3>
                <div className="list-container">
                    {this.renderExerciseList()}
                    
                </div>
                <button onClick={() => this.addExercise()}>Add Exercise</button>
                <button onClick={this.saveWorkout}>Save</button>
            </div>
        );
    }
}

export default connect(null, {addWorkout, saveWorkoutAJAX})(EditWorkout);