import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
          <div className="card-content">
            <picture>
              <img src={require('./owner.png')} alt="Owner" />
            </picture>
            <h2>Name: <span className="card-ownername">{this.props.owner.name}</span></h2>
          </div>
      </div>
    );
  }
}

export default OwnerCard