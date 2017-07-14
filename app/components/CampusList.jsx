import React from 'react';

import { withRouter, NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeCampus } from '../store/index';
import AddCampus from './AddCampus';

function CampusList (props) {

  const { campuses } = props;

  return (
    <ul className="campusList">
      {
        campuses.map(campus => {
          return (
            <li key={campus.id}>
              <div
                style={{ marginTop: '20px', marginLeft: '50px' }}
                className="campuses"
                >{campus.name}</div>
                <Link  to={`/campus/${campus.id}`}>
                    <img className="media-object" src={campus.image} alt="image" />
                  </Link>
                 <span
                    className="deleteCampus"
                    id={campus.id}
                    onClick={props.handleClick}>Delete Campus
                  </span>
            </li>
          );
        })
      }

      <li>
        <NavLink to="/new-campus">Create a campus...</NavLink>
      </li>
    </ul>
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
