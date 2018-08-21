import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../App.css';
import InfoWindowComponent from './InfoWindowComponent';


class MenuComponent extends Component {

    static propTypes = {
        searched: PropTypes.array.isRequired,

      }




    // blocking the first space in the search field by replace method && update query in App

    unifier = (query) => {
        let trimmedQuery = query.replace(/^\s+/, '');
        this.props.updateQuery(trimmedQuery)
    }



    render() {
                const {needOpen, venueInfo, infoWindowClicked, updateVenue} = this.props


        return(

<div className = "wrapper">
            <div id = "sidebar"
              className = "sidebar"
              role = "search" >
                <a className = "hamburger-big-menu"
                   tabIndex = "0"
                   aria-label = "Toggle Primary Menu"
                   role = "button"
                   onClick = {() => {document.querySelector('#sidebar').classList.toggle('sidebar-move-in')
                      this.props.updateQuery('')
                      this.props.setFalse();
                      document.querySelector('.info-widow').classList.remove('info-widow-move-in')}}>
                        <svg className = "hamburger-icon"
                             xmlns = "http://www.w3.org/2000/svg"
                             viewBox = "0 0 24 24">
                                <path d = "M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"/>
                        </svg>
                  </a>

                <input className ="search-input"
                    type = "text"
                    placeholder = "Search location"
                    role = "search"
                    aria-label = "Search location by typing"
                    tabIndex = "0"
                    value = { this.props.query }
                    onChange = {event => this.unifier(event.target.value) }

                />
                <ul className = "locations-list" > {
                    this.props.searched.map((sear, index) =>
                    (<li key = {index}
                         id = {sear.id}
                         onClick = {this.props.onItemClick}
                         tabIndex = "0">
                         {sear.title}

                     </li>))
                    }
                </ul>
              </div>

                {
                  <InfoWindowComponent
                    venueInfo = {venueInfo}
                    needOpen = {needOpen}
                    infoContentClick = {infoWindowClicked}
                    updateVenue = {updateVenue}
                  />

                }

            </div>


        );

    }

}

export default MenuComponent;
