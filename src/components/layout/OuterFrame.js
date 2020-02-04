import React from 'react';

export default function OuterFrame(props){
    return (<div className="main-frame fill-parent">{props.children}</div>);
}