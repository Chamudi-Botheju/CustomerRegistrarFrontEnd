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

const Header2 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleRedirect = (path) => {
    handleMenuClose();
    // Implement your navigation logic here
    console.log(`Redirecting to ${path}`);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#4f6bed', color: 'white', minHeight: '56px' }}>
      <Toolbar sx={{ minHeight: '56px', justifyContent: 'space-between' }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuClick}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo in the right corner */}
        <img
          src="https://placehold.co/100x30.png" // Replace with your actual logo
          alt="Logo placeholder"
          style={{ maxHeight: '30px' }}
        />

        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={isMenuOpen}
          onClose={handleMenuClose}
          sx={{
            '& .MuiPaper-root': {
              backgroundColor: '#4f6bed',
              color: 'white',
            },
            '& .MuiMenuItem-root': {
              '&:hover': {
                backgroundColor: '#6a5acd',
              },
            },
          }}
        >
          {/* User information displayed above menu items */}
          <Box sx={{ padding: '8px 16px', backgroundColor: '#6a5acd' }}>
            <Typography variant="subtitle1" noWrap>
              Gina Carter - CR001G/LA
            </Typography>
          </Box>

          {/* Menu items */}
          <MenuItem onClick={() => handleRedirect('/profile-details')}>Profile details</MenuItem>
          <MenuItem onClick={() => handleRedirect('/help-center')}>Help Center</MenuItem>
          <MenuItem onClick={() => handleRedirect('/settings')}>Settings</MenuItem>
          <MenuItem onClick={() => handleRedirect('/logout')}>Log out</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header2;
