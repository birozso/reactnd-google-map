import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import shouldPureComponentUpdate from 'react';
import { AKEY } from '../Adata/API.js';
import '../App.css';
import WindmillComponent from './WindmillComponents';
import {K_CIRCLE_SIZE, K_STICK_SIZE} from './WindmillStyle.js';

class MyMapComponent extends Component {

  

    static propTypes = {
      center: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object

      ]),

      zoom: PropTypes.number,
      onCenterChange: PropTypes.func,
      onHoverKeyChange: PropTypes.func,
      setFalse: PropTypes.func,

    };

    static defaultProps = {
      center: [52.0 , 4.75],
      zoom: 8,

    }

    _onChildClick = (key, childProps) => {
      this.props.onCenterChange([childProps.lat, childProps.lng]);
  
    }

    _onClick = ({x, y, lat, lng, event}) => {
      document.querySelector('.info-widow').classList.remove('info-widow-move-in')
      this.props.setFalse();
  
    }

    shouldComponentUpdate = shouldPureComponentUpdate;

    // calculate the object and the mouse distance for proper hover, click experience
    _distanceToMouse = (markerPos, mousePos, markerProps) => {
      const x = markerPos.x + 10;
      const y = markerPos.y - K_STICK_SIZE - K_CIRCLE_SIZE + 75 / 2;
      const distanceKoef =  1 ;
      return distanceKoef * Math.sqrt((x - mousePos.x) * (x - mousePos.x) + (y - mousePos.y) * (y - mousePos.y));
  
    }


    render() {

      const {searched} = this.props

      return (

        // set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: AKEY }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            onClick ={this._onClick}
            distanceToMouse= {this._distanceToMouse}
            hoverDistance= {K_CIRCLE_SIZE / 1.5}
            zoom= {this.props.zoom}
            center= {this.props.center} 
            tabIndex= "-1"
            role= "application"
          >

            {searched.map(location => (
                <WindmillComponent
                  key= {location.id}
                  id= {location.id}
                  lat= {location.position.lat}
                  lng= {location.position.lng}
                  title = {location.title}
                  text= {location.title}
                  address= {location.address}
                  type= {location.type}
                  location= {location}
                  zIndex=  {location.zIndex}
                  onChildClick= {this._onChildClick}
                  onWindmillClick = {this.props.onItemClick}
                  role= "img"
                />

              ))}

          </GoogleMapReact>
        </div>

    );

  }

}

export default MyMapComponent;