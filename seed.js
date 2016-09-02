'use strict';

var models = require('./models'),
  Todo = models.Todo
  db = models.db;


var tasks = [
  {
    task: "Make this the best presentation ever!"
  }
]


console.log("-clearing-");
db.sync({force:true})
.then(function(){
  console.log('-done clearing-');
  Todo.create(tasks[0])

})
