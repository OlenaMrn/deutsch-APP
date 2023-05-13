import React, { Component } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default class WordListItem extends Component {
  state = {
    isEdit: false,
    uaWord: this.props.word.uaWord,
    deWord: this.props.word.deWord,
  };

  handleEdit = () => {
    if (this.state.isEdit) {
      const updatedWord = {
        ...this.props.word,
        uaWord: this.state.uaWord,
        deWord: this.state.deWord,
      };
      this.props.onEdit(updatedWord);
    }

    this.setState(prevState => ({
      isEdit: !prevState.isEdit,
    }));
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { word, index, onDelete } = this.props;
    const { isEdit } = this.state;

    return (
      <li key={word.id}>
        <Checkbox inputProps={{ 'aria-label': 'controlled' }} />
        <span>{index + 1}</span>
        {isEdit ? (
          <TextField
            id="outlined-basic-ua"
            label="Ukrainisch"
            variant="outlined"
            value={this.state.uaWord}
            name="uaWord"
            onChange={this.onChange}
          />
        ) : (
          <span>{word.uaWord}</span>
        )}
        {isEdit ? (
          <TextField
            id="outlined-basic-de"
            label="Deutsch"
            variant="outlined"
            value={this.state.deWord}
            name="deWord"
            onChange={this.onChange}
          />
        ) : (
          <span>{word.deWord}</span>
        )}
        <Button
          type="button"
          variant="outlined"
          onClick={() => onDelete(word.id)}
        >
          Видалити
        </Button>
        <Button type="button" variant="outlined" onClick={this.handleEdit}>
          {isEdit ? 'Зберегти' : 'Редагувати'}
        </Button>
      </li>
    );
  }
}
