'use strict'

const express = require('express');
const bodyParser = require('body-parser');
/* const cors = require('cors'); */

const app = express();

//cargar rutas
let user_routes = require('./routes/user')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
/* app.use(cors()); */

//configurar cabeceras http
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods',  'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE'); 
    next();
   });

//rutas base
app.use('/api', user_routes );


module.exports = app;