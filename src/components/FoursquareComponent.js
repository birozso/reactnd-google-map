import React from 'react';
import { CLIENT_ID, CLIENT_SECRET} from '../Adata/API';

export const FoursquareComponent = (elem_id) => {
    // variable for configuring the API fetch command
    let request = {
        url: 'https://api.foursquare.com/v2/venues/',
        method: 'GET',
        venue_id: elem_id,
        client_secret: CLIENT_SECRET,
        client_id: CLIENT_ID,
        ll: '40.7243,-74.0018',
        query: 'hotel',
        v: '20180819',
        limit: 1,
    };

    let venueInfo = {
        title: '',
        address: '',
        imageUrl: '',
        type: '',
        venue_id: elem_id,
        contact: '',
        alt: ' photo of hotel, restaurant ',
        text: 'Address and other info :',

    };
    // if response OK then disassemble the response and send beck to caller func. In case of failure indicate to the user.
    return fetch(`https://api.foursquare.com/v2/venues/${request.venue_id}?client_id=${request.client_secret}G&client_secret=${request.client_id}F&v=${request.v}&limit=${request.limit}`)
        .then(response => {
            if (!response.ok) {
                throw response;
            } else  return response.json();
        })
        .then(venueInf => {
            const photoUrl = venueInf.response.venue.bestPhoto.prefix + 'height115' + venueInf.response.venue.bestPhoto.suffix;
            venueInfo = {
                title: venueInf.response.venue.name,
                address: venueInf.response.venue.location.address,
                imageUrl: photoUrl,
                type: venueInf.response.venue.categories[0].name,
                venue_id: venueInf.response.venue.id,
                contact: venueInf.response.venue.contact.phone,
                alt: ' photo of hotel, restaurant ',
                text:  "Address and other info : ",

            };

            return venueInfo;
            
        })
        .catch(error => {
            alert("Failure from server: "+error);
        });

};