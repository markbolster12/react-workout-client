import React from 'react';
import { connect } from 'react-redux';
import { login } from 'actions/LoginActions';
import { clearErrors } from '../../actions/ApplicationActions';
import './login.scss';

class LoginComponent extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            username:"",
            password:""
        }
    }

    updateUsername(e){
        this.setState({username: e.target.value});
    }

    updatePassword(e) {
        this.setState({password: e.target.value});
    }

    render()
    {
        return (
            <div class="layout-3">
                <div class="centered_login">
                    <h3>Login Component</h3>
                    <div class="form-grid-single">
                        <div class="form-label"><label>Username</label></div><div><input type="text" value={this.state.username} onChange={(e) => this.updateUsername(e)}></input></div>
                        <div class="form-label"><label>Password</label></div><div><input type="password" value={this.state.password} onChange={(e) => this.updatePassword(e)}></input></div>
                    </div>
                    <div>{this.props.errors.map((e,i)=><div key={i}>{e.text}</div>)}</div>
                    
                    
                    <div><button className="btn btn-primary" onClick={()=>this.props.login(this.state.username, this.state.password)}>Login</button></div>            </div>
            </div>);
    }
    
}

const mapStateToProps = (state, ownProps) => {
   return {"errors": state.application.errors};
}

export default connect(mapStateToProps, { login, clearErrors })(LoginComponent);