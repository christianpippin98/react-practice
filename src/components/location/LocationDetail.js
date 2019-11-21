import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

class LocationDetail extends Component {

    state = {
        name: "",
        address: "",
        city: "",
        state: "",
        loadingStatus: true,
    }

    componentDidMount(){
        console.log("LocationDetail: ComponentDidMount");
        //get(id) from LocationManager and hang on to that data; put it into state
        LocationManager.get(this.props.locationId)
        .then((location) => {
            this.setState({
                name: location.name,
                address: location.address,
                city: location.city,
                state: location.state,
                loadingStatus: false
            });
        });
    }

    handleDelete = () => {
      //invoke the delete function in LocationManger and re-direct to the location list.
      this.setState({loadingStatus: true})
      LocationManager.delete(this.props.locationId)
      .then(() => this.props.history.push("/locations"))
  }

    render() {
      return (
        <div className="card">
          <div className="card-content">
            <picture>
              <img src={require('./location.png')} alt="Location" />
            </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Address: {this.state.address},{this.state.city},{this.state.state}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
          </div>
        </div>
      );
    }
}

export default LocationDetail;