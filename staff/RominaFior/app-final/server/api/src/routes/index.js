const express = require('express')
const bodyParser = require('body-parser')
const logic = require('logic')
const jwt = require('jsonwebtoken')
const jwtValidation = require('./utils/jwt-validation')

const router = express.Router()

const { env: { TOKEN_SECRET, TOKEN_EXP } } = process

const jwtValidator = jwtValidation(TOKEN_SECRET)

const jsonBodyParser = bodyParser.json()

router.post('/artist', jsonBodyParser, (req, res) => {
    const { body: { name, email, password, description, genre, bankAccount, votes, image } } = req

    logic.registerArtist(name, email, password, description, genre, bankAccount, votes, image)
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
    const { body: { email, password } } = req

    logic.authenticateArtist(email, password)
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

router.get('/artist/:artistId', (req, res) => {
    const { params: { artistId } } = req

    logic.retrieveArtist(artistId)
        .then(artist => {
            res.status(200)
            res.json({ status: 'OK', data: artist })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })

})


router.patch('/artist/:artistId', [jwtValidator, jsonBodyParser], (req, res) => {
    const { params: { artistId }, body: { name, email, password, newEmail, newPassword } } = req

    logic.updateArtist(artistId, name, email, password, newEmail, newPassword)
        .then(() => {
            res.status(200)
            res.json({ status: 'OK' })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})

router.delete('/artist/:artistId', [jwtValidator, jsonBodyParser], (req, res) => {
    const { params: { artistId }, body: { email, password } } = req

    logic.unregisterArtist(artistId, email, password)
        .then(() => {
            res.status(200)
            res.json({ status: 'OK' })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})

/*
router.post('/artist/:artistId/notes', [jwtValidator, jsonBodyParser], (req, res) => {
    const { params: { artistId }, body: { text } } = req

    logic.addNote(artistId, text)
        .then(id => {
            res.status(201)
            res.json({ status: 'OK', data: { id } })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})

router.get('/artist/:artistId/notes/:id', jwtValidator, (req, res) => {
    const { params: { artistId, id } } = req

    logic.retrieveNote(artistId, id)
        .then(note => {
            res.json({ status: 'OK', data: note })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})

router.get('/artist/:artistId/notes', jwtValidator, (req, res) => {
    const { params: { artistId }, query: { q } } = req;

    (q ? logic.findNotes(artistId, q) : logic.listNotes(artistId))
        .then(notes => {
            res.json({ status: 'OK', data: notes })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })

})

router.delete('/artist/:artistId/notes/:id', jwtValidator, (req, res) => {
    const { params: { artistId, id } } = req

    logic.removeNote(artistId, id)
        .then(() => {
            res.json({ status: 'OK' })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})

router.patch('/artist/:artistId/notes/:id', [jwtValidator, jsonBodyParser], (req, res) => {
    const { params: { artistId, id }, body: { text } } = req

    logic.updateNote(artistId, id, text)
        .then(() => {
            res.json({ status: 'OK' })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})
 */
module.exports = router