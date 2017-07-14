'use strict';


import React from 'react';
import {render} from 'react-dom';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store, { fetchStudents, fetchCampuses } from './store';
import Main from './components/Main';


    render(
        <Provider store={store}>
          <Router>
            <Main />
          </Router>
        </Provider> ,
        document.getElementById('main')
      );


