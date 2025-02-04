import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
const  Navbar = ({icon, title}) => { 
        return (
            <nav className = "navbar bg-primary">
                <h1>
                <i className = {icon}></i> {title} 
                </h1>
                <ul>
                    <li>
                        <Link to= "/">Home</Link>
                    </li>
                    <li>
                        <Link to= "/About">About</Link>
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
