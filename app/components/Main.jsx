import React from 'react';
//import axios from 'axios';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import AllCampus from './AllCampus';
import Navbar from './Navbar';
import AddStudent from './AddStudent';
import AllStudents from './AllStudents';
import store, { fetchStudents, fetchCampuses } from '../store';

export default class Main extends React.Component {
  componentDidMount () {
    console.log()
      const studentsThunk = fetchStudents();
      store.dispatch(studentsThunk);
      const campusThunk = fetchCampuses();
      store.dispatch(campusThunk);
  }

  render() {
    return (
      <div>
        <Navbar />
          <Route exact path="/campuses" component={AllCampus} />
          <Route exact path="/students/" component={AllStudents} />
        <AddStudent />
      </div>

    )
  }

}
