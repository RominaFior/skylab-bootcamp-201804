import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Landing from './landing/Landing';
import Register from './register/Register';
import Login from './login/Login';

import Home from './home/Home';
import Play from './play/Play';
import Ranking from './ranking/Ranking';
import Weather from './weather/Weather';
import Profile from './profile/Profile';
import UpdateProfile from './updateProfile/UpdateProfile';
import Logout from './logout/Logout';

import NotFound from './utils/NotFound';

class App extends Component {
    state = {
        isLogged: false
    };

    componentDidMount() {
        if (localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem('user'));
            const token = user.token;

            token.length
                ? this.setState({ isLogged: true })
                : this.setState({ isLogged: false });
        }
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={({ location }) => {
                            return this.state.isLogged ? (
                                <Redirect to="/home" />
                            ) : (
                                <Landing />
                            );
                        }}
                    />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />

                    <Route exact path="/home" component={Home} />
                    <Route exact path="/play" component={Play} />
                    <Route exact path="/ranking" component={Ranking} />
                    <Route exact path="/weather" component={Weather} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/logout" component={Logout} />
                    <Route
                        exact
                        path="/profile/update"
                        component={UpdateProfile}
                    />

                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default App;
