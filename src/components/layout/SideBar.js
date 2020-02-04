import React from 'react';
import './sidebar.css';

export default function(props) {
    return (
    <div className="sidebar scrollable">
        {props.children}
    </div>);
}