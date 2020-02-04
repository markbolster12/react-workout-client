import React from 'react';

class CollapsibleListItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {expanded: false}
        this.toggleExpanded = this.toggleExpanded.bind(this);
    }

    toggleExpanded() {
        this.setState({expanded: !this.state.expanded})
    }

    render(){
        let inside = this.state.expanded?<div>{this.props.details()}</div>:<div></div>;
        return (
            <div>
                <div onClick={this.toggleExpanded}>{this.props.title()}</div>
                <div>{inside}</div>
            </div>
        );
    }


}

export default CollapsibleListItem;