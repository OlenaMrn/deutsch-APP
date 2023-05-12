import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

export default function WordsList({ words, onDelete }) {
  return (
    <ul>
      {words.map((word, index) => (
        <li key={word.id}>
          <Checkbox
            //   checked={checked}
            //   onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <span>{index + 1}</span> {' '}
          <span> {word.uaWord} </span> {' '} <span> {word.deWord} </span>
          <Button type="submit" variant="outlined" onClick = {() => onDelete(word.id)}>
            Видалити
          </Button>
          <Button type="submit" variant="outlined">
            Редагувати
          </Button>
        </li>
      ))}
    </ul>
  );
}
