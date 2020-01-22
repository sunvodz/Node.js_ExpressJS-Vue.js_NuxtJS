var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

var Tasks = require('./routes/tasks')
var cors = require('cors')

var port = process.env.PORT || 8080

var app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var Users = require('./routes/Users')

app.use('/users', Users)
app.use('/', Tasks)

app.listen(port, function() {
  console.log('Server started on port ' + port)
})
