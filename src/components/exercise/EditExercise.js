import React from 'react';
import { connect } from 'react-redux';
import { editExercise, saveExercise, newExercise } from '../../actions/ExerciseActions';

class EditExercise extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {exercise: {...props.exercise}};

    }

    handleNameChange = (e) => {
        this.props.editExercise({...this.props.exercise, name:e.target.value});
    }

    handleDescriptionChange = (e) => {
        this.props.editExercise({...this.props.exercise, description:e.target.value});
    }

    handleSaveExercise = (exercise) => {
        this.props.saveExercise(exercise);
    }

    render() {
        return (<div>
                    <button className="btn btn-primary" onClick={()=>this.props.newExercise()}>New</button>
                    <div className="screen-double">
                        <div className="grid-double input-group">
                            <label>Name: </label>
                            <input onChange={(event)=> this.handleNameChange(event)} value={this.props.exercise.name}></input>
                            
                            <label>Description: </label>
                            <input onChange={(event)=> this.handleDescriptionChange(event)} value={this.props.exercise.description}></input>
                            
                        </div>
                        <div></div>
                    </div>
                    <button className="btn btn-primary btn-full" onClick={()=>this.handleSaveExercise(this.props.exercise)}>Save</button>
                    
                </div>);
    }

}



export default connect(null,{editExercise, saveExercise, newExercise})(EditExercise);