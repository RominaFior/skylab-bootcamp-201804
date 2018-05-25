// import axios from 'axios';

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
            if (user.username === '' || user.password === '')
                throw Error('username and password cannot be empty');

            return axios.post(`${this.url}/user`, user).then(res => res.data);
        });
    },

    loginUser(user) {
        return Promise.resolve().then(() => {
            if (typeof user !== 'object')
                throw Error('Input should be an Object');

            if (user.username === undefined || user.password === undefined)
                throw Error('Username and password are required');
            if (user.username === '' || user.password === '')
                throw Error('username and password cannot be empty');

            return axios.post(`${this.url}/auth`, user).then(res => res.data);
        });
    },

    retrieveUser(id) {
        return Promise.resolve().then(() => {
            if (typeof id !== 'string') throw Error('id is invalid');
            if (id === '') throw Error('');
            return axios
                .get(`${this.url}/user/${id}`, this.headers())
                .then(res => res.data);
        });
    },

    updateUser(id, user) {
        return Promise.resolve().then(() => {
            if (typeof id !== 'string') throw Error('id is invalid');
            if (id === '') throw Error('id cannot be empty');

            return axios1
                .put(`${this.url}/user/${id}`, user, this.headers())
                .then(res => res.data);
        });
    }
};

// export default logic;
