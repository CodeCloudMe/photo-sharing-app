
/*
 * GET users listing.
 */

exports.list = function(req, res){
  var page = req.param('page') || 1,
      callback = req.param('callback') || 'callback';

  var data = {
    "items" : [{
        "id": page + 1,
        "text" : "Today " + page,
        "items" : [{
              "text" : "Eat",
              "leaf" : true
          }, {
              "text" : "Sleep",
              "leaf" : true
          }, {
              "text" : "Drinking",
              "leaf" : true
          }]
    }, {
        "id": page + 2,
        "text" : "Tomorrow " + page,
        "items" : [{
            "text" : "Watch TV",
            "leaf" : true
        }, {
            "text" : "Watch Video",
            "leaf" : true
        }]
    }, {
        "id": page + 3,
        "text" : "This week " + page,
        "items" : []
    }, {
        "id": page + 4,
        "text" : "Later " + page,
        "items" : [{
            "text" : "Eat",
            "leaf" : true
        }, {
            "text" : "Sleep",
            "leaf" : true
        }, {
            "text" : "Drinking",
            "leaf" : true
        }]
    }, {
        "id": page + 5,
        "text" : "Project-A " + page,
        "items" : [{
              "text" : "Eat",
              "leaf" : true
          }, {
              "text" : "Sleep",
              "leaf" : true
          }, {
              "text" : "Drinking",
              "leaf" : true
          }]
    }, {
        "id": page + 6,
        "text" : "Project-B " + page,
        "items" : [{
            "text" : "Watch TV",
            "leaf" : true
        }, {
            "text" : "Watch Video",
            "leaf" : true
        }]
    }, {
        "id": page + 7,
        "text" : "Project-C " + page,
        "items" : []
    }, {
        "id": page + 8,
        "text" : "Postpone " + page,
        "items" : [{
            "text" : "Eat",
            "leaf" : true
        }, {
            "text" : "Sleep",
            "leaf" : true
        }, {
            "text" : "Drinking",
            "leaf" : true
        }]
    }]
  };

  res.contentType('text/javascript');
  res.send(callback + '(' + JSON.stringify(data) + ');');
};
