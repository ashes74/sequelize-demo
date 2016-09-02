'use strict';

var Sequelize = require('sequelize');
var db = require('./_db');


var Todo = db.define('todo', {
  task: Sequelize.STRING,
  completed: {
    type: Sequelize.DATE,
    allowNull: true
  }
});


module.exports = Todo
