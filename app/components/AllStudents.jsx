import React from 'react';
//import axios from 'axios';
import store from '../store/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

function allStudents (props) {
  const students = props.students;
    return (
      <div >
      <h3>Students</h3>
        <div className="row">
          <ul>
          { students.map(student => {
             return (
                <li key={student.id}>{student.name}</li>
             )
          })}
          </ul>
        </div>

      </div>

    )
  }

const mapStateToProps = function(state) {
  return {
    students: state.students,
  };
}

const StudentListContainer = connect(mapStateToProps)(allStudents)
export default StudentListContainer;
