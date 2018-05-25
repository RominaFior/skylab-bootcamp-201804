'use strict';

describe('logic (github)', () => {
    logic.token = '';

    it('should "tom" search get results', done => {
        const promise = logic.searchUsers('tom');

        promise
            .then(users => {
                expect(users).toBeDefined();
                expect(users instanceof Array).toBeTruthy();
                expect(users.length).toBe(30);

                done();
            })
            .catch(err => expect(err).toBeUndefined());
    });

    it('should "tom" retrieval get info', done => {
        logic
            .retrieveUser('tom')
            .then(user => {
                expect(user).toBeDefined();
                expect(user.login).toBe('tom');

                done();
            })
            .catch(err => expect(err).toBeUndefined());
    });

    it('should "fsadjklfasdjklfsajk432423432fsdfazzzr234f" search throw an error', done => {
        logic
            .searchUsers('fsadjklfasdjklfsajk432423432fsdfazzzr234f')
            .then(users => {
                expect(users).toBeDefined();
                expect(users instanceof Array).toBeTruthy();
                expect(users.length).toBe(0);

                done();
            })
            .catch(err => expect(err).toBeUndefined());
    });
});
