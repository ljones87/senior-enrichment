'use strict';

const router =  require('express').Router();

const { Campus } = require('../../db/models');
const { resolve } = require('path');

/*---------------find all campuses---------------*/

router.get('/', (req, res, next) => {

  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
});

/*---------------find single campus---------------*/

router.get('/campus/:campusId', (req, res, next) => {
  const id = req.params.campusId;

  Campus.findOne({ where: {id} })
    .then(campus => res.json(campus))
    .catch(next);
});

/*---------------create new campus---------------*/

router.post('/new-campus', (req, res, next) => {
  const {name, image} = req.body;

  Campus.findOrCreate({where: {name, image }})
    .then(campus => res.status(201).json(campus))
    .catch(next);
});

/*---------------update campus---------------*/

router.put('/edit-campus/:campusId', (req, res, next) => {
  const {name, id} = req.body;

  Campus.update({name}, {where: {id}, returning: true})
    .then(() => res.sendStatus(202))
    .catch(next);
});

/*---------------delete campus---------------*/

router.delete('/campus/:campusId', function (req, res, next) {
  const id = req.params.campusId;

  Campus.destroy({ where: { id } })
    .then(() => res.sendStatus(204))
    .catch(next);
});


// router.put('/:campusId', (req, res, next) => {
//   req.campus.update(req.body)
//     .then(campus => res.status(204).json(campus))
//     .catch(next);
// })

module.exports = router;
