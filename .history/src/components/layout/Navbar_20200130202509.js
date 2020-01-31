import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from '';
const  Navbar = ({icon, title}) => { 
        return (
            <nav className = "navbar bg-primary">
                <h1>
                <i className = {icon}></i> {title} 
                </h1>
                <ul>
                    <li>

                    </li>
                    <li>

                    </li>
                </ul>
            </nav>
        );
}; 
//Passing in properties. 
Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};
//Requirements
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};
export default Navbar
