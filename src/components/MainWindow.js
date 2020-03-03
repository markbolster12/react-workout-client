import React from 'react';
import { connect } from 'react-redux';
import ExerciseSection from './exercise/ExerciseSection';
import PerformWorkout from './perform_workout/PerformWorkout';
import WorkoutHistory from './workout_history/WorkoutHistory';
import LoginComponent from './login/LoginComponent';
import RegisterComponent from './login/RegisterComponent';
import AdminSection from './admin/AdminSection';
import {
  Switch,
  Route,
} from "react-router-dom";


class MainWindow extends React.Component{

  render()
  {
    return (
      <div className="main-content-container">
        <div className="main-content">
          <Switch>
            <Route path="/login">
              <LoginComponent></LoginComponent>
            </Route>
            <Route path="/register">
              <RegisterComponent></RegisterComponent>
            </Route>
            <Route path="/exercises">
              <ExerciseSection></ExerciseSection>
            </Route>
            <Route path="/workout">
              <PerformWorkout></PerformWorkout>
            </Route>
            <Route path="/history">
              <WorkoutHistory></WorkoutHistory>
            </Route>
            <Route path="/admin">
              <AdminSection></AdminSection>
            </Route>
          </Switch>
        </div>
      </div>);
  }

  //end class
}

const mapStateToProps = (state, ownProps) =>
{
  return {selection: state.navigation.selection }
} 

export default connect(mapStateToProps, {})(MainWindow);
