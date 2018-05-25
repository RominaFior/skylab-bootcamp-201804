// Uses logic and routes

const Task = require('./../models/Task');
const logic = require('./../logic/');

// Display all tasks
exports.listAll = (req, res) => {
    const todos = logic.listTodos();
    const dones = logic.listDones();

    res.render('tasks', {
        title_todos: 'List TODOS',
        todos: todos,
        title_dones: 'List DONES',
        dones: dones
    });
};

// Display list todos
exports.listTodos = (req, res) => {
    res.send('LIST TODOS');
};

// Display list dones
exports.listDones = (req, res) => {
    res.send('LIST DONES');
};

// Add task
exports.addTask = (req, res) => {
    const { text } = req.body;

    logic.addTask(text);

    res.redirect('/tasks');
};

// Mark task done
exports.markTaskDone = (req, res) => {
    const { id } = req.params;

    logic.markTaskDone(parseInt(id));

    res.redirect('/tasks');
};

// Remove task
exports.removeTask = (req, res) => {
    const { id } = req.params;

    logic.removeTask(parseInt(id));

    res.redirect('/tasks');
};
