import React from 'react';
import { connect } from 'react-redux';
import ExerciseSection from './exercise/ExerciseSection';
import WorkoutOrchesta from './workout/WorkoutOrchestra';
import PerformWorkout from './perform_workout/PerformWorkout';
import WorkoutHistory from './workout_history/WorkoutHistory';
import LoginComponent from './login/LoginComponent';
import RegisterComponent from './login/RegisterComponent';
import AdminSection from './admin/AdminSection';


class MainWindow extends React.Component{

    renderWindow(){
        switch(this.props.selection){
          case "login":
              return (<LoginComponent></LoginComponent>);
          case "workouts":
              return (<WorkoutOrchesta></WorkoutOrchesta>);
          case "exercises":
              return (<ExerciseSection></ExerciseSection>);
          case "perform_workout":
            return (<PerformWorkout></PerformWorkout>);
          case "workout_history":
            return (<WorkoutHistory></WorkoutHistory>);
          case "register":
            return (<RegisterComponent></RegisterComponent>)
          case "admin_console":
            return (<AdminSection></AdminSection>);
          default:
            console.log("UNABLE TO DETERMINE MAIN PAGE");
        }
      }

    render()
    {
        return (
            <div className="main-content">
                {this.renderWindow()}
            </div>);
    }
}

const mapStateToProps = (state, ownProps) =>
{
  return {selection: state.navigation.selection }

} 

export default connect(mapStateToProps, {})(MainWindow);
//export default WorkoutAppNavigation;