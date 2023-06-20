const Task = require("../model/taskModel");

const taskControl = (req, res) => {
  const { userId, taskName, taskType } = req.body;

  const newTask = new Task({
    userId,
    taskName,
    taskType,
  });

  newTask
    .save()
    .then(() => res.json({ message: "Task added" }))
    .catch((error) => res.status(400).json({ error }));
};

module.exports = taskControl;
