import { Box, Button, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

export default function ViewProfileDetails() {
  const [profile, setProfile] = useState({
    name: '',
    designation: '',
    registrationNo: '',
    nicNo: '',
  });

  useEffect(() => {
    // Simulate fetching data from an API or another data source
    const fetchData = async () => {
      // Replace this with an actual API call
      const data = await getProfileDetailsFromAPI();
      setProfile(data);
    };

    fetchData();
  }, []);

  // Dummy function to simulate API call - replace this with real API call logic
  const getProfileDetailsFromAPI = async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          name: 'Gina Carter',
          designation: 'Customer Registrar',
          registrationNo: 'CR001G/LA',
          nicNo: '199752364521',
        });
      }, 1000);
    });
  };

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
      <Paper
        elevation={3}
        sx={{
          padding: '30px',
          borderRadius: '20px',
          backgroundColor: '#ffffff',
          maxWidth: 500,
          margin: 'auto',
        }}
      >
        <Typography variant="h5" gutterBottom component="div" sx={{ color: '#4f6bed' }}>
          Profile Details
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          <strong>Name:</strong> {profile.name}
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          <strong>Designation:</strong> {profile.designation}
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          <strong>Registration No.:</strong> {profile.registrationNo}
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          <strong>NIC No.:</strong> {profile.nicNo}
        </Typography>
        <Button variant="contained" sx={{ marginTop: 4, backgroundColor: '#4f6bed' }} href="/">
          Home
        </Button>
      </Paper>
    </Box>
  );
}
