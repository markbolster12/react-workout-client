import React from 'react';
import CollapsibleListItem  from '../CollapsibleLisItem';
import { login } from '../../actions/LoginActions';
import { connect } from 'react-redux';
import GenerateUser from './GenerateUser';
import {generatePerformedWorkout} from '../../actions/DevActions';

class GeneratePerformedWorkout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {start: "",
                      end: ""};
    }

    changeState(e) {
        this.setState({[e.target.name]:e.target.value});
        console.log("State changed");
    }

    render() {
        return (<div>
            <h4>Generate Performed Workout</h4>
            <label>Start Date:</label><input type="date" name="start" value={this.state.start} onChange={(e)=>this.changeState(e)}></input>
            <label>End Date:</label><input type="date" name="end" value={this.state.end} onChange={(e)=>this.changeState(e)}></input>
            <div><button className="btn btn-primary btn-full" onClick={()=>this.props.generatePerformedWorkout(this.state)}>Generate Performed Workout</button></div>
        </div>);
    }


}

export default connect(null, { generatePerformedWorkout })(GeneratePerformedWorkout);