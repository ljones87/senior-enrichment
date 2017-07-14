import React, { Component } from 'react';
import { connect } from 'react-redux';
import Student from  './Student';
import AddStudent from './AddStudent';
import { changeCurrentCampus } from '../store';
import { removeStudent } from '../store/index';

function StudentList (props) {
  const { campusId, students, campuses } = props;
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Delete</th>
          <th>Name</th>
          <th>Campus</th>
        </tr>
      </thead>
      <tbody>
        {
          students.map(student => (
            <tr key={student.id}>
              <td>
                <button className="btn btn-default btn-xs">
                  <span
                  className="glyphicon"
                  id={student.id}
                  onClick={props.handleClick}>X</span>
                </button>
              </td>
              <td>{ student.name }</td>
              <td>{ campuses.filter(campus => campus.id === student.campusId
              )[0].name}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
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

const StudentListContainer = connect(mapStateToProps, mapDispatchToProps)(StudentList)
export default StudentListContainer;
