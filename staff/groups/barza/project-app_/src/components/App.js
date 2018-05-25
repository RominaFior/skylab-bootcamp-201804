import React, { Component } from 'react';
import logic from '../logic';
import { Link, Route } from 'react-router-dom';
import './App.css';
import Landing from './landing/Landing';
import Register from './register/Register';
import Login from './Login/login';

class App extends Component {
    state = {};
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Route exact path="/" component={Landing} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
            </div>
        );
    }
}

export default App;
