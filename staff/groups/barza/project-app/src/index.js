import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './index.css';

import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
