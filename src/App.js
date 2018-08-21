import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import szelmalom from './szelmalom.gif'

import MenuComponent from './components/MenuComponent.js'
import MyMapComponent from './components/MyMapComponent.js'
import * as data from './Adata/location.json';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import {FoursquareComponent} from './components/FoursquareComponent.js'

const Escape = 27

class App extends Component {

  state = {
    query: '',
    filter: null,
    location: [],
    searchedLocation: null,
    venueInfo : {
      title: "Title is fetching...",
      type: "Data is downloading...",
      imageUrl: szelmalom,
      alt: "photo of ",
      suffix: null,
      address: "Downloading...",
      contact: "Content is downloading from Foursquare...",
      venue_id: "4b27dbcdf964a520498b24e3",
      text: "For Foursquare based information of the nearest hotel, click here. Location of the windmill / Address: "

    },
    needOpen: false,
  
  }

  componentDidMount () {
    this.loads();

    document.addEventListener('keyup', ev => {
        ev.preventDefault()
        if (ev.keyCode === Escape) {
            document.querySelector('.sidebar').classList.remove('sidebar-move-in')
            this.setFalse();
            this.removal();
            this.updateQuery('');
        }
    })

  }
  // hide the sidebar 
  removal = () => this.state.needOpen ? 'true path' : document.querySelector('.info-widow').classList.remove('info-widow-move-in')

  // loading the marker data from local file
  loads = () => {
    let location = [];
    location.push(...data);
    this.setState({ location: location })

  }

  updateQuery = query => {
    this.setState({ query: query })

  }

  // MenuComponents list item click handler
  listItemClick = e => {
    this.setFalse();
    this.setState({ query: e.target.textContent });
    let venue = {...this.state} ;
    venue.location.filter(
      (venu) => venu.id === e.target.id).map(venu => this.setState(
        {venueInfo :
          { title: venu.title,
            address: venu.address,
            imageUrl: venu.imageUrl,
            type: venu.type ,
            venue_id: venu.venue_id,
            contact: venu.contact.phone,
            alt: venu.alt,
            text: venu.text,
      
          } 
        }
      )
    ) 
 
    this.stateSet();

  }

  // handles the info window opening state
  stateSet =() => {
    this.setState((prevState)=> {
    let newStat;
    prevState.needOpen ? newStat = true : newStat = true;
    document.querySelector('.info-widow').classList.add('info-widow-move-in');
    return {needOpen: newStat}
    });
  }

  setFalse = () => this.setState({ needOpen: false })

  // windmill object click handler and set state from its value for infowindow
  windmillClick = e => {
    this.setFalse();
    let venue = {...this.state} ;
    venue.location.filter(
      (venu) => venu.id === e).map(venu => this.setState({ venueInfo :{
        title: venu.title,
        address: venu.address,
        imageUrl: venu.imageUrl,
        type: venu.type ,
        venue_id: venu.venue_id,
        contact: venu.contact.phone,
        alt: venu.alt,
        text: venu.text, } 
      }))

        this.stateSet();
  }

  updateSearched = searchedLocations => {
    this.setState({searchedLocation: searchedLocations});

  }

    // handle API call using venue id and set state property 
 
  infoWindowClicked = elem_id => { 
    FoursquareComponent(elem_id)
      .then(infoVenue => {
        if (infoVenue){
          this.setState({venueInfo: infoVenue})
        }
      }
    )
  }

  updateVenue = venueObject => {
    this.setState({ venueInfo: venueObject});
  }

  // render the menu and the map 
  render() {

    let currentFilter = []

      if (this.state.searchedLocation === null) {
        currentFilter = this.state.location
      }
      else { currentFilter = this.state.searchedLocation }

      if (this.state.query) {
        const match = new RegExp(escapeRegExp(this.state.query), 'i')
        currentFilter = this.state.location.filter((sear) => match.test(sear.title))
      } 
      else { currentFilter = this.state.location}
      
    currentFilter.sort(sortBy('title'));


    return (
  
      <div className="App">
        <header className="App-header">

          <section id = "hamburger-menu" tabIndex="0">
            <a className="hamburger-menu" tabIndex="0" aria-label="Toggle Primary Menu" role="button" onClick={() => document.querySelector('#sidebar')
                .classList.toggle('sidebar-move-in')}>
              <svg className="hamburger-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"/>
              </svg>
            </a>
          </section>

          <section id = "App-title">
            <h1 className="App-title">React Windmill Map</h1>
          </section>

          <section id = "logo">
            <img src={logo} className="App-logo" alt="logo" />
          </section>

        </header>

        <main>
            <section id = "menu">
              <MenuComponent
                searched = {currentFilter}
                updateQuery = {this.updateQuery}
                query = {this.state.query}
                onItemClick = {this.listItemClick}
                needOpen = {this.state.needOpen}
                setFalse = {this.setFalse}
                venueInfo = {this.state.venueInfo}
                infoWindowClicked = {this.infoWindowClicked}
                updateVenue = {this.updateVenue}
              />
            </section>

            <div id ="map" role="application" className="map" ref="map">
              <MyMapComponent
                searched = {currentFilter}
                onItemClick = {this.windmillClick}
                venueInfo = {this.state.venueInfo}
                setFalse = {this.setFalse}
              />
            </div>

        </main>
      </div>

    );

  }
}

export default App;
