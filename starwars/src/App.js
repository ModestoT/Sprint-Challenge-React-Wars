import React, { Component } from 'react';
import './App.css';

import CharacterList from './components/CharacterList';
import PageNumbers from './components/PageNumbers';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      currentPage: 1,
      charPerPage: 6,
      id: ''
    };
  }

  handlePage = e => {
    this.setState({
      currentPage: e.target.id
    });
  }
  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    // console.log(this.state.starwarsChars)
    
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList characterDataList={this.state.starwarsChars} currentPage={this.state.currentPage} charPerPage={this.state.charPerPage}/>
        <PageNumbers characterDataList={this.state.starwarsChars} charPerPage={this.state.charPerPage} handlePage={this.handlePage}/>
      </div>
    );
  }
}

export default App;
