import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = (coords) => {
  return (
    <div className="marker"></div>
  );
};

// eslint-disable-next-line react/prefer-stateless-function
class Map extends Component {
  render() {
    const center = this.props.coords;
    const zoom = 16;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyA4AKfmgCxb2I5-MpQ0GFcFGC0WPE68mlU' }}
          center={center}
          defaultZoom={zoom}
        >
          <Marker lat={center.lat} lng={center.lng} />  
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
