import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import TaskApp from './components/TaskApp';

// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));


ReactDOM.render(<TaskApp /> , document.getElementById('root'));

/// to be completed with "operation"


registerServiceWorker();
