'use strict'

logic.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhZjFjNTRjNzQ3OTI1MDAxNDhmODhmZSIsImlhdCI6MTUyNTg1Mzg5NCwiZXhwIjoxNTI1ODU3NDk0fQ.kGXDINFtUsHh3jV3yoSNRCn69mX3fAS8F59GGEHt4-g"

// describe("register", () => {

//     // let originalTimeout

//     // beforeEach(() => {
//     //     originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
//     //     jasmine.DEFAULT_TIMEOUT_INTERVAL = 300
//     // })

//     // it('should register correctly', done =>{
//     //     let ran= Math.floor(Math.random() * (100 + 1))
//     //     logic.registerUser( "ericdarbra"+ran , "1234","eric"+ran+"@gmail.com")
//     //     .then (registration => {

//     //         expect(registration.status).toBe("OK")
//     //         expect(registration.data.id).toBeDefined()
//     //         done()
//     //     })
//     //     .catch(done)

//     // })

//     it('should launch an error if username or email already exists', done =>{

//         logic.registerUser( "ericdarbra" , "1234", "eric@gmail.com")
//         .then(registration => {
//             expect(registration.status).toBe("KO")
//             expect(registration.error).toBeDefined()
//             done()
//         })
//     })


//     it('should launch an error if empty argument', done =>{

//         logic.registerUser("ericdarbra", "1234")
//         .catch (err => {
//             expect (err).toBeDefined()
//             expect (err.message).toBe("There is a missing field")
//             done()
//         })
//     })

// })

// describe("login", () => {

//     let originalTimeout

//     beforeEach(() => {
//         originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
//         jasmine.DEFAULT_TIMEOUT_INTERVAL = 300
//     })

    // it('should login correctly', done =>{

    //     logic.loginUser("ericdarbra" , "1234")
    //     .then (login => {

    //         expect(login.status).toBe("OK")
    //         expect(login.data.id).toBeDefined()
    //         expect(login.data.token).toBeDefined()
    //         done()
    //     })
    //     .catch(done)


    // })
    // it('should login correctly', done =>{

    //     logic.loginUser("lele" , "lele")
    //     .then (login => {

    //         expect(login.status).toBe("OK")
    //         expect(login.data.id).toBeDefined()
    //         expect(login.data.token).toBeDefined()
    //         done()
    //     })
    //     .catch(done)


    // })
    // it('should launch an error if username or password are incorrect', done =>{

    //     logic.loginUser("ericoparvra","1234")
    //     .then(login => {
    //         expect(login.status).toBe("KO")
    //         expect(login.error).toBeDefined()
    //         done()
    //     })
    // })

    // it('should launch an error if password is blank', done =>{

    //     logic.loginUser("ericdarbra","")
    //     .then(login => {
    //         expect(login.status).toBe("KO")
    //         expect(login.error).toBeDefined()
    //         done()
    // })
    // })

    // it('should launch an error if username is blank', done =>{

    //     logic.loginUser("","1234")
    //     .then(login => {
    //         expect(login.status).toBe("KO")
    //         expect(login.error).toBeDefined()
    //         done()
    // })

    // })
//})



// describe("retrieve", () =>{

//     let originalTimeout

//     beforeEach(() => {
//         originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
//         jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000
//     })

//     it("should retrieve info", done =>{

//         logic.retrieveInfo("5af020f45d11640014fea8c8" , "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhZjAyMGY0NWQxMTY0MDAxNGZlYThjOCIsImlhdCI6MTUyNTcwMjc0NSwiZXhwIjoxNTI1NzA2MzQ1fQ.Jhp4syfls1MPhNTKt7Ec2L4hTXBmKhvN3JWorqX4sp4")
//         .then (retrieve => {

//             expect(retrieve.status).toBe("OK")
//             expect(retrieve.data.id).toBeDefined()
//             expect(retrieve.data.username).toBeDefined()
//             done()
//         })


//     })

// })

// describe("update", ()=>{
// // let originalTimeout

//     // beforeEach(() => {
//     //     originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
//     //     jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000
//     // })

//     it("should update new info", done =>{

//         logic.updateInfo("5af020f45d11640014fea8c8" ,{"username": "ericdarbra", "password": "1234", "groot": "I am groot"} , "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhZjAyMGY0NWQxMTY0MDAxNGZlYThjOCIsImlhdCI6MTUyNTcwMjc0NSwiZXhwIjoxNTI1NzA2MzQ1fQ.Jhp4syfls1MPhNTKt7Ec2L4hTXBmKhvN3JWorqX4sp4")
//         .then (updateInfo =>{
//             expect(updateInfo.status).toBe("OK")
//             done()
//         })
//     })

//     it("should show the new info", done =>{

//         logic.retrieveInfo("5af020f45d11640014fea8c8" , "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhZjAyMGY0NWQxMTY0MDAxNGZlYThjOCIsImlhdCI6MTUyNTcwMjc0NSwiZXhwIjoxNTI1NzA2MzQ1fQ.Jhp4syfls1MPhNTKt7Ec2L4hTXBmKhvN3JWorqX4sp4")
//         .then (retrieve => {

//             expect(retrieve.status).toBe("OK")
//             expect(retrieve.data.groot).toBeDefined("I am groot")
//             done()
//         })
//     })
// })

// describe("unregister", () => {
//     // let originalTimeout

//     // beforeEach(() => {
//     //     originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
//     //     jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000
//     // })

//     it("should remove the users", done => {
//         let username = "tarari" + Math.floor(Math.random() * (100 + 1))
//         logic.registerUser(username, "tarariquetevi1", "email@gmail.com")
//             .then(registration => registration.data)
//             .then(data => {
//                 logic.loginUser(username, "tarariquetevi1")
//                     .then(login => {
//                         console.log(login.data)
//                         return login.data
//                     })
//                     .then(data => {
//                         const { id, token } = data
//                         logic.unregisterUser(id, { username, password: "tarariquetevi1" }, token)
//                             .then(unregistration => {
//                                 console.log(unregistration)
//                                 expect(unregistration.status).toBe("OK")
//                                 done()
//                             })

//                     })
//             })




//     })
//})


describe("fetchList", () => {

    
        it('should return a list of avengers', done =>{
    
            logic.fetchCharacters("A")
            .then (list => {
    
                expect(list).toBeDefined()
                expect(list instanceof Array).toBeTruthy()
                expect(list.length>0).toBeTruthy()
                done()
            })
            .catch(done)
        })})
