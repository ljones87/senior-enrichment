import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { updateStudentInfo } from '../store';

function EditStudent(props) {

  const student = props.student;
  const campuses = props.campuses;

  return (
    <div >
      <h4>Update {student.name}'s Information </h4>
      <form className="form-horizontal" onSubmit={props.handleNameSubmit}>

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
          <div className="col-sm-4">
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

const mapStateToProps = function (state, ownProps) {
  const studentId = Number(ownProps.match.params.studentId);
  return {
    student: state.students.find(student => student.id === studentId),
    campuses: state.campuses
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const studentId = Number(ownProps.match.params.studentId);
  return {
    handleNameSubmit (event) {
      event.preventDefault();
      const id = studentId;
      const name = event.target.name.value;
      const email = event.target.email.value;
      const campus = event.target.campus.value;
      const info = {id, name, email, campus};
      dispatch(updateStudentInfo(info));
    }
  };
};

const EditedStudentContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(EditStudent));
export default EditedStudentContainer;
