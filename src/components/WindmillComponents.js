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
    zIndex: PropTypes.number,
    id: PropTypes.string,
    location: PropTypes.object,
  };

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {

    const {text, zIndex, $hover ,title, id, location} = this.props;
    const style = {
      ...windmillStyle,
      zIndex: $hover ? 500 : zIndex
    };
    // there is a possibility to use stick as a pointer - plan to later use
    const circleStyle = $hover ? windmillCircleStyleHover : windmillCircleStyle;
    const stickStyle = $hover ? windmillStickStyleHover : windmillStickStyle;

    return (

       <div style={style} onClick = {() => this.props.onWindmillClick()} >
          <div style={circleStyle} >
            <img width="100" src={szelmalom}
              alt={`Marker of windmill of  ${title}`}
            />
            {text}
          </div>
          <div style={stickStyle} />
       </div>

    );
  }
}
export default WindmillComponent;
