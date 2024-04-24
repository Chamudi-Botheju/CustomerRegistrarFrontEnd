import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React from 'react';

function CreateLabAccountForm() {
  // Form handling logic would go here

  return (
    <Container maxWidth="sm" sx={{ marginTop: 8, backgroundColor: '#6a5acd', padding: 3, borderRadius: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'white', textAlign: 'center' }}>
        Create Account
      </Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, backgroundColor: 'white', borderRadius: 1 },
          '& .MuiButton-root': { mt: 2, mb: 2, backgroundColor: 'white' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField label="Lab Name" variant="outlined" fullWidth />
        <TextField label="License No." variant="outlined" fullWidth />
        <TextField label="Contact Number" variant="outlined" fullWidth />
        <TextField label="Address" variant="outlined" fullWidth />
        <TextField label="Email" variant="outlined" fullWidth />
        <Button variant="contained" sx={{ maxWidth: '150px', alignSelf: 'center' }}>
          Create
        </Button>
      </Box>
    </Container>
  );
}

export default CreateLabAccountForm;
