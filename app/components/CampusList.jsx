import React from 'react';

import { withRouter, NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeCampus } from '../store/index';
import AddCampus from './AddCampus';

function CampusList (props) {

  const { campuses } = props;

  return (
    <div>
      <h3>CAMPUSES</h3>
      <div className="row">
        {
          campuses.map(campus => {
            return (
              <div className="col-xs-4" key={campus.id}>
                <div className="caption">
                  <h5>
                    <span>{campus.name}</span>
                  </h5>
                </div>
                <Link to={`/campus/${campus.id}`}>
                  <img className="thumbnail" src={campus.image} />
                </Link>
                <small className="caption"
                  className="deleteCampus"
                    id={campus.id}
                  onClick={props.handleClick}>Delete Campus
                  </small>
              </div>
            );
          })
      }
    </div>
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    campuses: state.campuses,
    students: state.students
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CampusList));
//
// We need to wrap the component in `withRouter` so that the NavLinks will be able to update
// Because `connect` implements `shouldComponentUpdate`, it will block re-rendering unless it detects
// a prop change. When we change the url, neither the messages nor the channels we send to the ChannelList
// component change, so the component doesn't re-render. What `withRouter` does is it passes the Router's
// props down to its inner component.
//
// It's equivalent to saying:
//// ...elsewhere, in a `render`:
