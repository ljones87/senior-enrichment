import React from 'react';

import AddCampus from './AddCampus';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeCampus } from '../store/index';
import { withRouter } from 'react-router'


function allCampuses(props) {
  const campuses = props.campuses;
  return (
    <div>
      <h2>Campuses</h2>
      <div className="row">
        <div>{
          campuses.map(campus => {
            return (
              <div key={campus.id}>
                <div

                className="campuses"
                >{campus.name}
                  <Link  to={`/campus/${campus.id}`}>
                    <img className="media-object" src={campus.image} alt="image" />
                  </Link>
                  <span
                    className="deleteCampus"
                    id={campus.id}
                    onClick={props.handleClick}>Delete Campus
                  </span>
                </div>
              </div>
            );
          })
        }</div>
      </div>
      <AddCampus />
    </div>
  );
}


const mapStateToProps = function (state) {
  return {
    campuses: state.campuses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick (event) {
      const campusId = event.target.id;
      dispatch(removeCampus(campusId));
    }

  };
};

const CampusListContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(allCampuses));
export default CampusListContainer;

