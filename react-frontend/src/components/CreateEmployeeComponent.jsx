import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

export default class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      email: "",
    };

    this.onChange = this.onChange.bind(this);
    this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    this.getTitle = this.getTitle.bind(this);
  }

  async componentDidMount() {
    if (this.state.id === "-1") {
      return;
    }
    let result = await EmployeeService.getEmployeeById(this.state.id);
    let employee = result.data;

    this.setState({
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
    });
  }

  async saveOrUpdateEmployee(e) {
    e.preventDefault();

    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
    };

    console.log("employee => ", JSON.stringify(employee));

    if (this.state.id === "-1") {
      const result = await EmployeeService.setEmployee(employee);
      this.props.history.push("/employees");
    } else {
      const result = await EmployeeService.updateEmployee(
        employee,
        this.state.id
      );
      this.props.history.push("/employees");
    }
  }

  getTitle() {
    if (this.state.id === "-1") {
      return <h3 className="text-center">Add Employee</h3>;
    } else {
      return <h3 className="text-center">Update Employee</h3>;
    }
  }

  cancel() {
    this.props.history.push("/employees");
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>First Name: </label>
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.onChange}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>Last Name: </label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.onChange}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>Email: </label>
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onChange}
                    ></input>
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateEmployee}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
