import React from 'react';
import { connect } from 'react-redux';
import { registerUser } from 'actions/LoginActions';
import { clearErrors } from '../../actions/ApplicationActions';
import './register.scss';

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
        this.setState({[target.name]:target.value});
        console.log(this.props.errors);
        if(this.props.errors.length > 0){
            console.log("CLEARING THE ERRORS");
            this.props.clearErrors();
        }

    }

    submitRegistration = () => {
        this.props.registerUser(this.state);
    };


    render(){
        return (
            <div className="layout-3">
                <div className="centered">
                <h2>Register</h2>
                <div className="form-grid-single">
                    <label>Username:</label><input type="text" name="username" value={this.state.username} onChange={e=>this.updateField(e.target)}></input>
                    <label>Email:</label><input type="text" name="email" value={this.state.email} onChange={e=>this.updateField(e.target)}></input>
                    <label>Password:</label><input type="password" name="password" value={this.state.password} onChange={e=>this.updateField(e.target)}></input>
                    <label>Repeat Password:</label><input type="password" name="repeated_password" value={this.state.repeated_password} onChange={e=>this.updateField(e.target)}></input>
                </div>
            <div>{this.props.errors.map((e)=><div>{e.text}</div>)}</div>
            <div><button className="btn btn-primary" onClick={this.submitRegistration}>Register</button></div>
        </div>
        </div>);
    }


}

function mapStateToProps(state, ownProps)
{
    return {
        "errors": state.application.errors
    }
}

export default connect(mapStateToProps, { registerUser, clearErrors })(RegisterComponent);