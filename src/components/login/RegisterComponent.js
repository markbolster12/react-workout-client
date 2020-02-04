import React from 'react';
import { connect } from 'react-redux';
import { registerUser } from 'actions/LoginActions';

class RegisterComponent extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            username: "",
            password: "",
            repeated_password: "",
        }
    };

    changeUsername = (e) => {
        this.setState({username: e.target.value});
    };

    changePassword = (e) => {
        this.setState({password: e.target.value});
    };

    changeRepeatedPassword = (e) => {
        this.setState({repeated_password: e.target.value});
    };

    submitRegistration = () => {
        this.props.registerUser(this.state);
    };


    render(){
        return (
        <div>
            <h2>Register</h2>
            <div><label>Username:</label><input type="text" value={this.state.username} onChange={this.changeUsername}></input></div>
            <div><label>Password:</label><input type="password" value={this.state.password} onChange={this.changePassword}></input></div>
            <div><label>Repeat Password:</label><input type="password" value={this.state.repeated_password} onChange={this.changeRepeatedPassword}></input></div>
            <div><button className="btn btn-primary" onClick={this.submitRegistration}>Register</button></div>
        </div>);
    }


}

export default connect(null, { registerUser })(RegisterComponent);