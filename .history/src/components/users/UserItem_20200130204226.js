import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
const UserItem = ({user:{login, html_url, avatar_url}}) => { 
        //Restructuring. Pulling out the variables.  
        return (
            <div className = "card text-center">
                <img src = {avatar_url} alt = "" className = "round-img" style = {{ width: '60px'}}></img>
            <h3>{login}</h3>
            <div>
            <a href={html_url} className = "btn btn-dark btn-sm my-1">Profile</a>
            </div>
            </div>
        ) 
};
UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}
export default UserItem
