import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  margin: 'auto',
  marginTop: '2em',
  maxWidth: '80%',
  height: '50%',
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: [],
      customMarker: {},
    };
  }
  render() {
    console.log(this.props.data);

    const getAllLocations = this.props.data.map((location) => {
      return location.address.location;
    });

    const addCustomMarker = (e) => {
      return <Marker position={this.customMarker} />;
    };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        onClick={(e) => this.setState.customMarker(e.initialCenter)}
      >
        {addCustomMarker}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBQkt_arjzoW94e-2iWe0orNlP-FjjGAHg',
})(MapContainer);
