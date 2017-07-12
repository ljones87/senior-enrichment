import React from 'react';
import axios from 'axios';
//import images from '../../../public/images';
import store from '../store/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

function allCampuses(props) {
  const campuses = props.campuses;
    return (
      <div>
      <h2>Campuses</h2>
        <div className="row">
           <div>{
             campuses.map(campus => {
              return (
                 <div  href="#">
                  <div className="campuses" style={{marginTop: '30px', marginLeft: '30px'}} key={campus.id} >{campus.name}
                    <img className="media-object" src={campus.image} alt="image" />
                  </div>
                </div>)
             })
            }</div>
        </div>

      </div>
    )
  }


const mapStateToProps = function(state) {
  return {
    campuses: state.campuses,
  };
}

const CampusListContainer = connect(mapStateToProps)(allCampuses)
export default CampusListContainer;
