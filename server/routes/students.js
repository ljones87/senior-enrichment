'use strict';

const router =  require('express').Router();

const { Student } = require('../../db/models');
const { Campus } = require('../../db/models');

//get all or one student
router.get('/', (req, res, next) => {
  const id = req.body.id
  Student.findAll({ where: {id} })
    .then(students => res.json(students))
    .catch(next);
});

//post student
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

//delete student
router.delete('/:studentId', function (req, res, next) {
  const id = req.params.studentId;
  Student.destroy({ where: { id } })
    .then(() => res.status(204).send("student removed"))
    .catch(next);
});

module.exports = router;
