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

    changeDate(target){
        this.setState({[target.name]:target.value});
        if (target.value==="")
        {
            return;
        }
        if(target.name==="month")
        {
            this.props.loadWorkouts(this.state.year, target.value);
        }
        else{
            this.props.loadWorkouts(target.value, this.state.month);
        }
        

    }

    render() {
        return(
        <div>
            <h3>Workouts</h3>
            <label><input type="number" name="year" value={this.state.year} onChange={(e)=>this.changeDate(e.target)}></input></label>
            <label><input type="number" name="month" value={this.state.month} onChange={(e)=>this.changeDate(e.target)}></input></label>

            <div className="list-container scrollable">
                <WorkoutHistoryList workouts={this.props.workouts} year={this.state.year} month={this.state.month}></WorkoutHistoryList>
            </div>
        </div>);
    }
}

const mapStateToProps = (state, ownProps) => {
    return {workouts: state.workout_history.workouts};

}

export default connect(mapStateToProps, {loadWorkouts})(WorkoutHistory);