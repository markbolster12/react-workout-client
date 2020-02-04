import React from 'react';
import WorkoutHistoryList from './WorkoutHistoryList';
import { connect } from 'react-redux';
import { loadWorkouts } from 'actions/WorkoutHistoryActions';

class WorkoutHistory extends React.Component {

    constructor(props){
        super(props);
        let today = new Date();
        
        this.state = { year: today.getFullYear(), month: today.getMonth() + 1};
    }

    componentDidMount(){
        this.props.loadWorkouts(this.state.year, this.state.month);
    }

    render() {
        return(
        <div>
            <h3>Workouts</h3>
            <WorkoutHistoryList workouts={this.props.workouts} year={this.state.year} month={this.state.month}></WorkoutHistoryList>

        </div>);
    }
}

const mapStateToProps = (state, ownProps) => {
    return {workouts: state.workout_history.workouts};

}

export default connect(mapStateToProps, {loadWorkouts})(WorkoutHistory);