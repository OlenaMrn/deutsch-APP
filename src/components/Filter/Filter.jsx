import React from 'react';
import TextField from '@mui/material/TextField';



export default function Filter({value, onFilterChange}) {
  return (
    <div>
       <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        value={value}
        onChange={onFilterChange}
      />
    </div>
  );
}




