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
    }));
  };

  handleChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  filterWords = () => {
    const { words, filter } = this.state;
    return words.filter(word => {
      return (
        word.uaWord.toLowerCase().includes(filter.toLowerCase().trim()) ||
        word.deWord.toLowerCase().includes(filter.toLowerCase().trim())
      );
    });
  };

  render() {
    const filteredWords = this.filterWords();

    return (
      <div>
        <WordsForm addWord={this.addWord} />
        <Filter value={this.state.filter} onFilterChange={this.handleChange} />
        <WordsList words={filteredWords} onDelete={this.removeWord} />
      </div>
    );
  }
}
