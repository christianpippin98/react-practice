import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
          <div className="card-content">
            <picture>
              <img src={require('./location.png')} alt="Location" />
            </picture>
            <h2>Name: <span className="card-locationname">{this.props.location.name}</span></h2>
            <h3>Address: <span className="card-locationaddress">{this.props.location.address}, {this.props.location.city}, {this.props.location.state}</span></h3>
            <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Remove</button>
          </div>
      </div>
    );
  }
}

export default LocationCard