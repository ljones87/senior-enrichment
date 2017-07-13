'use strict';
const Sequelize = require('sequelize');
const db = require('../index.js');


module.exports = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email:  {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
            isEmail: true
        }
  }
});


