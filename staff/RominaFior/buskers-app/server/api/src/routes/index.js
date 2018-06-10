const express = require('express')
const bodyParser = require('body-parser')
const logic = require('logic')
const jwt = require('jsonwebtoken')
const jwtValidation = require('./utils/jwt-validation')

const router = express.Router()

const { env: { TOKEN_SECRET, TOKEN_EXP } } = process

const jwtValidator = jwtValidation(TOKEN_SECRET)

const jsonBodyParser = bodyParser.json()

router.post('/user', jsonBodyParser, (req, res) => {
    const { body: { nombre, email, username, contraseña, confirmaContraseña, categoria, descripcion } } = req

    logic.registerUser( nombre, email, username, contraseña, confirmaContraseña, categoria, descripcion)
        .then(() => {
            res.status(201)
            res.json({ status: 'OK' })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})

router.post('/auth', jsonBodyParser, (req, res) => {
    const { body: { email, username, contraseña } } = req

    logic.authenticateUser(email, username, contraseña)
        .then(id => {
            const token = jwt.sign({ id }, TOKEN_SECRET, { expiresIn: TOKEN_EXP })

            res.status(200)
            res.json({ status: 'OK', data: { id, token } })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})

router.get('/user/:userId', (req, res) => {
    const { params: { userId } } = req

    logic.retrieveUser(userId)
        .then(user => {
            res.status(200)
            res.json({ status: 'OK', data: user })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })

})


router.patch('/user/:userId', [jwtValidator, jsonBodyParser], (req, res) => {
    const { params: { userId }, body: { name, email, contraseña, newEmail, newPassword } } = req

    logic.updateUser(userId, name, email, contraseña, newEmail, newPassword)
        .then(() => {
            res.status(200)
            res.json({ status: 'OK' })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})

router.delete('/user/:userId', [jwtValidator, jsonBodyParser], (req, res) => {
    const { params: { userId }, body: { email, contraseña } } = req

    logic.unregisterUser(userId, email, contraseña)
        .then(() => {
            res.status(200)
            res.json({ status: 'OK' })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})

/* router.post('/user/:userId/products', [jwtValidator, jsonBodyParser], (req, res) =>{
    const { params: { userId }, body: { imgUrl, price, size, color } } = req

    logic.addEventToUser(userId, imgUrl, price, size, color)
        .then(() => {
            res.status(201)
            res.json({ status: 'OK'})
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})

router.get('/categories', (req, res) =>{
    logic.listCategories()
        .then(categories => {
            res.status(200)
            res.json({ status: 'OK', data: {categories}})
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})

module.exports = router */