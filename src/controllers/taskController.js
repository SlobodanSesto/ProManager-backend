const Task = require('../models/Task');

exports.taskList = ((req, res) => {
    let task = new Task(1, 'some title', 'some body');
    res.send(task);
});