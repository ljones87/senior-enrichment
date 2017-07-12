'use strict';

const router =  require('express').Router();

const { Student } = require('../../db/models');
const { resolve } = require('path');


router.get('/', (req, res, next) => {
  Student.findAll()
    .then(students => res.json(students))
    .catch(next);
});

router.post('/new-student', (req, res, next) => {
  Student.findOrCreate( {
    where: {
      name: req.body.name,
      email: req.body.email
    }
  })
    .then(student => res.status(201).json(student))
    .catch(next);
});


module.exports = router;
