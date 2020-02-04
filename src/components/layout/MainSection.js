import React from 'react';
import './main.css';

export default function MainSection(props){
    return (
    <div className="main-section">
        {props.children}
    </div>);
}