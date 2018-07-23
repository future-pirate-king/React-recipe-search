import React, { Component } from 'react';
import './App.css';
import Form from './components/form';
import Recipe from './components/recipe';

import { API_KEY } from './components/api';

class App extends Component {

  state = {
    recipes: [],
  };

  componentDidMount = async () => {
    this.apiCall('');
  }

  handleSearch = (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    this.setState({ recipes: [] });
    this.apiCall(recipeName);
  }

  apiCall = async (recipeName) => {
    const res = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=12`);

    const data = await res.json();
    this.setState({ recipes: data.recipes });
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form onSearch={this.handleSearch} />
        <Recipe recipes={this.state.recipes} />
      </div>
    );
  }

}

export default App;
