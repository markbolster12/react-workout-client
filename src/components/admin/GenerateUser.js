import React from 'react';
import {settings} from '../../services/settings';
import { headers } from '../../services/authentication';


class GenerateUser extends React.Component {

    constructor(props){
        super();
        this.state = {
            name:"",
        }
        this.updateName = this.updateName.bind(this);
        this.generate_user = this.generate_user.bind(this);
    }

    updateName(e){
        this.setState({name: e.target.value});
    }

    generate_user(){
        console.log("Generating User...");
        const user = {
            username:this.state.name,
            password:"test"
        };
        fetch(settings.base_url + "/registration",
        {
            method: 'POST', 
            mode: 'cors',
            cache: 'no-cache',
            headers: headers,
            body: JSON.stringify(user)
        }).then((resp) =>  {
            resp.json()
                .then((json_body)=>console.log("JSON BODY:", json_body)
            )},
            (err) => console.log("ERR", err));

    }

    render()
    {
        return (
        <div>
            <label>Name:</label><input name="name" value={this.state.name} onChange={(e)=>this.updateName(e)}></input>
            <button className="btn btn-primary btn-full" onClick={this.generate_user}>Create User</button>
        </div>
        );
    }
}

export default GenerateUser;