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
    // to detect hover it uses internal mechanism
    $hover: PropTypes.bool,
    text: PropTypes.string,
    zIndex: PropTypes.number
  };

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {

    const {text, zIndex, $hover ,title} = this.props;
    const style = {
      ...windmillStyle,
      zIndex: $hover ? 1000 : zIndex
    };
    // there is a possibility to use stick as a pointer - plan to later use
    const circleStyle = $hover ? windmillCircleStyleHover : windmillCircleStyle;
    const stickStyle = $hover ? windmillStickStyleHover : windmillStickStyle;

    return (

       <div style={style}>
          <div style={circleStyle}>
            <img width="100" src={szelmalom}
              alt={`Marker of windmill  ${title}`}
            />
            {text}
          </div>
          <div style={stickStyle} />
       </div>

    );
  }
}
export default WindmillComponent;
