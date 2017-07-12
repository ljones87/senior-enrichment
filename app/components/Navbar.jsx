import React from 'react';


const Navbar = (props) => {

  return (
    <div className="navbar navbar-fixed-top navbar-inverse" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#nav-items">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/campuses/">Interplanetary Campuses</a>
        </div>
        <div id="nav-items" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><a href="/students/">students</a></li>
            <li><a href="/api/student/add">new student</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
