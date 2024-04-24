import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React from 'react';

function CreateAccountForm() {
  // You can add form handling logic here

  return (
    <Container maxWidth="sm" sx={{ marginTop: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center' }}>
        Create Account
      </Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField label="Name" variant="outlined" fullWidth />
        <TextField label="Email" variant="outlined" fullWidth />
        <TextField label="Date of Birth" variant="outlined" fullWidth />
        <TextField label="Age" variant="outlined" fullWidth />
        <TextField label="Gender" variant="outlined" fullWidth />
        <TextField label="NIC" variant="outlined" fullWidth />
        <TextField label="Address" variant="outlined" fullWidth />
        <TextField label="Telephone No." variant="outlined" fullWidth />
        <Button variant="contained" sx={{ mt: 3, mb: 2 }}>
          Create
        </Button>
      </Box>
    </Container>
  );
}

export default CreateAccountForm;
