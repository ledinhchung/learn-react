import React, { Component } from 'react';

export default class CreateExercise extends Component {

  render() {
    return (
      <div className="container">
        <h1>Hello from create exercise component</h1>
        <form>
          <div className="form-group row">
            <label for="user_name" className="col-sm-2 col-form-label">User Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="user_name" placeholder="User Name" />
            </div>
          </div>
          <div className="form-group row">
            <label for="user_name" className="col-sm-2 col-form-label">User Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="user_name" placeholder="User Name" />
            </div>
          </div>
          <div className="form-group row">
            <label for="user_name" className="col-sm-2 col-form-label">User Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="user_name" placeholder="User Name" />
            </div>
          </div>
          <div className="form-group row">
            <label for="user_name" className="col-sm-2 col-form-label">User Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="user_name" placeholder="User Name" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}
