const express = require('express');
var bodyParser = require('body-parser');
const path = require('path');

const tasksRouter = require('./src/routes/tasks.js');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// const db = require('./src/db.js');

app.use('/tasks', tasksRouter);

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'pug');

app.listen(3000, () => {
    console.log(`Server listening on port ${PORT}`);
});
