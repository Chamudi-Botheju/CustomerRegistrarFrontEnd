import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Welcome from '../welcome';

export default function LoginComponent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:33000/api/auth/login', formData);
      console.log(response.data);
      navigate('/user');
    } catch (error) {
      console.log(error);
      setError("Invalid email or password. Please try again.");
      navigate('/user');
    }
  };

  return (
    <Box sx={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Welcome />
      <Box
        sx={{
          backgroundColor: 'white',
          p: 4,
          borderRadius: 1,
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            type="email"
            autoComplete="current-email"
            value={formData.email}
            onChange={handleInputChange}
            sx={{ width: "100%", mb: 2 }}
          />
          <TextField
            required
            id="password"
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleInputChange}
            sx={{ width: "100%", mb: 2 }}
          />
          <Button type="submit" variant="contained" sx={{ width: "100%", mt: 2, mb: 1, backgroundColor: '#1e40af' }}>
            Log In
          </Button>
          <Typography variant="body2" color="blue" sx={{ width: "100%", textAlign: "right", mb: 1 }}>
            <Link to="/forgot-password">Forgot password?</Link>
          </Typography>
          {error && <Typography variant="body2" color="error" sx={{ width: "100%", textAlign: "center" }}>{error}</Typography>}
        </form>
      </Box>
    </Box>
  );
}
