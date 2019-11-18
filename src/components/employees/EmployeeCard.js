import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./employee.png')} alt="Kennel Employee" />
          </picture>
          <h3>Name: <span className="card-employeename">Blake Johnson</span></h3>
        </div>
      </div>
    );
  }
}

export default EmployeeCard