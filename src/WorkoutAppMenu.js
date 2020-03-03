import React from 'react';
import { connect } from 'react-redux';
import { selectPrimaryView } from 'actions/NavigationActions';
import { getExercises } from 'actions/ExerciseActions';
import { logout } from 'actions/LoginActions';
import {
    Link
} from "react-router-dom";


class WorkoutAppMenu extends React.Component{

    render(){
        return (
            <div className="">
                {!this.props.logged_in?
                <Link to="/login"><div className="menu-item">Login</div></Link>
                :<div className="menu-item" onClick={this.props.logout}>Logout</div>}
                
                {!this.props.logged_in?<Link to="/register"><div className="menu-item">Register</div></Link>:<div style={{display:"none"}}></div>}
                
                <Link to="/exercises"><div className="menu-item">Exercises</div></Link>
                <Link to="/workout"><div className="menu-item">Workout</div></Link>
                <Link to="/history"><div className="menu-item">History</div></Link>
                <Link to="/admin"><div className="menu-item">Admin</div></Link>
            </div>
        );
    }

    changeView(viewName) {
        this.props.selectPrimaryView(viewName);
    }
}

const mapStateToProps = (state, ownProps) =>
{
    const logged_in = state.login.token===""?false:true;
    console.log(state.login);
    return {
        selection: state.navigation.selection,
        logged_in
 }

} 

export default connect(mapStateToProps, {selectPrimaryView, getExercises, logout})(WorkoutAppMenu);
