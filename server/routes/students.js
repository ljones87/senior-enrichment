'use strict';

const router =  require('express').Router();

const { Student } = require('../../db/models');
const { Campus } = require('../../db/models');


router.get('/', (req, res, next) => {
  Student.findAll()
    .then(students => res.json(students))
    .catch(next);
});

router.post('/new-student', (req, res, next) => {
 const campus = Campus.findOne({
    where: {
      name: req.body.campus
    }
  })
  .then(campus =>
    Student.findOrCreate({
      where: {
        name: req.body.name,
        email: req.body.email,
        campusId: campus.id
      }
    })
  )
    .then(student => res.status(201).json(student))
    .catch(next);
});


router.delete('/', function (req, res, next) {
  const id = req.body.studentId;

  Student.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});

module.exports = router;
