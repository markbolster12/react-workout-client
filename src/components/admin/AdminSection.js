import React from 'react';
import CollapsibleListItem  from '../CollapsibleLisItem';
import { login } from '../../actions/LoginActions';
import { connect } from 'react-redux';
import GenerateUser from './GenerateUser';
import GeneratePerformedWorkout from './GeneratePerformedWorkouts';

class AdminSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {start: "",
                      end: ""};
    }
    
    auto_login(){
        console.log("Logging in...");
        this.props.login("Bob", "test");
        console.log("Tried logging in");
    }

    changeState(e) {
        this.setState({[e.target.name]:e.target.value});
        console.log("State changed");


    }

    render() {
        return (<div>
            <h1>Admin Console</h1>
            <div><button className="btn btn-primary btn-full" onClick={()=>this.auto_login()}>Auto Login</button></div>
            <GenerateUser></GenerateUser>
            <GeneratePerformedWorkout></GeneratePerformedWorkout>
        </div>);
    }


}

export default connect(null, { login })(AdminSection);