import React, { Component } from 'react';
import shouldPureComponentUpdate from 'react';
import PropTypes from 'prop-types'

import {
  windmillStyle,
  windmillCircleStyle, windmillCircleStyleHover,
  windmillStickStyle, windmillStickStyleHover } from './WindmillStyle.js';
  import szelmalom from '../szelmalom.gif'

class WindmillComponent extends Component {
  static propTypes = {
    // GoogleMap pass $hover props to hovered components
    // to detect hover it uses internal mechanism, explained in x_distance_hover example
    $hover: PropTypes.bool.isRequired,
    text: PropTypes.string,
    zIndex: PropTypes.number
  };

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {


    const {text, zIndex} = this.props;

    const style = {
      ...windmillStyle,
      zIndex: this.props.$hover ? 1000 : zIndex
    };

    const circleStyle = this.props.$hover ? windmillCircleStyleHover : windmillCircleStyle;
    const stickStyle = this.props.$hover ? windmillStickStyleHover : windmillStickStyle;

    return (
       <div style={style}>
          
          <div style={circleStyle}>
          <img width="100" src={szelmalom} 
    alt={`Marker of ${this.title}`} 
    />
            {text}
          </div>
          <div style={stickStyle} />
       </div>
    );
  }
}
export default WindmillComponent;