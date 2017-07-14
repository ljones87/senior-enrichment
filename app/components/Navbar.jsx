import React from 'react';


export default function Navbar() {

  return (
    <div className="navbar navbar-fixed-top navbar-inverse" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#nav-items">
            <span className="sr-only">Toggle navigation</span>
          </button>
          <a className="navbar-brand" href="/">Interplanetary Campuses Home</a>
        </div>
      </div>
    </div>
  );
}

