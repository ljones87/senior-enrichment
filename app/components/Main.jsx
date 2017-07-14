import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AllCampus from './AllCampus';
import Navbar from './Navbar';
import AllStudents from './AllStudents';
import SingleCampus from './SingleCampus';
import CampusList from './CampusList';
import StudentList from './StudentList';
import AddCampus from './AddCampus';
import Sidebar from './Sidebar'

import store, { fetchStudents, fetchCampuses } from '../store';

export default class Main extends React.Component {

  componentDidMount () {
      const studentsThunk = fetchStudents();
      store.dispatch(studentsThunk);
      const campusThunk = fetchCampuses();
      store.dispatch(campusThunk);
  }

  render() {
    return (
      <div>
      <Sidebar />
      <Navbar />
        <main>
          <Switch>
            <Route path="/new-campus" component={AddCampus} />
            <Route path="/campus/:campusId" component={StudentList} />
            <Route path="/students" component={StudentList} />
            <Redirect to="/" />
          </Switch>
        </main>
      </div>
    );
  }

}

//Route exact path="/single-campus" component={CampusList} />
