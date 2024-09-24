const Task = require("../models/task");
// task_index , task_Create , task_delete , task_details , task_Create_get , 
const task_Create_get = (req, res) => {
    res.render('createTask', { title: "Adding Task" });
}

const task_index = (req, res) => {
    Task.find().sort({ dueDate: -1 })
        .then(tasks => res.render('tasks', { title: "Home", tasks }))
        .catch(err => console.log(err))
}

const task_Create_post = (req, res) => {
    const task = new Task(req.body);
    task.save()
        .then((result) => { res.redirect('/tasks') })
        .catch(err => console.log(err));
}

const task_details = (req , res) => {
    const id = req.params.id;
    console.log(id);
    Task.findById(id)
        .then(result => res.render('taskDetails', { task: result, title: "Task Details" }))
        .catch(err => console.log(err))
}

const task_delete = (req, res) => {
    const id = req.params.id;

    Task.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/tasks' })
        })
        .catch(err => console.log(err))
}

module.exports ={
    task_index,
    task_details,
    task_Create_post,
    task_delete,
    task_Create_get
}