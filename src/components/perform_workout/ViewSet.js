import React from 'react';
import './PerformWorkout.css';

export function ViewSet(props)
{
    return (
    <div className="set-list-item">
        <div className="set-title">{props.set.exercise.name}</div>
        <div className="set-details-container">
            <div class="set-details-padding"></div>
            <div>{props.set.reps} <span>reps</span> <span>of</span> {props.set.amount} <span>lbs</span></div>
            <div class="set-details-padding"></div>
        </div>
    </div>);

}
