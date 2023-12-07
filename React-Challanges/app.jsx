import React, { Component } from 'react';
import './App.css';

const languages = ["English", "Spanish", "French", "German"];
const countries = ["USA", "Germany", "France", "Canada", "India", "Poland", "Japan", "Spain", "Australia"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: '',
      selectedCountry: ''
    };
  }

  handleLanguageChange = (event) => {
    this.setState({ selectedLanguage: event.target.value });
  }

  handleCountryChange = (event) => {
    this.setState({ selectedCountry: event.target.value });
  }

  render() {
    const { selectedLanguage, selectedCountry } = this.state;

    return (
      <div className='container'>
        <header>
          <img src="image.png" alt="hacker-rank logo"></img>
          <h1>Employee Information</h1>
        </header>
        <div className='center'>
          <select onChange={this.handleLanguageChange} value={selectedLanguage} placeholder="Select Language">
            <option value="" disabled>Select Language</option>
            {languages.map((item) => {
              return <option key={item} value={item}>{item}</option>
            })}
          </select>
          <select onChange={this.handleCountryChange} value={selectedCountry} placeholder="Select Country">
            <option value="" disabled>Select Country</option>
            {countries.map((item) => {
              return <option key={item} value={item}>{item}</option>
            })}
          </select>
        </div>

        <div className='hding'>
          <h3>Final Selections : </h3>
          <h2>Country Selected : {selectedCountry}</h2>
          <h2>Language Selected : {selectedLanguage}</h2>
        </div>
      </div>
    );
  }
}

export default App;
