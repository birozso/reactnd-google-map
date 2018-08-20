import { CLIENT_ID, CLIENT_SECRET} from '../Adata/API';

const FoursquareComponent = () => {

    const request = {
        url: 'https://api.foursquare.com/v2/venues/explore',
        method: 'GET',
    
            client_secret: CLIENT_SECRET,
            client_id: CLIENT_ID,
            ll: '40.7243,-74.0018',
            query: 'hotel',
            v: '20180819',
            limit: 1,
    };



    fetch(`https://api.foursquare.com/v2/venues/explore?client_id=${request.client_secret}G&client_secret=${request.client_id}F&v=${request.v}&limit=${request.limit}&ll=52.819893,6.922422&query=${request.query}`)
    .then(response => {
        if (!response.ok) {
          throw response;
        } else  return response.json();
      })
      .then(data => {
        const venueId = data.response.groups[0].items[0].venue.id;
        console.log(venueId);
      })
    .catch(error => {
        console.log(error);
    });




}
export {FoursquareComponent};

