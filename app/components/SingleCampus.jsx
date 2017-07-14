import React from 'react';
import { connect } from 'react-redux';

function SingleCampus(props) {
  const campus = props.campus;
  const students = props.students;

    return (
      <div className="campus">
        <div>
          <h3>{campus.name}</h3>
          <img src={campus.image} className="img-thumbnail" />
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th></th>
              <th>Student Name</th>
              <th>E-mail</th>
            </tr>
          </thead>
          <tbody>
            {
              students.map(student => (
                <tr key={student.id}>
                  <td>
                    <button className="btn btn-default btn-xs">
                      <span >X</span>
                    </button>
                  </td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }


const mapStateToProps = function (state, ownProps) {
  const campusId = Number(ownProps.match.params.campusId);
  return {
    campus: state.campuses.find(campus => campus.id === campusId),
    students: state.students,
  };
};

const SingleCampusContainer = connect(mapStateToProps)(SingleCampus)
export default SingleCampusContainer;
