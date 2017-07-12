'use strict';

const api = require('express').Router();
const db = require('../../db/index');

module.exports = api;

api.use('/', require('./campuses'));

api.use('/students', require('./students'));

api.use((req, res, next) => {
  res.status(404).send('Not Found');
});


module.exports = api;
