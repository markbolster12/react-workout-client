import React from 'react';
import { connect } from 'react-redux';
import { selectPrimaryView } from 'actions/NavigationActions';
import { getExercises } from 'actions/ExerciseActions';
import { logout } from 'actions/LoginActions';


class WorkoutAppMenu extends React.Component{

    render(){
        console.log(this.props.logged_in);
        return (
            <div className="">
                {!this.props.logged_in?
                <div className="" onClick={() => this.changeView("login")}>Login</div>
                :<div className="" onClick={this.props.logout}>Logout</div>}
                
                
                <div className="" onClick={() => this.changeView("register")}>Register</div>
                <div className="" onClick={() => this.changeView("exercises")}>Exercises</div>
                {/*<div className="menu-list-item" onClick={() => this.changeView("workouts")}>Workouts</div>*/}
                <div className="" onClick={() => this.changeView("perform_workout")}>Perform Workout</div>
                <div className="" onClick={() => this.changeView("workout_history")}>Workout History</div>
                <div className="" onClick={() => this.changeView("admin_console")}>Admin</div>
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
