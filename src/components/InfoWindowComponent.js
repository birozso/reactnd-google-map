import React from 'react';
import '../App.css';
import {
  infoTitle,
  infoContent,
  infoSubTitle,
  } from './InfoWindowStyle.js';

const InfoWindowComponent = ({venueInfo}) => {

    console.log(venueInfo);

    return(

      <div className = "info-widow" id = "infoWindow"  >
          <div style={infoTitle}>
              {venueInfo.title}
          </div>
          <div style={infoContent}>
                  <div id ="subType" style={infoSubTitle}>{venueInfo.type}</div>
                      <img src = {venueInfo.imageUrl} alt = {venueInfo.alt} height="115" width="83" />
                      <p>For Foursquare based information of the nearest hotel, click here. Location if the windmill / Address: </p>
                  <div id = "subtAddr" style={infoSubTitle}>{venueInfo.address}</div>
                      <p>Opening hours: {venueInfo.hour}</p>

          </div>

      </div>

	  );

}


export default InfoWindowComponent;
