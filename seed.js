
const {db, Student, Campus } = require('./db/models/index');


db.sync({ force: true })
  .then(() => {
    return Promise.all([
      Campus.create({name: 'Floaty Campus', image: '/images/FloatyCampus.jpg'}),
      Campus.create({name: 'Roundy Campus', image: '/images/RoundyCampus.jpg'}),
      Campus.create({name: 'This Campus', image: '/images/ThisCampus.jpg'}),
      Campus.create({name: 'That Campus', image: '/images/ThatCampus.jpg'}),
    ]);
  })
  .then(campuses => {

    return Promise.all([
      Student.create({name: 'Lina Jones', email: 'lina@lina.com', campusId: '1'}),
      Student.create({name: 'Tom Jones', email: 'tom@jones.com', campusId: '2'}),
      Student.create({name: 'Chris Crisp', email: 'chris@crisp.com', campusId: '3' }),
      Student.create({name: 'Rob Robertson', email: 'rob@bob.com', campusId: '4'}),
      Student.create({name: 'Cody Coderson', email: 'cody@code.com', campusId: '1'}),
    ]);
  })
  .then(() => {
    console.log('Database seeded and ready to review');
  });
