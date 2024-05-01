import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

const LabFormComponent = () => {
  const [formValues, setFormValues] = useState({
    labName: '',
    licenseNo: '',
    contactNumber: '',
    address: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formValues.labName) newErrors.labName = 'Lab Name is required';
    if (!formValues.licenseNo) newErrors.licenseNo = 'License No. is required';
    if (!formValues.contactNumber || !/^\d{10}$/.test(formValues.contactNumber))
      newErrors.contactNumber = 'Valid Contact Number (10 digits) is required';
    if (!formValues.address) newErrors.address = 'Address is required';
    if (
      !formValues.email ||
      !/\S+@\S+\.\S+/.test(formValues.email)
    )
      newErrors.email = 'Valid Email is required';
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form Submitted', formValues);
      // Process the form data here (e.g., send to server)
    }
  };

  return (
   <Box sx={{width:'100%', height:"100vh", backgroundColor:'#757AEF',paddingTop:'3%'}}>
     <Container maxWidth="sm" sx={{ padding: 3, borderRadius: 2, backgroundColor:'white'}}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ textAlign: 'center', color: 'white' }}
      >
        Create Lab Account
      </Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, backgroundColor: 'white', borderRadius: 1 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          label="Lab Name"
          variant="outlined"
          fullWidth
          name="labName"
          value={formValues.labName}
          onChange={handleChange}
          error={!!errors.labName}
          helperText={errors.labName}
        />
        <TextField
          label="License No."
          variant="outlined"
          fullWidth
          name="licenseNo"
          value={formValues.licenseNo}
          onChange={handleChange}
          error={!!errors.licenseNo}
          helperText={errors.licenseNo}
        />
        <TextField
          label="Contact Number"
          variant="outlined"
          fullWidth
          name="contactNumber"
          value={formValues.contactNumber}
          onChange={handleChange}
          error={!!errors.contactNumber}
          helperText={errors.contactNumber}
        />
        <TextField
          label="Address"
          variant="outlined"
          fullWidth
          name="address"
          value={formValues.address}
          onChange={handleChange}
          error={!!errors.address}
          helperText={errors.address}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />
        <Button
          variant="contained"
          sx={{ maxWidth: '150px', alignSelf: 'center', backgroundColor: '#757AEF', color: 'white', mt: 3 }}
          type="submit"
        >
          Create
        </Button>
      </Box>
    </Container>
   </Box>
  );
};

export default LabFormComponent;
