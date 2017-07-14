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
        <div id="main" className="container-fluid">
          <Navbar />
          <div className="col-xs-2">
            <Sidebar />
          </div>
           <div className="col-xs-10">
          <Switch>
            <Route path="/new-campus" component={AddCampus} />
            <Route path="/campuses" component={CampusList} />
            <Route path="/campus/:campusId" component={StudentList} />
            <Route path="/students" component={StudentList} />
            <Redirect to="/" />
          </Switch>
         </div>
      </div>
    );
  }

}

//Route exact path="/single-campus" component={CampusList} />
