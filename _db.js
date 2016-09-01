// _db.js

var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://localhost:5432/sequelizedemo');
//don't forget to  create the database in psql
//# create database sequelizedemo;
sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });
