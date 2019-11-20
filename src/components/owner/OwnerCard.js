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
            <h2>Phone Number: <span className="card-ownerphone">{this.props.owner.phoneNumber}</span></h2>
            <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Delete</button>
          </div>
      </div>
    );
  }
}

export default OwnerCard