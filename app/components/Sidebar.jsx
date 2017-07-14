import React from 'react';
import { Link, Redirect, NavLink } from 'react-router-dom';

export default function Sidebar() {

  return (
    <sidebar>
      <img src="images/atomIcon.jpg" className="logo" />
      <section>
        <h4 className="menu-item">
          <NavLink to="/campuses">Campuses</NavLink>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to="/students">Students</Link>
        </h4>
      </section>
      <section>
        <h4>
          <Link className="btn btn-info btn-block" to="/new-campus">
            <span className="glyphicon glyphicon-plus"></span> New Campus
            </Link>
        </h4>
        <h4>
          <Link className="btn btn-info btn-block" to="/new-student">
            <span className="glyphicon glyphicon-plus"></span> New Student
            </Link>
        </h4>
      </section>
      <hr />
    </sidebar>
  )
}
