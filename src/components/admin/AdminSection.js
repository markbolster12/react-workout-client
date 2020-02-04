import React from 'react';
import CollapsibleListItem  from '../CollapsibleLisItem';
import { login } from '../../actions/LoginActions';
import { connect } from 'react-redux';
import GenerateUser from './GenerateUser'; 

class AdminSection extends React.Component {

    renderGenerateUser() {
        return (
        <div>
            <GenerateUser></GenerateUser>
        </div>
        );
    }
    
    auto_login(){
        console.log("Loggin in...");
        this.props.login("Bob", "test");
        console.log("Tried logging in");
    }

    render() {
        return (<div>
            <h1>Admin Console</h1>
            <button className="btn btn-primary btn-full" onClick={()=>this.auto_login()}>Auto Login</button>
            <CollapsibleListItem title={()=>(<h2>Generate User</h2>)} details={this.renderGenerateUser}></CollapsibleListItem>
        </div>);
    }


}

export default connect(null, { login })(AdminSection);