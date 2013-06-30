
/*
 * GET home page.
 */

exports.index = function(req, res){
  var redis = require('redis-url').connect(process.env.REDISTOGO_URL);

  redis.set('foo', 'bar');

  res.render('index', { title: redis.get('foo') });
};
