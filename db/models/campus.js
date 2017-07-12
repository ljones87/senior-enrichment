'use strict';

const Sequelize = require('sequelize');
const db = require('../index.js');


module.exports = db.define('campus',  {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
  }
});

