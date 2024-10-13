// components/ErrorSnackbar/ErrorSnackbar.js
import React from 'react';
import { Snackbar, Alert } from '@mui/material';

const ErrorSnackbar = ({ open, message, onClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={onClose} severity="error" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ErrorSnackbar;
