import React, { Fragment, Component } from 'react'
import Spinner from "../layout/Spinner"; 
import Repos from "../repos/Repos"
import {Link} from 'react-router-dom'
class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login); 
        this.props.getUserRepos(this.props.match.params.login);
    } 
    render() {
        const {name, avatar_url, location, bio, blog, login, html_url, company, followers,
               following, publicr_repos, public_gists, hireable} = this.props.user;
        const {loading } = this.props;

        if (loading){
            return (<Spinner/>);
        }
        else {
        return (
            <Fragment>
            <Link to = "/" className = "btn btn-light">Back to Search</Link>
            Hireable :  {' '}
            {hireable ? <i className = "fas fa-check text-success" /> : <i className = "fas fa-times-circle text-danger" />}
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} className = "round-img" alt="" style = {{width:'150px'}}/>
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>
                <div>
                    {bio && <Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </Fragment>}
                    <a href={html_url} target = "_blank" className = "btn btn-dark my-1">Visit Github Profile</a>
                    <ul>
                        <li>
                            {login && <Fragment>
                                    <strong>Username: </strong> {login}
                                </Fragment>}
                        </li>
                        
                        <li>
                            {company && <Fragment>
                                    <strong>Company: </strong> {company}
                                </Fragment>}
                        </li>
                        
                        <li>
                            {blog && <Fragment>
                                    <strong>Website: </strong> {blog}
                                </Fragment>}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card text-center">

            <div className="badge badge-primary">Followers: {followers}</div>
            <div className="badge badge-success">Folllowing: {following}</div>
            <div className="badge badge-danger">Public Repos: {publicr_repos}</div>
            <div className="badge badge-dark">Public Gists: {public_gists}</div>
            </div>
            </Fragment>);
        }
    }
}

export default User 