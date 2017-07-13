import React from 'react';
import axios from 'axios';
//import images from '../../../public/images';
import store from '../store/index';

import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

function allCampuses(props) {
  const campuses = props.campuses;
    return (
      <div>
      <h2>Campuses</h2>
        <div className="row">
           <div>{
             campuses.map(campus => {
              return (
                  <NavLink key={campus.id} to={`/campus/${campus.id}`}>
                  <div style={{marginTop: '20px', marginLeft: '50px'}} className="campuses">{campus.name}
                    <img className="media-object" src={campus.image} alt="image" />
                  </div>
                  </NavLink>
                )
             })
            }</div>
        </div>

      </div>
    )
  }


const mapStateToProps = function(state) {
  return {
    campuses: state.campuses,
  };
}

const CampusListContainer = connect(mapStateToProps)(allCampuses)
export default CampusListContainer;
