'use strict';

var Sequelize = require('sequelize');
var db = require('./_db');


var Todo = db.define('todo', {
  task: Sequelize.STRING,
  completedOn: {
    type: Sequelize.DATE,
    allowNull: true
  }
});


module.exports = Todo
