// tasks routes
const express = require('express');
const router = express.Router();

const taskController = require('./../controllers/TaskController');

// Get ALL tasks
router.get('/', taskController.listAll);

// Get TODOS
router.get('/todos', taskController.listTodos);

// Get DONES
router.get('/dones', taskController.listDones);

// Add task
router.post('/', taskController.addTask);

// Mark task done
router.get('/done/:id', taskController.markTaskDone);

// Remove task
router.get('/remove/:id', taskController.removeTask);

module.exports = router;
