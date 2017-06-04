import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [{
        position: {
          lat: 48.8890532,
          lng: 2.3250886,
        },
        key: 'Paris',
        defaultAnimation: 2,
      }],
    };
  }

  render() {
    const { className } = this.props;
    const GettingStartedGoogleMap = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          ref={props.onMapLoad}
          defaultZoom={14}
          defaultCenter={{ lat: 48.8890532, lng: 2.3250886 }}
          onClick={props.onMapClick}
        >
          {props.markers.map((marker, index) => (
            <Marker
              {...marker}
              onRightClick={() => props.onMarkerRightClick(index)}
            />
          ))}
        </GoogleMap>
      ))
    );
    return (
      <figure className={className}>
        <GettingStartedGoogleMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA0bWdDJYoHNdol46B-XyNzh9HezoigMHY"
          loadingElement={
            <div style={{ height: '100%', width: '60%' }}>
            </div>
          }
          containerElement={
            <map />
          }
          mapElement={
            <div style={{ height: '100%',  width: '100%' }} />
          }
          markers={this.state.markers}
        />
      </figure>
    );
  }
}

Address.propTypes = {
  className: PropTypes.string.isRequired,
  translations: PropTypes.object.isRequired,
};

export default Address;