import React, {Fragment, Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import axios from 'axios'; 
import Search from './components/users/Search';
import { render } from '@testing-library/react';
import About from './components/pages/About'
import Alert from './components/layout/Alert'


class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert:null
  }

  // async componentDidMount() {
  //   this.setState({loading:true}); 
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
  //   ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState({users:res.data, loading:false});
  // }
  //Search Github Users
  searchUsers = async text => {
    this.setState({loading:true}); 
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users:res.data.items, loading:false});
  }

  //Get Single User
  getUser = async (username) => {

    this.setState({loading:true}); 
    const res = await axios.get(`https://api.github.com/search/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({user: res.data, loading:false});

  }


  clearUsers = () => {
    this.setState({users:[], loading:false});
  }

  //Set alert
  setAlert = (msg, type) => {
    this.setState({alert:{msg: msg, type: type}});
    setTimeout(() => this.setState({alert : null}), 1500);
  }
  render()
  {   
    const {users, user, loading} = this.state;
    return (
      <div className="App">   
        <Router>
        <Navbar />  
        <div className="container">
        <Alert alert = {this.state.alert}/>
        <Switch>
          <Route exact path = "/" render = {props => (<Fragment>
        <Search searchUsers = {this.searchUsers} clearUsers = {this.clearUsers} showClear = {users.length > 0 ? true : false} 
        setAlert = {this.setAlert} > </Search>
        <Users loading = {this.state.loading} users = {users}></Users>
        
        </Fragment>)}/>
        <Route exact path = "/About" component = {About}></Route>
        <Route exact path = "/user/:login" render = {props => (<User {...props} getUser = {this.getUser} user = {user} loading = {loading}></User> )}></Route>
        </Switch>
        </div>
        </Router>
      </div>
    );
  }
};

export default App; 