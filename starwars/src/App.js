import React, { Component } from 'react';
import './App.css';

import CharacterList from './components/CharacterList';
import PageNumbers from './components/PageNumbers';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      temp: [],
      currentPage: 1,
      charPerPage: 6,
      id: ''
    };
    this.dataHolder = []; //empty array made to temp hold the data being fetched from the api
  }

  //method used to handle changing the page on the webpage
  handlePage = e => {
    const pageList = document.querySelectorAll('.page-list');
    const newPageList = Array.from(pageList);

    newPageList.forEach(page => {
      if(page.id === e.target.id){
        page.classList.add('current-page');
      } else {
        page.classList.remove('current-page');
      }
    });
    this.setState({
      currentPage: e.target.id
    });
  }

  //grabs the character data from the specificed api 
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
        // console.log(data.results[0].films);
        this.dataHolder = this.dataHolder.concat(data.results); //adds the new data from each fetch call to the temp array
        this.setState({ starwarsChars: this.dataHolder }); //sets the state of the main array to be what the temp array is holding
        if(data.next !== null) { //if statement used to stop the fetch call when there is no more pages to get data from
          this.getCharacters(data.next); //recalls the get character data method to continue to add data to the temp array until their is no more pages left
        }
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
