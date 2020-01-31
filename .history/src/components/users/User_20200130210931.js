import React, { Fragment, Component } from 'react'
import Spinner from "../layout/Spinner"; 
import {Link} from 'react'
class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login); 
    } 
    render() {
        const {name, avatar_url, location, bio, blog, login, html_url, followers,
               following, publicr_repos, public_gists, hireable} = this.props.user;
        const {loading } = this.props;

        if (loading){
            return (Spinner);
        }
        else {
        return 
            <Fragment>
            <Link to = "/" className = "btn btn-light">Back to Search</Link>
                {name}
                
            </Fragment>
        }
    }
}

export default User 