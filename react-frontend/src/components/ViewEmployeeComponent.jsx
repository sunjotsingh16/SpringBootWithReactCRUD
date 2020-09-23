import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

export default class ViewEmployeeComponent extends Component {
  state = {
    id: this.props.match.params.id,
    employee: {},
  };

  async componentDidMount() {
    const result = await EmployeeService.getEmployeeById(this.state.id);
    this.setState({
      employee: result.data,
    });
  }

  render() {
    return (
      <div>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center">View Employee Details</h3>
          <div className="card-body">
            <div className="row">
              <label>First Name: </label>
              <div>{this.state.employee.firstName}</div>
            </div>
            <div className="row">
              <label>Last Name: </label>
              <div>{this.state.employee.lastName}</div>
            </div>
            <div className="row">
              <label>Email: </label>
              <div>{this.state.employee.email}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
