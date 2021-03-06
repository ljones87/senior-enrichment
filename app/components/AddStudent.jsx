import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addNewStudent } from '../store';


function AddStudent (props) {

  const campuses = props.campuses;

  return (
    <div >
      <h4>New Student Information</h4>
      <form className="form-horizontal" onSubmit={props.handleSubmit}>

        <div className="row">
          <label className="col-sm-2 control-label">Full Name</label>
          <div className="col-sm-3">
            <input
              name="name"
              type="text"
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="row">
          <label className="col-sm-2 control-label">Email</label>
          <div className="col-sm-3">
            <input
              name="email"
              type="text"
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="row">
          <label className="col-sm-2 control-label">Campus</label>
          <div className= "col-sm-4">
            <select
              name="campus"
              className="form-control"
              required> {
                campuses.map(campus => {
                  return <option key={campus.id}>{campus.name}</option>;
                })
              }
            </select>
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
    student: state.students,
    campuses: state.campuses,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit (event) {
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const campus = event.target.campus.value;

      const credentials = {name, email, campus};
      dispatch(addNewStudent(credentials));

    }
  };
};

const NewStudentContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AddStudent));
export default NewStudentContainer;

