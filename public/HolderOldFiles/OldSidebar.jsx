import React from 'react';
import CampusList from './CampusList';

export default function Sidebar () {

  return (
    <sidebar>
      <div className="sidebar-header">
        <h3 href="#">
          <div>Campuses</div>
          <i alt="Brand">
          </i>
        </h3>
      </div>
      <CampusList />
    </sidebar>
  );
}
