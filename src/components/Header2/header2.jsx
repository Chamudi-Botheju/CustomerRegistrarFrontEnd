// Header2.js
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';

const Header2 = ({headercolor, logoSrc, iconColor}) => {

  return (
    <AppBar position="static" sx={{ backgroundColor: `${headercolor}`, color: 'white', minHeight: '56px' }}>
      <Toolbar sx={{ minHeight: '56px', justifyContent: 'right' }}>
        <img
          src = {logoSrc}  
          alt="Logo placeholder"
          style={{ maxHeight: '30px' }}
        />

      </Toolbar>
    </AppBar>
  );
};

export default Header2;
