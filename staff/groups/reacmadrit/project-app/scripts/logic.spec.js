'use strict'

describe('logic (project)', () => {

    it('should REGISTER new user toni return status OK and ID', done => {
        logic.register('toni1434632424', '123').then(response => {
            expect(response).toBeDefined()
            expect(response instanceof Object).toBeTruthy()
            expect(response.status).toBe("OK")
            done()
        })
    })
    it('should REGISTER new user toni throw error', function () {
        expect(function () {
            logic.register('123')
        }).toThrowError('input must be strings')
    })


    it('should LOGIN from toni return status OK and new token', done => {
        logic.login('toni', '123').then(response => {
            expect(response).toBeDefined()
            expect(response instanceof Object).toBeTruthy()
            expect(response.data).toBeDefined()
            done()
        })

    })

    it('should LOGIN user toni throw error', function () {
        expect(function () {
            logic.register('123')
        }).toThrowError('input must be strings')
    })

    it('should LOGIN from toni and wrong password receive an object with error message', done => {
        logic.login('toni', '124').then(response => {
            expect(response).toBeDefined()
            expect(response instanceof Object).toBeTruthy()
            expect(response.error).toBe('username and/or password wrong')
            done()
        })
    })


    it('should RETRIEVE from toni 123 return status OK and data object with username and id', done => {
        logic.login('toni', '123')
            .then(response => {
                logic.retrieve(response.data.id, response.data.token)
                    .then(response => {
                        expect(response).toBeDefined()
                        expect(response instanceof Object).toBeTruthy()
                        expect(response.data.id).toBeDefined()
                        done()
                    })
            })
    })

    it('should RETRIEVE from toni 123 and wrong token receive a message error', done => {
        logic.login('toni', '123')
            .then(response => {
                logic.retrieve(response.data.id, 'kqjqwejiqew')
                    .then(response => {
                        expect(response).toBeDefined()
                        expect(response instanceof Object).toBeTruthy()
                        expect(response.error).toBe('invalid token')
                        done()
                    })
            })
    })

    it('should UPDATE age and height from Toni', done => {
        let loginObj
        logic.login('toni', '123')
            .then(response => {
                loginObj = response.data
                logic.update(response.data.id, response.data.token, 'toni', '123', { 'age': 20, 'height': 175 })
                    .then(response => {
                        logic.retrieve(loginObj.id, loginObj.token).then(res => {
                            expect(res.data.age).toBe(20)
                            expect(res.data.height).toBe(175)
                            done()
                        })
                        expect(response).toBeDefined()
                        expect(response instanceof Object).toBeTruthy()
                        expect(response.status).toBe('OK')
                    })
            })

    })



    it('should UPDATE age throw error because one value is an object', done=> {
        let loginObj
        logic.login('toni', '123')
            .then(response => {
                loginObj = response.data
                expect(function() {
                    logic.update(response.data.id, response.data.token, 'toni', '123', { 'age': {20:"xx"}  })
                }).toThrowError('All values must be primitives')
                done()
            })
    })

    it('should DELETE age from Toni', done => {
        let loginObj
        logic.login('toni', '123')
            .then(response => {
                loginObj = response.data
                logic.update(response.data.id, response.data.token, 'toni', '123', { 'age': 20 })
                    .then(res => {
                        return logic.delete(loginObj.id, loginObj.token, 'toni', '123', 'age')
                    })
                    .then(response => {
                        logic.retrieve(loginObj.id, loginObj.token).then(res => {
                            expect(res.data.age).toBeUndefined()
                            done()
                        })
                        expect(response).toBeDefined()
                        expect(response instanceof Object).toBeTruthy()
                        expect(response.status).toBe('OK')
                    })
            })
    })


    it('should UNREGISTER pepitoalberto', done => {
        let loginObj
        logic.register('pepitoalberto', '123').then(res => {
            return logic.login('pepitoalberto', '123')
        }).then(response => {
            loginObj = response.data
            logic.unregister('pepitoalberto', '123', loginObj.token, loginObj.id)
                .then(response => {
                    logic.login('pepitoalberto', '123').then(response => {
                        expect(response).toBeDefined()
                        expect(response instanceof Object).toBeTruthy()
                        expect(response.error).toBe('user with username "pepitoalberto" does not exist')
                        done()
                    })
                })
            expect(response).toBeDefined()
            expect(response instanceof Object).toBeTruthy()
            expect(response.status).toBe('OK')
        })
    })
    it('should UNREGISTER user pepitoalberto throw error', function () {
        expect(function () {
            logic.unregister('123')
        }).toThrowError('inputs must be strings')
    })

})