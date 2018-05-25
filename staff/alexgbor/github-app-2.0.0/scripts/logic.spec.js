'use strict'

describe('logic (github)', () => {
    logic.token='c1e4a0a5fb40304acc81c9c174f991a46c9042f4'
    it('should "tom" search get results', done => {
        logic.searchUsers('tom')
            .then(users => {
                expect(users).toBeDefined()
                expect(users instanceof Array).toBeTruthy()
                expect(users.length).toBe(30)

                done()
            })
            .catch(err => expect(err).toBeUndefined())
    })

    it('should "tom" retrieval get info', done => {
        logic.retrieveUser('tom')
            .then(user => {
                expect(user).toBeDefined()
                expect(user.login).toBe('tom')

                done()
            })
            .catch(err => expect(err).toBeUndefined())
    })
})