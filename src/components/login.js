import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Login() {
  const navigate = useNavigate();  // Hook to get the navigate function

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted");

    // Example: Validate login credentials (implement your validation logic here)
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simulating login validation
    if (email === 'user@example.com' && password === 'password123') {
      console.log("Login successful");
      navigate('/');  // Redirect to homepage on successful login
    } else {
      console.log("Login failed");
      // Optionally handle login failure (e.g., display an error message)
    }
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#1e40af',
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          p: 4,
          borderRadius: 1,
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          minWidth: '25%',
          textAlign: 'center',
        }}
      >
       
        <TextField
          required
          id="email"
          label="Email"
          type="email"
          autoComplete="current-email"
        />
        <TextField
          required
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button type="submit" variant="contained" sx={{ mt: 2, mb: 1, backgroundColor: '#1e40af' }}>
          Log In
        </Button>
        <Typography variant="body2" color="textSecondary" align="center">
          <a href="/forgot-password" style={{ textDecoration: 'none', color: 'inherit' }}>
            Forgot password?
          </a>
        </Typography>
      </Box>
    </Box>
  );
}
