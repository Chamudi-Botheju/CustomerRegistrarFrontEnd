import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom'

export default function LogOut({ onConfirm, onCancel }) {
  // You should pass onConfirm and onCancel callbacks to handle the user's choice
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#4f6bed',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px'
        }}
      >
        <Typography variant="h5" sx={{ color: '#4f6bed' }}>
          Are you sure you want to log out?
        </Typography>
        <Box>
          <Link to='/'>
          <Button variant="contained" sx={{ margin: '0 10px', backgroundColor: '#4f6bed' }} onClick={onConfirm}>
            Yes
          </Button>
          </Link>
          <Link to='/user'>
          <Button variant="outlined" sx={{ margin: '0 10px', borderColor: '#4f6bed', color: '#4f6bed' }} onClick={onCancel}>
            No
          </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
