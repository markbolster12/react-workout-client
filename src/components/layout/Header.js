import React from 'react';
import './header.css'

function Header(props) {
    return (<div className="header">
        {props.menu_button()}
    </div>);
}

export default Header;