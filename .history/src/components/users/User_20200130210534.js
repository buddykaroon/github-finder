import React, { Component } from 'react'
import Spinner from "../layout/Spinner"; 
export class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login); 
    } 
    render() {
        const {name, avatar_url, location, bio, blog, login, html_url, followers,
               following, publicr_repos, public_gists, hireable} = this.props.user;
        const {loading } = this.props;
        return (
            <div>
                {name}
                
            </div>
        )
    }
}

export default User 