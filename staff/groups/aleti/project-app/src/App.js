import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import history from './components/history'
import { PrivateRoute } from './components/PrivateRoute';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import LandingPage from './components/LandingPage'

class App extends Component {

  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    // history.listen((location, action) => {
    //     // clear alert on location change
    //     //dispatch(alertActions.clear());
    // });
}

  render() {
    const { alert } = this.props;
    return (
        <Router history={history}>
            <div>
                <PrivateRoute path="/home" component={ HomePage } />
                <Route exact path="/" component={ LandingPage } />
                <Route path="/landing" component={ LandingPage } />
                <Route path="/login" component={ LoginPage } />
                <Route path="/register" component={ RegisterPage } />
            </div>
        </Router>
    );
}
}

export default App