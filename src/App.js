import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MenuComponent from './components/MenuComponent.js'
import MyMapComponent from './MyMapComponent.js'
import * as data from './Adata/location.json';

//import MapComponent from './components/MapComponent.js'

class App extends Component {

  state = {
    filter: null,
    location: []
  }

  componentDidMount () {
    this.loads();
  }

  loads = () => {
    let location = [];
    location.push(...data);
    this.setState({ location: location });
  }

  render() {

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
        <MenuComponent searched = {this.state.location}/>

        </section>
          <MyMapComponent/>


        </main>
      </div>

    );

  }
}

export default App;
