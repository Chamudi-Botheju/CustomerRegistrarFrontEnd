import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import Welcome from '../welcome';


export default function LoginComponent() {
  const navigate = useNavigate();  

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted");

   
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
    <Box sx={{width:"50%", height:"100vh",display:"flex", flexDirection:"column", justifyContent:"center" , alignItems:"center" }}>
      <Welcome/>

    <Box
        sx={{
          backgroundColor: 'white',
          p: 4,
          borderRadius: 1,
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          minWidth: '50%',
          textAlign: 'center',
          width:"100%", display:"flex", flexDirection:"column"
        }}
      >
       
   
   <TextField
          required
          id="email"
          label="Email"
          type="email"
          autoComplete="current-email"
          sx={{paddingBottom:"5%"}}
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

        <Typography variant="body2" color="blue" align="right">
         
            Forgot password?
          
        </Typography>
      
    </Box>
     
  
    </Box>
  );
}
