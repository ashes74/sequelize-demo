// _db.js
'use strict';
var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/sequelizedemo');

db
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

module.exports = db
