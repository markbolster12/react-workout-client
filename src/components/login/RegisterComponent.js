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
            email:""
        }
    };

    updateField(target){
        this.setState({[target.name]:target.value})

    }

    submitRegistration = () => {
        this.props.registerUser(this.state);
    };


    render(){
        return (
        <div>
            <h2>Register</h2>
            <div><label>Username:</label><input type="text" name="username" value={this.state.username} onChange={e=>this.updateField(e.target)}></input></div>
            <div><label>Email:</label><input type="text" name="email" value={this.state.email} onChange={e=>this.updateField(e.target)}></input></div>
            <div><label>Password:</label><input type="password" name="password" value={this.state.password} onChange={e=>this.updateField(e.target)}></input></div>
            <div><label>Repeat Password:</label><input type="password" name="repeated_password" value={this.state.repeated_password} onChange={e=>this.updateField(e.target)}></input></div>
            <div><button className="btn btn-primary" onClick={this.submitRegistration}>Register</button></div>
        </div>);
    }


}

export default connect(null, { registerUser })(RegisterComponent);