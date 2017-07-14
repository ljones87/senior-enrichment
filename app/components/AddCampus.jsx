import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addNewCampus } from '../store';


function AddCampus (props) {

  const campuses = props.campuses;

  return (
    <div >
      <h4>Add New Campus</h4>
      <form className="form-horizontal" onSubmit={props.handleCampusSubmit}>

        <div className= "row">
          <label className="col-sm-2 control-label">Campus Name</label>
          <div className= "col-sm-4">
            <input
              name="campus"
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

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleCampusSubmit (event) {
      event.preventDefault();
      const name = event.target.campus.value;
      const image = '/images/OtherCampus.jpg';
      const info = {name, image};
      dispatch(addNewCampus(info));
    }

  };
};

const NewCampusContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AddCampus));
export default NewCampusContainer;
