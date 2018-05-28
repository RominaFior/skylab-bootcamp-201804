'use strict'

//const { MongoClient } = require('mongodb')
const mongoose = require('mongoose')
//const express = require('express')
//const bodyParser = require('body-parser')
//const router = require('./src/routes')
const logic = require('./src/logic')
//const cors = require('cors')

mongoose.connect('mongodb://localhost:27017/skylab-bootcamp-201804')
 .then(() => { 

    return Promise.all( [Notes.deleteMany])
    .then(() => Notes.create({ id, userId, text, password}))
    .then(res => {
        const creations = []
        return Promise.all(creations)
    })
    .then(() => {
        mongoose.connection.close()
    
        console.log('done')
    })
    
})
 

.catch(console.error)
 
 /* { useNewUrlParser: true }, (err, conn) => {
    if (err) throw err

    const db = conn.db()

    logic.init(db)

    const port = process.argv[2] || 3000

    const app = express()

    app.use(cors())

    app.use(bodyParser.json()) // middleware

    app.use('/api', router)


    app.listen(port, () => console.log(`server running on port ${port}`))

    process.on('SIGINT', () => {
        console.log('\nstopping server')

        conn.close()

        process.exit()
    })

}) */