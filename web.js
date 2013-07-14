var express = require('express'),
    path = require('path'),
    http = require('http'),
    taskOld = require('./routes/task'),
    task = require('./routes/tasks');

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser()),
    app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/task', taskOld.list);

app.get('/tasks', task.findAll);
app.get('/tasks/:id', task.findById);
app.post('/tasks', task.addTask);
app.put('/tasks/:id', task.updateTask);
app.delete('/tasks/:id', task.deleteTask);

app.listen(app.get('port'), function() {
  console.log("Listening on " + app.get('port'));
});

