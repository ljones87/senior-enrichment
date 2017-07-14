import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AddCampus from './AddCampus';
import AddStudent from './AddStudent';
import CampusList from './CampusList';
import EditCampus from './EditCampus';
import EditStudent from './EditStudent';
import HomePage from './HomePage';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import SingleCampus from './SingleCampus';
import StudentList from './StudentList';



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
        <div id="main" className="container-fluid">
          <Navbar />
          <div className="col-xs-2">
            <Sidebar />
          </div>
           <div className="col-xs-10">
          <Switch>
            <Route path="/campuses" component={CampusList} />
            <Route path="/campus/:campusId" component={SingleCampus} />
            <Route path="/edit-campus/:campusId" component={EditCampus} />
            <Route path="/new-campus" component={AddCampus} />
            <Route path="/students" component={StudentList} />
            <Route path="/new-student" component={AddStudent} />
            <Route path="/edit-student/:studentId"  component={EditStudent} />
            <Route path="/" component={HomePage} />
            <Redirect to="/" />
          </Switch>
         </div>
      </div>
    );
  }
}

