import React, { Component } from 'react';
import WordsForm from './WordsForm/WordsForm';
import WordsList from './WordsList/WordsList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    words: [],
    filter: '',
  };

  addWord = word => {
    this.setState(prevState => {
      return {
        words: [...prevState.words, word],
      };
    });
  };

  removeWord = id => {
    this.setState(prevState => ({
      words: prevState.words.filter(el => el.id !== id),
    }))
  
  }
  
  handleChange = (e) => {
    this.setState({
      filter: e.target.value
    })

  }

  render() {
    return (
      <div>
        <WordsForm addWord={this.addWord} />
        <Filter value= {this.state.filter} onFilterChange = {this.handleChange} />
        <WordsList words={this.state.words } onDelete = {this.removeWord} />
      </div>
    );
  }
}
