const express = require('express');
const taskControllers = require ("../controllers/taskControllers");
const router = express.Router();

router.get('/tasks/newTask', taskControllers.task_Create_get);
router.get('/tasks', taskControllers.task_index);
router.post('/tasks', taskControllers.task_Create_post)
router.get('/tasks/:id', taskControllers.task_details )
router.delete('/tasks/:id',taskControllers.task_delete)

module.exports =router;