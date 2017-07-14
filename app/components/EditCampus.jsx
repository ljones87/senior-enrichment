import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { updateCampusName } from '../store';

function EditCampus (props) {

  const campus = props.campus;
  return (
    <div >
      <h4>Edit campus</h4>
      <form className="form-horizontal" onSubmit={props.handleNameSubmit}>

        <div className= "row">
          <label className="col-sm-2 control-label">Campus Name</label>
          <div className= "col-sm-4">
            <input
              name="campusRename"
              type="text"
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="col-sm-offset-2 col-sm-10">
          <button style={{ marginTop: '10px' }} type="submit" className="btn btn-primary">submit</button>
        </div>

      </form>
    </div>
  );
 }

const mapStateToProps = function (state, ownProps) {
  const campusId = Number(ownProps.match.params.campusId);
  return {
    campus: state.campuses.find(campus => campus.id === campusId),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const campusId = Number(ownProps.match.params.campusId)
  return {
    handleNameSubmit (event) {
      event.preventDefault();
      const name = event.target.campusRename.value;
      const id = campusId;
      const info = {id, name};
      dispatch(updateCampusName(info));
    }

  };
};

const EditedCampusContainer = connect(mapStateToProps, mapDispatchToProps)(EditCampus);
export default EditedCampusContainer;
