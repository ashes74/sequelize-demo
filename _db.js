// _db.js

var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://localhost:5432/sequelizedemo');

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

  var User = sequelize.define('user', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
  });

  // force: true will drop the table if it already exists
  User.sync({force: true}).then(function () {
    // Table created
    return User.create({
      firstName: 'John',
      lastName: 'Hancock'
    });
  });

  var Todo = sequelize.define('todo',{
    task:{
      type: Sequelize.STRING
    },
    completed:{
      type: Sequelize.DATE,
      allowNull: true
    }
  })

Todo.sync().then(function(){
  return Todo.create({
    task: "Make popcorn"
  })
})
