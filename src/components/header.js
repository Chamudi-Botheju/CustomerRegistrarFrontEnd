import { Box, Typography } from '@mui/material';
import React from 'react';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <Box sx={{
      textAlign: 'center',
      backgroundColor: 'white', // Adjust the color as needed
      p: 4,
      borderRadius: 1,
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      minWidth: '25%',
    }}>
      <Box
        component="img"
        src={logo}
        alt="HealthHive logo"
        sx={{
          backgroundColor: '#facc15', // Approximation of Tailwind's yellow-400
          p: 1,
          borderRadius: '50%',
          display: 'block',
          mx: 'auto', // Centers the image horizontally
          my: 2, // Margin top and bottom
        }}
      />
      <Typography variant="h4" component="h1" color="#1e3a8a">
        HealthHive
      </Typography>
      <Typography variant="subtitle1" color="#1e3a8a">
        Health Passport System
      </Typography>
    </Box>
  );
}
