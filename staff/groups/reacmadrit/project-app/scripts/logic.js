'use strict'
let logic;

(function () {
    logic = {
        url: 'https://skylabcoders.herokuapp.com/api/',

        register(user, pass) {
            return action(user, pass, 'user/', this.url)
        },

        login(user, pass) {
            return action(user, pass, 'auth/', this.url)
        },

        retrieve(userID, token) {
            let dataPackage = {
                method: 'GET',
                headers: new Headers({
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                })
            }
            if (typeof userID !== 'string' || typeof token !== 'string') {
                throw Error('input must be strings')
            }

            return fetch(this.url + `user/${userID}`, dataPackage)
                .then(res => res.json())
                .catch(err => err.message)
        },

        update(userID, token, user, pass, newProps) {
            if (typeof userID !== 'string' || typeof token !== 'string' || typeof user !== 'string' || typeof pass !== 'string' || typeof newProps !== 'object') {
                throw Error('everything must be strings and newProps must be an object')
            }
            let body = {
                username: user,
                password: pass
            }
            for (const key in newProps) {
                if (key === 'username' || key === 'password') {
                    throw Error('You cannot delete your username or password')
                }
                if (newProps[key] instanceof Object) {
                    throw Error('All values must be primitives')
                }
                body[key] = newProps[key]
            }
            let dataPackage = {
                method: 'PUT',
                body: JSON.stringify(body),
                headers: new Headers({
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                })
            }
            return fetch(this.url + `user/${userID}`, dataPackage)
                .then(res => res.json())
                .catch(err => err.message)
        },

        delete(userID, token, user, pass, propertyToDelete) {
            if (typeof userID !== 'string' || typeof token !== 'string' || typeof user !== 'string' || typeof pass !== 'string' || typeof propertyToDelete !== 'string') {
                throw Error('everything must be strings')
            }
            let body = {
                username: user,
                password: pass
            }
            if (propertyToDelete === 'username' || propertyToDelete === 'password') {
                throw Error('You cannot delete your username or password')
            }

            body[propertyToDelete] = null


            let dataPackage = {
                method: 'PUT',
                body: JSON.stringify(body),
                headers: new Headers({
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                })
            }
            return fetch(this.url + `user/${userID}`, dataPackage)
                .then(res => res.json())
                .catch(err => err.message)
        },

        unregister(user, pass, token, id) {
            let dataPackage = {
                method: 'DELETE',
                body: JSON.stringify({
                    username: user,
                    password: pass
                }),
                headers: new Headers({
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                })
            }
            if (typeof user !== 'string' || typeof pass !== 'string' || typeof token !== 'string' || typeof id !== 'string') {
                throw Error('inputs must be strings')
            }

            return fetch(this.url + `user/${id}`, dataPackage)
                .then(res => res.json())
                .catch(err => err.message)
        }

    }

    function action(user, pass, path, url) {
        let dataPackage = {
            method: 'POST',
            body: JSON.stringify({
                username: user,
                password: pass
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }
        if (typeof user !== 'string' || typeof pass !== 'string') {
            throw Error('input must be strings')
        }

        return fetch(url + path, dataPackage)
            .then(res => res.json())
            .catch(err => err.message)
    }
})()

