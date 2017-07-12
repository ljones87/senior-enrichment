import React from 'react';
import store from '../store/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

export default class AddStudent extends React.Component {
  constructor() {
    super()
    this.state= {
      studentName: '',
      studentEmail: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange (evt) {
    const value = evt.target.value;
    this.setState({
      studentName: value,
    });
  }

  handleEmailChange (evt) {
    const value = evt.target.value;
    this.setState({
      studentEmail: value,
    });
  }

  handleSubmit (evt) {
    evt.preventDefault();

  }


  render() {
    return (
      <div style={{marginTop: '70px', marginLeft: '20px'}}>
      <h3>Student Information</h3>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>

          <div className="form">
            <label className="col-sm-2 control-label" onChange={this.handleNameChange}>Student Name</label>
            <div className="col-sm-2">
              <input name="name" type="text" className="form-control" />
            </div>
          </div>

          <div className="form">
            <label className="col-sm-2 control-label">Student Email</label>
            <div className="col-sm-2">
              <input name="email" type="text" className="form-control" />
            </div>
          </div>

          <div className="col-sm-offset-2 col-sm-10">
            <button style={{marginTop: '10px'}} type="submit"  className="btn btn-primary">submit</button>
          </div>

        </form>
        </div>
      )
    }
}
