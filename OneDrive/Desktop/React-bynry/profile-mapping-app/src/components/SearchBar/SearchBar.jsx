// components/SearchBar/SearchBar.js
import React from 'react';
import { TextField, Grid } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <Grid container spacing={2} style={{ marginBottom: '20px' }}>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Search by Name"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
      </Grid>
      {/* Add more filters as needed */}
    </Grid>
  );
};

export default SearchBar;
