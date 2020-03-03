import React from 'react';

export default function(props) {
    return (
    <div className="sidebar scrollable">
        {props.children}
    </div>);
}