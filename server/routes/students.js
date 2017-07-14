'use strict';

const router =  require('express').Router();

const { Student } = require('../../db/models');
const { Campus } = require('../../db/models');

/*-----------find all students-------------*/

router.get('/', (req, res, next) => {

  Student.findAll()
    .then(students => res.json(students))
    .catch(next);
});

/*-----------find single student-------------*/

router.get('/:studentId', (req, res, next) => {
  const id = req.params.studentId;

  Student.findOne({ where: {id} })
    .then(student => res.json(student))
    .catch(next);
});

/*-----------create new student--------------*/

router.post('/new-student', (req, res, next) => {
 const campusName = req.body.campus;
 const {name, email} = req.body;

  Campus.findOne({ where: { name: campusName } })
    .then(campus =>
      Student.findOrCreate({
        where: { name, email, campusId: campus.id }
      }))
      .then(student => res.status(201).json(student))
      .catch(next);
});

/*---------------update student---------------*/

router.put('/edit-student/:studentId', (req, res, next) => {
  const {id, name, email, campus} = req.body;

  const replaceCampus = Campus.findOne({ where: {name: campus} });
  console.log("********", replaceCampus)
     Student.update({name, email, replaceCampus}, {where: {id}, returning: true})
    .then(() => res.sendStatus(202))
    .catch(next);
});

/*---------------delete student---------------*/

router.delete('/:studentId', function (req, res, next) {
  const id = req.params.studentId;

  Student.destroy({ where: { id } })
    .then(() => res.sendStatus(204))
    .catch(next);
});

module.exports = router;
