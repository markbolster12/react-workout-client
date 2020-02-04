import React from 'react';
import { connect } from 'react-redux';

class ExercisePicker extends React.Component{

    //The value of this should be controlled by the parent
    //Therefore it should take the value (an exercise) as a prop
    //To set the value of the parent, an onchange should set the parent exercise name
    // and an onselect should set the whole exercise of the parent
    // 
    /* Should pass in the on Change function to this component so that the value can be set*/
    constructor(props){
        super(props);
        this.state = {"exercises":[], visible:true, currEx: {...props.value}};
    }

    inputChange(e){
        /* When the input changes, a new list should be created and rendered*/
        let typedName = e.target.value;
        //this.props.updateName(typedName);
        
        let filteredList = this.props.exercises.filter((ex) => ex.name.includes(typedName));
        filteredList.forEach((x)=>{
            if(x.name === typedName){
                this.props.selected(x);
            }

        });
        //this.setState({...this.state, "visible": this.state.visible, "exercises": filteredList})
        //this.props.selected(e.target.value);
    }

    exercisesList(){
        return this.props.exercises.map(
        (ex) => (
            <option value={ex.name} key={ex.id}>{ex.name}</option>)
        );
    }

    render()
    {
        return (
        <span>
            <input list="exercises" onChange={(e) => this.inputChange(e)}></input>
            <datalist id="exercises">
                {this.exercisesList()}
            </datalist>
        </span>);
    }
}

const mapStateToProps = (state, ownProps) => {
    let exercises = [];
    exercises = state.exercises.exerciseIds.map((exId) => state.exercises.exercisesById[exId]);
    return {"exercises": exercises, "exerciseMap": state.exercises.exercisesById};
}

export default connect(mapStateToProps, {})(ExercisePicker);