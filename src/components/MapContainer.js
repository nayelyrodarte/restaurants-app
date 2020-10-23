import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  margin: 'auto',
  marginTop: '2em',
  width: '70%',
  height: '70%',
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: [],
    };
  }
  render() {
    console.log(this.props.data);

    const getLocations = this.props.data.map(
      (location) => location.address.location
    );

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={getLocations[0]}
      ></Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBQkt_arjzoW94e-2iWe0orNlP-FjjGAHg',
})(MapContainer);
