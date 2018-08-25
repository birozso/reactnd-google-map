import React, { Component } from 'react';
import shouldPureComponentUpdate from 'react';
import PropTypes from 'prop-types'

import {
  windmillStyle,
  windmillCircleStyle,
  windmillStickStyle, windmillStickStyleHover } from './WindmillStyle.js';
import szelmalom from '../szelmalom.gif'

  // MyMapComponent passes values for creation , App receives click information and handles that.

class WindmillComponent extends Component {

  componentDidMount () {
    this.loads();
  }

  // convert the object and loading the marker style to state from file/obj
  loads = () => {
    let windmillStyler = JSON.parse(JSON.stringify(windmillCircleStyle));
    this.setState({ windmillStyler: windmillStyler })

  }

  state = {

    windmillCircleStyleHover : {
      position: 'absolute',
      left: 50,
      top: 10,
      width: 90,
      height: 90,
      textAlign: 'center',
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
      padding: 0,
      cursor: 'pointer',
      border: '3px solid black',
      borderRadius: '100px',
      backgroundColor: 'lightgray',
      opacity: 0.95,
    
    },
  }

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

    const {text, zIndex, $hover ,title, id } = this.props;
    const style = {
      ...windmillStyle,
      zIndex: $hover ? 500 : zIndex
  
    };

 
    

    // there is a possibility to use stick as a pointer - plan to later use
    const circleStyle = $hover ? this.state.windmillCircleStyleHover : this.state.windmillStyler;
    const stickStyle = $hover ? windmillStickStyleHover : windmillStickStyle;


    /* if there is a click on a marker , clicked markers get a background color , if the previous state was a clicked one
    *  it set back for the original shape . Check method uses prevState variable.
    */

    return (



       <div style={style} onClick = {() => {this.props.onWindmillClick(id);
         this.setState((prevState) => {
            if (prevState.windmillStyler.backgroundColor === 'lightblue'){ 
              return {windmillStyler: 
                {position: 'absolute',
                left: 50,
                top: 10,
                width: 90,
                height: 90,
                textAlign: 'center',
                color: 'white',
                fontSize: 0,
                fontWeight: 'bold',
                padding: 0,
                cursor: 'pointer',
                opacity: 0.75,
                border: 'none',

                }
              }
            }
            else  return {windmillStyler: 
                {border : '3px solid blue',
                position: 'relative',
                width: 90,
                height: 90,
                left: 50,
                top: 10,
                textAlign: 'center',
                color: 'darkblue',
                fontSize: 16,
                fontWeight: 'bold',
                padding: 0,
                cursor: 'pointer',
                opacity: 0.75,
                backgroundColor: 'lightblue',

                }
              }
            }
          );
          this.setState((prevState) => {
            if (prevState.windmillCircleStyleHover.backgroundColor === 'lightblue'){ 
              return {windmillCircleStyleHover: 
                {position: 'absolute',
                left: 50,
                top: 10,
                width: 90,
                height: 90,
                textAlign: 'center',
                color: 'black',
                fontSize: 16,
                fontWeight: 'bold',
                padding: 0,
                cursor: 'pointer',
                border: '3px solid black',
                borderRadius: '100px',
                backgroundColor: 'lightgray',
                opacity: 0.95,

                }
              }
            }
            else  return {windmillCircleStyleHover: 
                {position: 'absolute',
                left: 50,
                top: 10,
                width: 90,
                height: 90,
                textAlign: 'center',
                color: 'darkblue',
                fontSize: 16,
                fontWeight: 'bold',
                padding: 0,
                cursor: 'pointer',
                border: '3px solid blue',
                backgroundColor: 'lightblue',
                opacity: 0.95,
                borderRadius: 0,

                }
              }
            }
          );
          }
        } value = {id}>
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