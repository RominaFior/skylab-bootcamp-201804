describe('logic User REGISTER API (manu)', () => {
    const user = {
        name: 'Mikel',
        surname: 'Parra',
        email: 'mikelpmc@gmail.com',
        username: 'mp18',
        password: 'mp123'
    };

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
                    'user with username "mp15" already exists'
                );

                done();
            })
            .catch(done);
    });

    it('should logic.registerUser("") throw error', done => {
        const promise = logic.registerUser('');

        promise.catch(err => {
            expect(err).toBeDefined();
            expect(err.message).toBe('Input should be an Object');

            done();
        });
    });

    it('should logic.registerUser({}) throw error', done => {
        const promise = logic.registerUser({});

        promise.catch(err => {
            expect(err).toBeDefined();
            expect(err.message).toBe('Username and password are required');

            done();
        });
    });

    // it('should logic.registerUser({username:"",password:""}) throw error', done => {
    //     logic.registerUser({ username: '', password: '' }).catch(res => {
    //         expect(err).toBeDefined();
    //         expect(err.message).toBe('username and password cannot be empty');
    //         done();
    //     });
    // });
});

// describe('logic User LOGIN API (manu)', () => {
//     const user = {
//         username: 'mp18',
//         password: 'mp123'
//     };

//     it('it should loginUser(user) return status OK', done => {
//         logic.loginUser(user).then(res => {
//             expect(res.status).toBe('OK');
//             expect(res.data.id.length).toBeGreaterThan(0);
//             expect(res.data.token.length).toBeGreaterThan(0);

//             done();
//         });
//     });

//     it('should logic.loginUser("") throw error', done => {
//         const promise = logic.loginUser('');

//         promise.catch(err => {
//             expect(err).toBeDefined();
//             expect(err.message).toBe('Input should be an Object');

//             done();
//         });
//     });

//     it('should logic.registerUser({}) throw error', done => {
//         const promise = logic.loginUser({});

//         promise.catch(err => {
//             expect(err).toBeDefined();
//             expect(err.message).toBe('Username and password are required');

//             done();
//         });
//     });

//     it('should logic.loginUser({username: "mp18", password:"111"}) throw Error', done => {
//         logic.loginUser({ username: 'mp18', password: '111' }).then(res => {
//             expect(res.status).toBe('KO');
//             expect(res.error).toBe('username and/or password wrong');

//             done();
//         });
//     });
// });

// describe('logic User RETRIEVE API (manu)', () => {
//     const token =
//         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhZjAxNDJjNWQxMTY0MDAxNGZlYThjMyIsImlhdCI6MTUyNTY5MzU4MSwiZXhwIjoxNTI1Njk3MTgxfQ.itCNu0vzbvfXRv1isHAuf4ILNLzblm--NDLy8_17qpU';

//     logic.token = token;
//     it('should logic.retrieveUser("5af0142c5d11640014fea8c3") return user data', done => {
//         logic.retrieveUser('5af0142c5d11640014fea8c3').then(res => {
//             expect(res.status).toBe('OK');
//             expect(res.data.name).toBe('yanina');
//             expect(res.data.id).toBe('5af0142c5d11640014fea8c3');

//             done();
//         });
//     });

//     it('should logic.retrieve("5af0142c5d11640014fea8c3") with invalid token throw error', done => {
//         logic.token = 'fasdfa';
//         logic.retrieveUser('5af0142c5d11640014fea8c3').then(res => {
//             expect(res.status).toBe('KO');
//             expect(res.error).toBe('invalid token');

//             done();
//         });
//     });

//     it('should logic.retrieve() throw error', done => {
//         logic.retrieveUser().catch(res => {
//             expect(res.message).toBe('id is invalid');

//             done();
//         });
//     });
// });

describe('logic user UPDATE API (manu)', () => {
    const user = {
        name: 'Mikel',
        surname: 'Parra',
        email: 'mikelpmc@gmail.com',
        username: 'mp18',
        password: 'mp123'
    };

    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhZjAzMDVlNWQxMTY0MDAxNGZlYTk0MCIsImlhdCI6MTUyNTcwODQ5MCwiZXhwIjoxNTI1NzEyMDkwfQ._xKguj3LLoGzW68tqmd7A7lY43OteDdEU4JhIunC4Ak';
    logic.token = token;

    const id = '5af0305e5d11640014fea940';

    it('should logic.updateUser(id,user) update user', done => {
        logic.updateUser(id, user).then(res => {
            expect(res.status).toBe('OK');
            done();
        });
    });

    it('should logic.updateUser(1) throw error', done => {
        logic.updateUser(1).catch(res => {
            expect(res.message).toBe('id is invalid');
            done();
        });
    });
});
