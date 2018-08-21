import React from 'react';
import '../App.css';
import {
  infoTitle,
  infoContent,
  infoSubTitle,
  } from './InfoWindowStyle.js';


    const InfoWindowComponent = props => {


    return(

      <div className = "info-widow" id = "infoWindow"  >
          <div style={infoTitle}>
              {props.venueInfo.title}
          </div>
          <div style={infoContent} onClick = {() => props.infoContentClick(props.venueInfo.venue_id) } value = {props.venueInfo.venue_id} >
                  <div id ="subType" style={infoSubTitle}>{props.venueInfo.type}</div>
                      <img src = {props.venueInfo.imageUrl} alt = {props.venueInfo.alt} height="115" width="83" />
                      <p>{props.venueInfo.text} </p>
                  <div id = "subtAddr" style={infoSubTitle}>{props.venueInfo.address}</div>
                      <p>Contact details: {props.venueInfo.contact}</p>

          </div>

      </div>

	);

}


export default InfoWindowComponent;
