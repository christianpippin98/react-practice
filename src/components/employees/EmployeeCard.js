import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
          <div className="card-content">
            <picture>
              <img src={require('./employee.png')} alt="Employee" />
            </picture>
            <h2>Name: <span className="card-employeename">{this.props.employee.name}</span></h2>
          </div>
      </div>
    );
  }
}

export default EmployeeCard