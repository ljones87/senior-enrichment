'use strict';

const router =  require('express').Router();

const { Campus } = require('../../db/models');
const { resolve } = require('path');

router.get('/', (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
});

router.get('/campus/:campusId', (req, res, next) => {
  Campus.findOne({
    where: {
      id : req.params.campusId
    }
  })
    .then(campus => res.json(campus))
    .catch(next)
})

// router.post('/campuses', (req, res, next) => {
//   Campus.findOrCreate(req.body)
//     .then(campus => res.status(201).json(campus))
//     .catch(next);
// });

// router.put('/:campusId', (req, res, next) => {
//   req.campus.update(req.body)
//     .then(campus => res.status(204).json(campus))
//     .catch(next);
// })

module.exports = router;
