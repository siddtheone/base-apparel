import React from 'react';
import logo from '../../images/logo.svg';

export default function Header() {
    return (
        <div className="container">
            <img src={logo} alt="Base Apperal logo" style={{'max-width': '158px'}} />
        </div>
    )
}