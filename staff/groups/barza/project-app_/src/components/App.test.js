import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

import logic from './logic/logic';

const newUser = {
    name: 'Mikel',
    surname: 'Parra',
    email: 'mikelpmc@gmail.com',
    username: 'mp',
    password: 'mp123'
};

// Register
it('should logic.registerUser(newUser) register a user OK', done => {
    logic.registerUser(newUser).then(data => console.log(data));

    done();
});
