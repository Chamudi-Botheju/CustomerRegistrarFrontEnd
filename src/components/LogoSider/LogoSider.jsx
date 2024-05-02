import { Box, Typography } from '@mui/material';
import React from 'react';
import logo from '../../assets/logo.png';

function LogoSider() {
  return (
    <Box
      sx={{
        textAlign: 'left',
        backgroundColor: '#1e40af', 
        padding: 4,
        borderRadius: '0 20px 20px 0',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        width: '60%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start', 
      }}
    >
      <Box
        component="img"
        src={logo}
        alt="HealthHive logo"
        sx={{
          maxWidth: '100%', 
        }}
      />
      <Typography  color="white" sx={{letterSpacing:'4px', fontWeight:'600', fontSize:'4rem'}}> 
        HealthHive
      </Typography>
      <Typography variant="h4" color="white">
        Health Passport System
      </Typography>
    </Box>
  );
}

export default LogoSider;
