import React from 'react'
import { connect } from 'react-redux';

class CompletedWorkoutList extends React.Component {

    render(){
        return (
            <div>
                Hello Perform List
            </div>);

    }
}

export default connect(null, {})(CompletedWorkoutList);