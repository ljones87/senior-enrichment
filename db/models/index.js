'use strict';

const db = require('../index.js');
const Campus = require('./campus');
const Student = require('./student');


Campus.hasMany(Student, { onDelete: 'CASCADE', foreignKey: { allowNull: false} });
Student.belongsTo(Campus, { through: 'campusId', foreignKey: { allowNull: false} });

module.exports = {
	db,
	Student,
	Campus
};

