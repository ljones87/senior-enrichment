import React from 'react';
import { Link } from 'react-router-dom';
import CampusList from './CampusList';

export default function Sidebar () {

return (
       <sidebar>
        <img src="images/atomIcon.jpg" className="logo" />
        <section>
          <h4 className="menu-item">
            <Link to="/campuses">Campuses</Link>
          </h4>
        </section>
        <section>
          <h4 className="menu-item">
            <Link to="/students">Students</Link>
          </h4>
        </section>
        <section>
          <h4>
            <Link className="btn btn-primary btn-block" to="/new-campus">
              <span className="glyphicon glyphicon-plus"></span> New Campus
            </Link>
          </h4>
        </section>
        <hr />
      </sidebar>
)
}
