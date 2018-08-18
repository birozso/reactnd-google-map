import React from 'react';
import '../App.css';
import {
  infoTitle,
  infoContent,
  infoSubTitle,
  } from './InfoWindowStyle.js';

const InfoWindowComponent = ({ venueInfo, needOpen, closeInfoWindow }) => {

    return (

      <div className = "info-widow" id = "infoWindow"  >
          <div style={infoTitle}>
              Title is fetching...
          </div>
          <div style={infoContent}>
                  <div style={infoSubTitle}>Subtitle is downloading...</div>
                      <img src="http://maps.marnoto.com/en/5wayscustomizeinfowindow/images/vistalegre.jpg" alt="Porcelain Factory of Vista Alegre" height="115" width="83" />
                      <p>Content is downloading from Foursquare server...</p>
                  <div style={infoSubTitle}>Downloading...</div>
                      <p>Content is downloading from Foursquare...</p>

          </div>

      </div>

	  );

}


export default InfoWindowComponent;
