'use strict';

var models = require('./models'),
  Todo = models.Todo,
  db = models.db;


var tasks = [
  {
    task: "Make this the best presentation ever!"
  },
  {
    task: "Sweep the porch"
  },
  {
    task: "Make another bowl of popcorn"
  },
  {
    task: "Pay off my student loans"
  }
]


console.log("-clearing-");
db.sync({force:true})
.then(function(){
  console.log('-done clearing-');
  console.log('-seeding tasks-');
  return tasks.forEach(function(task){
    Todo.create(task)
  })
}).then(function(){
  
})
