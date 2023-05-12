import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default class WordsForm extends Component {
  state = {
    uaWord: '',
    deWord: '',
  };

  handleFilterChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const word = {
      id: nanoid(5),
      isChecked: false,
      ...this.state,
    };
    this.props.addWord(word);

    this.setState({
      uaWord: '',
      deWord: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Ukrainisch"
          variant="outlined"
          value={this.state.uaWord}
          name="uaWord"
          onChange={this.handleFilterChange}
        />
        <TextField
          id="outlined-basic"
          label="Deutsch"
          variant="outlined"
          value={this.state.deWord}
          name="deWord"
          onChange={this.handleFilterChange}
        />
        <Button type="submit" variant="outlined">
          Додати слово
        </Button>
      </form>
    );
  }
}
