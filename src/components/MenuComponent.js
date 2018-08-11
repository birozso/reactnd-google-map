import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../App.css';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class MenuComponent extends Component {

    static propTypes = {
        searched: PropTypes.array.isRequired
      }
    
    state = {
        query: '',
        filter: null,

    }
//         searched: []


    // blocking the first space in the search field by replace method && update query
        
    searcher = (query) => {
        let trimmedQuery = query.replace(/^\s+/, '');
        this.setState({query: trimmedQuery })
    }
   
 

    render() {

         let showSearch
        if (this.state.query) {
          const match = new RegExp(escapeRegExp(this.state.query), 'i')
          showSearch = this.props.searched.filter((sear) => match.test(sear.title))
        } else {
            showSearch = this.props.searched
        }
        showSearch.sort(sortBy('title'))
        

        return(

            <div id="sidebar" className="sidebar" role = "search" >
                <a className="hamburger-big-menu" tabIndex="0" aria-label="Toggle Primary Menu" role="button"  onClick={() => document.querySelector('#sidebar')
                    .classList.toggle('sidebar-move-in')}>
                <svg className="hamburger-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"/>
                </svg>
            </a>
            
                <input className="search-input"
                    type="text"
                    placeholder="Search location"
                    role="search"
                    aria-label="Search location by typing"
                    tabIndex="0"
                    value={ this.state.query }
                    onChange={event => this.searcher(event.target.value) }
                />
                <ul className="locations-list"> {
                    showSearch.map((sear, index) =>
                    (<li key={index}>{sear.title}</li>))
                    }
                </ul>
            </div>
        );

    }

}

export default MenuComponent;
