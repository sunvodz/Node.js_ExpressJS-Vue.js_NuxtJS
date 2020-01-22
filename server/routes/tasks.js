var express = require('express')
var task = express.Router()
const Task = require('../models/Task')

// Get All Tasks
task.get('/tasks', (req, res, next) => {
  Task.findAll()
    .then(tasks => {
      res.json(tasks)
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

task.post('/tasks', (req, res, next) => {
  if (!req.body.task_title,!req.body.task_detail) {
    res.status(400)
    res.json({
      error: 'Bad Data'
    })
  } else {
    Task.create(req.body)
      .then(() => {
        res.send('Task Added!')
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  }
})

task.delete('/tasks/:id', (req, res, next) => {
  Task.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => {
      res.send('Task deleted!')
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

// Update Task
task.put('/tasks/:id', (req, res, next) => {
  if (!req.body.task_title) {
    res.status(400)
    res.json({
      error: 'Bad Data'
    })
  } else {
    Task.update(
      { task_detail: req.body.	task_detail},
      { task_name: req.body.task_name },
      { where: { id: req.params.id } }
    )
      .then(() => {
        res.send('Task Updated!')
      })
      .error(err => handleError(err))
  }
})

module.exports = task
