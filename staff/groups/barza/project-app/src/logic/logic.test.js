const user = {
    username: 'mp86',
    password: 'mp123',
    name: 'mikel'
};

const userUpdate = {
    username: 'mp86',
    newUsername: 'mp87',
    password: 'mp123'
};

const userUnregister = {
    username: 'mp87',
    password: 'mp123'
};

let tokenOK = '';
let _id = '';

describe('logic User REGISTER API (manu)', () => {
    // Register User OK
    it('should logic.registerUser(user) register a user with status OK', done => {
        const promise = logic.registerUser(user);

        promise
            .then(res => {
                expect(res.status).toBe('OK');
                expect(res.data.id).toBeDefined();

                done();
            })
            .catch(done);
    });

    // Register USER KO (Already exists)
    it('should logic.registerUser(user) throw error with status KO', done => {
        const promise = logic.registerUser(user);

        promise
            .then(res => {
                expect(res.status).toBe('KO');
                expect(res.error).toBe(
                    'user with username "' + user.username + '" already exists'
                );

                done();
            })
            .catch(done);
    });

    it('should logic.registerUser("") throw error', done => {
        const promise = logic.registerUser('');

        promise
            .catch(err => {
                expect(err).toBeDefined();
                expect(err.message).toBe('Input should be an Object');

                done();
            })
            .catch(done);
    });

    it('should logic.registerUser({}) throw error', done => {
        const promise = logic.registerUser({});

        promise
            .catch(err => {
                expect(err).toBeDefined();
                expect(err.message).toBe('Username and password are required');

                done();
            })
            .catch(done);
    });

    it('should logic.registerUser({username:"", password:""}) throw error', done => {
        logic
            .registerUser({ username: 'mpc0432432', password: '' })
            .then(res => {
                expect(res.error).toBeDefined();
                expect(res.error).toBe('password is empty or blank');

                done();
            })
            .catch(done);
    });
});

describe('logic User LOGIN API (manu)', () => {
    it('it should loginUser(user) return status OK', done => {
        logic
            .loginUser(user)
            .then(res => {
                expect(res.status).toBe('OK');
                expect(res.data.id.length).toBeGreaterThan(0);
                expect(res.data.token.length).toBeGreaterThan(0);

                _id = res.data.id;

                logic.token = res.data.token;
                tokenOK = res.data.token;

                done();
            })
            .catch(done);
    });

    it('should logic.loginUser("") throw error', done => {
        const promise = logic.loginUser('');

        promise
            .catch(err => {
                expect(err).toBeDefined();
                expect(err.message).toBe('Input should be an Object');

                done();
            })
            .catch(done);
    });

    it('should logic.registerUser({}) throw error', done => {
        const promise = logic.loginUser({});

        promise
            .catch(err => {
                expect(err).toBeDefined();
                expect(err.message).toBe('Username and password are required');

                done();
            })
            .catch(done);
    });

    it('should logic.loginUser({username: "mp18", password:"111"}) throw Error', done => {
        logic
            .loginUser({ username: 'mp18', password: '111' })
            .then(res => {
                expect(res.status).toBe('KO');
                expect(res.error).toBe('username and/or password wrong');

                done();
            })
            .catch(done);
    });
});

describe('logic User RETRIEVE API (manu)', () => {
    it('should logic.retrieveUser("' + _id + '") return user data', done => {
        logic
            .retrieveUser(_id)
            .then(res => {
                expect(res.status).toBe('OK');
                expect(res.data.name).toBe(user.name);
                expect(res.data.id).toBe(_id);

                done();
            })
            .catch(done);
    });

    it(
        'should logic.retrieve("' + _id + '") with invalid token throw error',
        done => {
            logic.token = 'fdsfdsfsdf';

            logic
                .retrieveUser(_id)
                .then(res => {
                    expect(res.status).toBe('KO');
                    expect(res.error).toBe('invalid token');

                    done();
                })
                .catch(done);
        }
    );

    it('should logic.retrieve() throw error', done => {
        logic
            .retrieveUser()
            .catch(res => {
                expect(res.message).toBe('id is invalid');

                done();
            })
            .catch(done);
    });
});

describe('logic user UPDATE API (manu)', () => {
    it('should logic.updateUser(id, user) update user', done => {
        logic.token = tokenOK;

        logic
            .updateUser(_id, userUpdate)
            .then(res => {
                expect(res.status).toBe('OK');

                done();
            })
            .catch(done);
    });

    it('should logic.updateUser(1) throw error', done => {
        logic
            .updateUser(1)
            .catch(res => {
                expect(res.message).toBe('id is invalid');

                done();
            })
            .catch(done);
    });
});

describe('logic user UNREGISTER API', () => {
    it('should logic.unregisterUser(id, user) should delete the user', done => {
        logic
            .unregisterUser(_id, userUnregister)
            .then(res => {
                expect(res.status).toBe('OK');

                done();
            })
            .catch(done);
    });
});
