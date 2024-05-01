import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const SideNavigation = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const drawerWidth = open ? 250 : 60;

  const drawerContent = (
    <Box
      sx={{
        width: drawerWidth,
        transition: 'width 0.3s ease-in-out',
        height: '100%',
        padding: '20px',
        backgroundColor: theme.palette.background.default,
      }}
    >
      {open && (
        <Box sx={{ textAlign: 'right' }}>
          <IconButton onClick={toggleDrawer}>
            <CloseIcon sx={{ color: theme.palette.primary.main }} />
          </IconButton>
        </Box>
      )}

      {open ? (
        <>
          <Box sx={{ textAlign: 'center', marginBottom: '20px'}}>
            <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
              Gina Carter
            </Typography>
          </Box>

          <List>
            <Link to="profile" onClick={toggleDrawer} style={{ textDecoration: 'none' }}>
              <ListItem button sx={{ '&:hover': { backgroundColor: theme.palette.action.hover } }}>
                <ListItemIcon>
                  <AccountCircleIcon sx={{ color: '#757AEF' }} />
                </ListItemIcon>
                <ListItemText primary="Profile" sx={{ color: '#757AEF' }} />
              </ListItem>
            </Link>
            <Link to="helpcenter" onClick={toggleDrawer} style={{ textDecoration: 'none' }}>
              <ListItem button sx={{ '&:hover': { backgroundColor: theme.palette.action.hover } }}>
                <ListItemIcon>
                  <HelpOutlineIcon sx={{ color: '#757AEF' }} />
                </ListItemIcon>
                <ListItemText primary="Help Center" sx={{ color: '#757AEF' }} />
              </ListItem>
            </Link>
            <Link to="settings" onClick={toggleDrawer} style={{ textDecoration: 'none' }}>
              <ListItem button sx={{ '&:hover': { backgroundColor: theme.palette.action.hover } }}>
                <ListItemIcon>
                  <SettingsIcon sx={{ color: '#757AEF' }} />
                </ListItemIcon>
                <ListItemText primary="Settings" sx={{ color: '#757AEF'}} />
              </ListItem>
            </Link>
            <Link to="logout" onClick={toggleDrawer} style={{ textDecoration: 'none' }}>
              <ListItem button sx={{ '&:hover': { backgroundColor: theme.palette.action.hover } }}>
                <ListItemIcon>
                  <LogoutIcon sx={{ color: '#757AEF' }} />
                </ListItemIcon>
                <ListItemText primary="Log Out" sx={{ color: '#757AEF' }} />
              </ListItem>
            </Link>
          </List>
        </>
      ) : (
        <List >
          <ListItem button onClick={toggleDrawer} sx={{ '&:hover': { backgroundColor: theme.palette.action.hover } }}>
            <ListItemIcon>
              <AccountCircleIcon sx={{ color: theme.palette.primary.main }} />
            </ListItemIcon>
          </ListItem>
          <ListItem button onClick={toggleDrawer} sx={{ '&:hover': { backgroundColor: theme.palette.action.hover } }}>
            <ListItemIcon>
              <HelpOutlineIcon sx={{ color: theme.palette.primary.main }} />
            </ListItemIcon>
          </ListItem>
          <ListItem button onClick={toggleDrawer} sx={{ '&:hover': { backgroundColor: theme.palette.action.hover } }}>
            <SettingsIcon sx={{ color: theme.palette.primary.main }} />
          </ListItem>
          <ListItem button onClick={toggleDrawer} sx={{ '&:hover': { backgroundColor: theme.palette.action.hover } }}>
            <LogoutIcon sx={{ color: theme.palette.primary.main }} />
          </ListItem>
        </List>
      )}
    </Box>
  );

  return (
    <>
      <IconButton
        onClick={toggleDrawer}
        sx={{ position: 'fixed', top: 10, left: 20, color: 'white' }}
        aria-label="menu"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </IconButton>

      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        sx={{ transition: 'all 0.3s ease-in-out' }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default SideNavigation;
