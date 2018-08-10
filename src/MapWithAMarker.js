import React from "react";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
  
  const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
        >
        <div>Hello There!</div>
     </Marker>
    </GoogleMap>
  ));


    return (
  
  <MapWithAMarker
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCDox9kUJXagbByy1rFZ8yFpK3vOZ6KQMo&v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `500px` , width: `10%` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
    )


export default MapWithAMarker; 