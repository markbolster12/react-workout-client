import React from 'react'
import { connect } from 'react-redux';
import Select from 'react-select';
import { addSet } from 'actions/PerformWorkoutActions';
import './PerformWorkout.css';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: "black",
    fontSize: 10    //Should look into class based styling
  }),
  control:(base) => ({
    ...base,
    minHeight:0
  }),
  valueContainer: (base) => ({
    ...base,
    fontSize:10
  }),
  indicatorsContainer: (base) => ({
    ...base,
    padding:2,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    padding:2,
  }),
  singleValue: (provided, state) => {

    return { ...provided};
  }
}

class PerformSet extends React.Component {

    emptySet = {
        selectedExercise:null,
        exercise: {},
        exerciseId: "",
        reps: 0,
        amount: 0
    }

    constructor(props){
        super(props);
        this.state = {
            ...this.emptySet
        };
    }

    render(){
        let options = this.props.exercises.map(
            (ex) => {
                let opt = {value: ex.name, label:ex.name};
                return opt;
            });
        const { selectedOption } = this.state.exerciseId;
        return (
            <div>
                <div className="screen-double">
                    <div className="grid-double input-group">
                        <label></label>
                        
                            <Select 
                                styles={customStyles} 
                                options={options} 
                                value={selectedOption} 
                                onChange={this.selectExercise}>
                            </Select>
                        
                        <label>Reps</label><input type="number" onChange={this.updateReps} value={this.state.reps}></input>
                        <label>Weight</label><input type="number" onChange={this.updateAmount} value={this.state.amount}></input>
                    </div>
                    <button className="btn btn-success" onClick={this.addSet}>Add Set</button>
                </div>
                
            </div>);
    }


    selectExercise = exer =>
    {
        this.setState({exerciseId: exer.value});
        if(exer.value)
        {
            this.setState({exerciseId: exer.value});
        }
        else{
            this.setState({...this.emptySet});
        }
          
    };

    updateReps = (e) =>
    {
        this.setState({reps: e.target.value});
    };

    updateAmount = (e) =>
    {
        this.setState({amount: e.target.value});
    }

    addSet = () =>
    {
        console.log("he");
        if(this.state.exerciseId!==""){
            let selected = {reps:this.state.reps, amount:this.state.amount, exercise:{...this.props.exerciseMap[this.state.exerciseId]}};
            this.selectExercise({value:"",label:""});
            this.props.addSet(selected);
        }
        else{
            console.log("exercise is blank");
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    let exercises = [];
    exercises = state.exercises.exerciseIds.map((exId) => state.exercises.exercisesById[exId]);
    return {"exercises": exercises, "exerciseMap": state.exercises.exercisesById};
}

export default connect(mapStateToProps, { addSet })(PerformSet);