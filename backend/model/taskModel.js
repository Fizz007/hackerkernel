const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    userId: String,
    taskName: String,
    taskType: String
  });
  
  const Task = mongoose.model('Task', taskSchema);

  module.exports = Task;