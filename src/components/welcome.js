import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Welcome() {
  return (
    <Box sx={{
      textAlign: 'center',
      m: '2rem' // This margin can be adjusted as needed
    }}>
      <Typography variant="h2" component="h3" color="#1e3a8a" mt={2}>
        Welcome!
      </Typography>
      <Typography variant="subtitle1" color="#1e3a8a" mb={2}>
        Please log into your account
      </Typography>
    </Box>
  );
}
