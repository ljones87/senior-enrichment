import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function SingleCampus(props) {
  const campus = props.campus;
  const students = props.students.filter(student => student.campusId === campus.id);

    return (
      <div className="campus">
        <div>
          <h3>{campus.name}</h3>
          <Link to={`/edit-campus/${campus.id}`}>
          <img src={campus.image}     className="img-thumbnail" />
          </Link>
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
    students: state.students
  };
};

const SingleCampusContainer = connect(mapStateToProps)(SingleCampus)
export default SingleCampusContainer;
