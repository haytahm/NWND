const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

  dueDate: {
        type: Date,

    },

    priority: {
        type: String,
        required: true,
    },

    status: {
        type: String,
        required: true,
    },
    tag:{
        type: String,
        required: true,
        
    }


}, { timestamp: true })

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
