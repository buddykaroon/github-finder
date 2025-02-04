import React, { Component } from 'react'
import UserItem from './UserItem'
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner'
const Users = ({users, loading}) => {
    if (loading){
        return <Spinner></Spinner>
    }
    else { 
        return ( 
            <div style = {userStyle}>
               
                { console.log(users);users.map(user => 
                    (
                    <UserItem key = {user.id} user = {user}/>
                    )
                    )}
            </div>
        ); 
    } 
}

const userStyle = { 
    display : 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}
export default Users
