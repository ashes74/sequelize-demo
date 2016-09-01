'use strict';
var Sequelize = require('sequelize');
var db = require('./_db');


var Todo = sequelize.define('Todo', {
  task: Sequelize.STRING,
  completed: Sequelize.BOOLEAN,
  completedOn: Sequelize.DATE
});
return Todo;


module.exports = Todo
