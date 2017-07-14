'use strict';

const router =  require('express').Router();

const { Campus } = require('../../db/models');
const { resolve } = require('path');

//find all campuses
router.get('/', (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
});

//find single campus
router.get('/campus/:campusId', (req, res, next) => {
  const id = req.params.campusId
  Campus.findOne({ where: {id}
  })
    .then(campus => res.json(campus))
    .catch(next);
});

//create new campus
router.post('/', (req, res, next) => {
  Campus.findOrCreate({
    where: {
      name: req.body.name,
      image: req.body.img
    }
  })
  .then(campus => res.status(201).json(campus))
  .catch(next);
});
//update campus
router.put('/campus/:campusId', (req, res, next) => {
  const {name} = req.body
  Campus.update(
    {name},
    {where: {id: req.params.campusId},
    returning: true
    })
    .spread(count, campuses => res.status(200).json(campuses))
    .catch(next);
});

//delete campus
router.delete('/campus/:campusId', function (req, res, next) {
  const id = req.params.campusId;
  Campus.destroy({ where: { id } })
    .then(() => res.status(204).send("campus removed removed"))
    .catch(next);
});



// router.put('/:campusId', (req, res, next) => {
//   req.campus.update(req.body)
//     .then(campus => res.status(204).json(campus))
//     .catch(next);
// })

module.exports = router;
