import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import { render } from '@testing-library/react';
import Alert from './components/layout/Alert'
class App extends Component {
  state = {
    users: [],
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
    return (
      <div className="App">   
        <Navbar />  
        <div className="container">
        <Alert alert = {this.state.alert}/>
        <Switch>
          <Route exact path = "/" render = {props => ()}/>
        </Switch>
        <Search searchUsers = {this.searchUsers} clearUsers = {this.clearUsers} showClear = {this.state.users.length > 0 ? true : false} 
        setAlert = {this.setAlert} > </Search>
        <Users loading = {this.state.loading} users = {this.state.users}></Users>
        </div>
      </div>
    );
  }
};

export default App; 