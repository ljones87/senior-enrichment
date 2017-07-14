
import React from 'react';

export default function Student (props) {

  const student = props.student;
  console.log("****console from Student.jsx",student)
  return (
    <li className="media">
      <div className="media-body">
        <h4 className="media-heading">{ student.name }</h4>
      </div>
    </li>
  );
}

//<img className="media-object" src={student.author.image} alt="image" />
