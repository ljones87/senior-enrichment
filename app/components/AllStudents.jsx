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
               <span key={student.id}>
                <li  >{student.name}
                  <span className="delete" onClick={props.handleClick}>delete</span>
                </li>

                </span>
             );
          })}
          </ul>
        </div>

      </div>

    )
  }

  /*

   <td>
                <SortableItem key={`item-${index}`} index={index} value={value} />
                    </td>
                    <td>
                    <button>Remove{index}</button>
                </td>
             </tr>
  */

const mapStateToProps = function(state) {
  return {
    students: state.students,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick(event) {
      const name = event
      console.log(event)
      dispatch(deleteStudent(name))
    }
  }
}

const StudentListContainer = connect(mapStateToProps, mapDispatchToProps)(allStudents)
export default StudentListContainer;
