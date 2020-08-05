import React, { Component } from 'react';
import images from './data.js';
import Header from './Header.js';
import ImageList from './ImageList.js';
import CreatureFilter from './CreatureFilter.js';
import './App.css';



export default class App extends Component {
  state = {
      filter: images,
  }

  handleFilterChange = (e) => {
    const filterItems = e.target.value
    this.setState({filter: images.filter(image => image.keyword === filterItems)})
  }

    render() {
    return (
      <div>
        <Header />
        <div id="filter">
          <p>Select A Creature </p>
          <select onChange={ this.handleFilterChange }> 
          <CreatureFilter images={images} /> 
          </select>
        </div>
        <ImageList images={ this.state.filter }/>
      </div>
    )
  }
}
