import React from 'react';
import { connect } from 'react-redux';
import { registerUser, testGetExercise } from '../actions/LoginActions';

class UserMgmtOrchestra extends React.Component {

    constructor(props)
    {
        super(props);
        console.log(props);
    }

    render(){
        return (<div><span>LOGIN ORCHESTRA</span>
                <button onClick={() => this.props.registerUser()}>Register User</button>
                <button onClick={() => this.props.testGetExercise()}>GetExercises</button></div>);
    }
}

export default connect(null, {registerUser, testGetExercise})(UserMgmtOrchestra);