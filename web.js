
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , task = require('./routes/task')
  , task = require('./routes/task')
  , http = require('http')
  , path = require('path');

// var redis = require('redis');
// var redisClient;

// if (process.env.REDISTOGO_URL) {
//   var rtg = require("url").parse(process.env.REDISTOGO_URL);
//   redisClient = redis.createClient(rtg.port, rtg.hostname);
//   redisClient.auth(rtg.auth.split(":")[1]);
// } else {
//   redisClient = redis.createClient();
// }

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/task', task.list);

// app.get('/task', function(req, res){
//   redisclient.get("test", function (err, value) {
//     res.json({title: value});
//   });
// });

app.listen(app.get('port'), function() {
  console.log("Listening on " + app.get('port'));
});

