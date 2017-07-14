import React from 'react';
//import axios from 'axios';
import { removeStudent } from '../store/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AddStudent from './AddStudent';

function allStudents(props) {
  const students = props.students;
  const campuses = props.campuses
  return (
    <div >
      <h3>Students</h3>
      <div className="row">
        <ul>
          {students.map(student => {
            return (
              <span key={student.id}>
                <li  >{student.name}
                  <span
                    className="deleteStudent"
                    id={student.id}
                    onClick={props.handleClick}>delete</span>
                </li>
              </span>
            );
          })}
        </ul>
      </div>
      <div className="studentForm">
        <AddStudent />
      </div>
    </div>


  )
}


const mapStateToProps = function (state) {
  return {
    students: state.students,
    campuses: state.campuses
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: function (event) {
      const studentId = event.target.id;
      dispatch(removeStudent(studentId));
    }
  }
}

const StudentListContainer = connect(mapStateToProps, mapDispatchToProps)(allStudents)
export default StudentListContainer;
