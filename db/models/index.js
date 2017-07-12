'use strict';

const db = require('../index.js');
const Campus = require('./campus');
const Student = require('./student');


Campus.hasMany(Student, { onDelete: 'CASCADE' });
Student.belongsTo(Campus);

module.exports = {
	db,
	Student,
	Campus
}

