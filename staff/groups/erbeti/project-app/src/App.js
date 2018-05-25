import React, { Component } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import logic from './logic';
import './App.css';
import Landing from './components/Landing/Landing'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import RegisterUser from './components/RegisterUser/RegisterUser'
import Xtorage from './Xtorage'

class App extends Component {

  

  render() {
    return (
      <Switch>
        <main>
          <div className="App">
            <Route exact path="/" component={Landing} />
          
            <Route path="/login" component={Login} />
            <Route path="/register" component={RegisterUser} />
          
            <Route path="/home" render={()=> ((Xtorage.session.get("user") === null)? (<Redirect to="/"/>):(<Home/>))}/>
          
            <Route path="/profile" render={()=> ((Xtorage.session.get("user") === null)? (<Redirect to="/"/>):(<Profile/>))}/>
            </div>
        </main>
      </Switch>
    );
  }
}

export default withRouter(App);

//<Route exact path="/" render={() => (
//   loggedIn ? (
//     <Redirect to="/dashboard"/>
//   ) : (
//     <PublicHomePage/>
//   )
// )}/>