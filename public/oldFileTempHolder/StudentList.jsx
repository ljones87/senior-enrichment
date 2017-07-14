import React, { Component } from 'react';
import { connect } from 'react-redux';
import Student from  './Student';
import AddStudent from './AddStudent';
import { changeCurrentCampus } from '../store';

function StudentList (props) {

  const { campusId, students} = props;

  return (
    <div>
      <span>Students</span>
      <ul className="media-list">
        { students.map(student => <Student student={student} key={student.id} />) }
      </ul>
      <AddStudent campusId={campusId} />
    </div>
  );
}

class studentListLoader extends Component {

  componentDidMount () {
    this.props.changeCurrentCampus(this.props.campus.name);
  }

  componentWillReceiveProps (nextProps) {
        console.log("********",next.props)
    if (nextProps.campus.name !== this.props.campus.name) {
      this.props.changeCurrentCampus(nextProps.campus.name);
    }
  }

  render () {
    return (
      <StudentList {...this.props} />
    );
  }
}

// const mapStateToProps = function (state, ownProps) {

//   const campusId = Number(ownProps.match.params.campusId);

//     if (campusId) {
//       return {
//         campus: state.campuses.find(campus => campus.id === campusId) || { name: '' },
//         students: state.students.filter(student => student.campusId === campusId),
//         campusId
//       };
//     }
//     return {students: state.students}
// };

// const mapDispatchToProps = function (dispatch) {
//   return {
//     changeCurrentCampus(campus) {
//       dispatch(changeCurrentCampus(campus));
//     }
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(studentListLoader);
