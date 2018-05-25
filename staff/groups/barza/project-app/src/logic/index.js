import axios from 'axios';

const logic = {
    url: 'http://skylabcoders.herokuapp.com/api',
    token: '',
    headers() {
        return { headers: { Authorization: `Bearer ${this.token}` } };
    },

    registerUser(user) {
        return Promise.resolve().then(() => {
            if (typeof user !== 'object')
                throw Error('Input should be an Object');

            if (user.username === undefined || user.password === undefined)
                throw Error('Username and password are required');

            return axios.post(`${this.url}/user`, user).then(res => res.data);
        });
    },

    loginUser(user) {
        return Promise.resolve().then(() => {
            if (typeof user !== 'object')
                throw Error('Input should be an Object');

            if (user.username === undefined || user.password === undefined)
                throw Error('Username and password are required');

            return axios.post(`${this.url}/auth`, user).then(res => res.data);
        });
    },

    retrieveUser(id) {
        return Promise.resolve().then(() => {
            if (typeof id !== 'string') throw Error('id is invalid');

            if (id === '') throw Error('id cannot be empty');

            return axios
                .get(`${this.url}/user/${id}`, this.headers())
                .then(res => res.data);
        });
    },

    retrieveUsers() {
        return axios
            .get(`${this.url}/users`, this.headers())
            .then(res => res.data);
    },

    updateUser(id, user) {
        return Promise.resolve().then(() => {
            if (typeof id !== 'string') throw Error('id is invalid');

            if (id === '') throw Error('id cannot be empty');

            return axios
                .put(`${this.url}/user/${id}`, user, this.headers())
                .then(res => res.data);
        });
    },

    unregisterUser(id, user) {
        return Promise.resolve().then(() => {
            if (typeof id !== 'string') throw Error('id is invalid');

            if (id === '') throw Error('id cannot be empty');

            if (typeof user !== 'object')
                throw Error('Input should be an Object');

            if (user.username === undefined || user.password === undefined)
                throw Error('Username and password are required');

            return fetch(`${this.url}/user/${id}`, {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + this.token
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => data);
        });
    }
};

export default logic;
