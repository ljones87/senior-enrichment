import React from 'react';
import store, { fetchCampuses } from '../store/campuses';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addNewStudent } from '../store/students';


class addStudent extends React.Component {

  render() {
  const campuses = this.props.campuses;

  return (
    <div >
      <h3>Student Information</h3>
      <form className="form-horizontal" onSubmit={this.props.handleSubmit}>

        <div className="row">
          <label className="col-sm-2 control-label">Student Name</label>
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
          <label className="col-sm-2 control-label">Student Email</label>
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
          <div className= "col-sm-3">
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

const NewStudentContainer = connect(mapStateToProps, mapDispatchToProps)(addStudent);
export default NewStudentContainer;



// const CampusListContainer = connect(mapStateToProps)(allCampuses)
// export default CampusListContainer;
