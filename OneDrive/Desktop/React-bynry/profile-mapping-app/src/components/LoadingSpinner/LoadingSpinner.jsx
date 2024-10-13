// components/LoadingSpinner/LoadingSpinner.js
import React from 'react';
import { CircularProgress, Backdrop } from '@mui/material';

const LoadingSpinner = ({ open }) => {
  return (
    <Backdrop open={open} style={{ zIndex: 9999 }}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default LoadingSpinner;
