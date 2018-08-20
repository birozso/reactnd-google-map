import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      type: "Subtitle is downloading...",
      imageUrl: "./szelmalom.gif",
      alt: "photo of ",
      suffix: null,
      address: "Downloading...",
      hour: "Content is downloading from Foursquare...",

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
            this.updateQuery('')
        }
    })

  }

request = () => FoursquareComponent();

  removal = () => this.state.needOpen ? 'true path' : document.querySelector('.info-widow').classList.remove('info-widow-move-in')

  loads = () => {
    let location = [];
    location.push(...data);
    this.setState({ location: location })

  }

  updateQuery = query => {
    this.setState({ query: query })

  }


  listItemClick = e => {
    this.setFalse();
    this.setState({ query: e.target.textContent });
    let venue = {...this.state} ;
    venue.location.filter(
      (venu) => venu.id === e.target.id).map(venu => this.setState({ venueInfo :{
        title: venu.title,
        address: venu.address,
        imageUrl: venu.imageUrl,
        type: venu.type ,
        venue_id: venu.venue_id,
        hour: venu.hour,
        alt: venu.alt } 
      }))
         
 
      this.stateSet();

  }

  stateSet =() => {
    this.setState((prevState)=> {
    let newStat;
    prevState.needOpen ? newStat = true : newStat = true;
    document.querySelector('.info-widow').classList.add('info-widow-move-in');
    return {needOpen: newStat}
    });
  }

  setFalse = () => this.setState({ needOpen: false })

  windmillClick = e => {
  /*  let venue = this.state.location.filter(
        venu => venu.id === e.target.id)
        this.setState({ venueInfo: venue }); */


        this.stateSet();
  }

  updateSearched = searchedLocations => {
    this.setState({searchedLocation: searchedLocations});

  }

  render() {

    let currentFilter = []

      if (this.state.searchedLocation === null) {currentFilter = this.state.location}
      else {currentFilter = this.state.searchedLocation }


      if (this.state.query) {
        const match = new RegExp(escapeRegExp(this.state.query), 'i')
        currentFilter = this.state.location.filter((sear) => match.test(sear.title))
      } else {
          currentFilter = this.state.location
      }
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
        />
        <button onClick = {() => this.request() } >Click me</button>
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
