import React, { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid,
} from '@mui/material';

function PersonalFormComponent() {
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    telephoneNumber: '',
    gender: 'MALE',
    age: '',
    dateOfBirth: '',
    birthCertificateNumber: '',
    nic: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const formErrors = {};
    if (!formValues.fullName) formErrors.fullName = 'Full Name is required';
    if (!formValues.email || !/\S+@\S+\.\S+/.test(formValues.email)) {
      formErrors.email = 'Valid Email is required';
    }
    if (!formValues.dateOfBirth) formErrors.dateOfBirth = 'Date of Birth is required';
    if (
      !formValues.telephoneNumber ||
      !/^\d{10}$/.test(formValues.telephoneNumber)
    ) {
      formErrors.telephoneNumber = 'Valid Phone Number is required';
    }
    if (!formValues.age || isNaN(formValues.age) || formValues.age <= 0) {
      formErrors.age = 'Valid Age is required';
    }
    if (!formValues.emergencyContactName) {
      formErrors.emergencyContactName = 'Emergency Contact Name is required';
    }
    if (
      !formValues.emergencyContactNumber ||
      !/^\d{10}$/.test(formValues.emergencyContactNumber)
    ) {
      formErrors.emergencyContactNumber = 'Valid Emergency Contact Number is required';
    }
    if (!formValues.birthCertificateNumber) {
      formErrors.birthCertificateNumber = 'Birth Certificate Number is required';
    }
    if (!formValues.nic) formErrors.nic = 'National ID is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted', formValues);
      try{
        const response = axios.post('http://localhost:8080/api/user',formValues)
        if(response.data.status === 200){
          navigate('/user')
        }
      }catch(error){
        console.log(error);
      }
    }
  };

  return (
    <Container maxWidth="md" sx={{ paddingTop: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ textAlign: 'center', color: 'white' }}
      >
        Create Account
      </Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 2,
          borderRadius: 2,
          backgroundColor: 'white',
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              name="fullName"
              value={formValues.fullName}
              onChange={handleChange}
              error={!!errors.fullName}
              helperText={errors.fullName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Telephone Number"
              variant="outlined"
              fullWidth
              name="telephoneNumber"
              type="tel"
              value={formValues.telephoneNumber}
              onChange={handleChange}
              error={!!errors.telephoneNumber}
              helperText={errors.telephoneNumber}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Date of Birth"
              variant="outlined"
              fullWidth
              name="dateOfBirth"
              type="date"
              value={formValues.dateOfBirth}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              error={!!errors.dateOfBirth}
              helperText={errors.dateOfBirth}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Age"
              variant="outlined"
              fullWidth
              name="age"
              type="number"
              value={formValues.age}
              onChange={handleChange}
              error={!!errors.age}
              helperText={errors.age}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Birth Certificate Number"
              variant="outlined"
              fullWidth
              name="birthCertificateNumber"
              value={formValues.birthCertificateNumber}
              onChange={handleChange}
              error={!!errors.birthCertificateNumber}
              helperText={errors.birthCertificateNumber}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="National ID"
              variant="outlined"
              fullWidth
              name="nic"
              value={formValues.nic}
              onChange={handleChange}
              error={!!errors.nic}
              helperText={errors.nic}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Emergency Contact Name"
              variant="outlined"
              fullWidth
              name="emergencyContactName"
              value={formValues.emergencyContactName}
              onChange={handleChange}
              error={!!errors.emergencyContactName}
              helperText={errors.emergencyContactName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Emergency Contact Number"
              variant="outlined"
              fullWidth
              name="emergencyContactNumber"
              type="tel"
              value={formValues.emergencyContactNumber}
              onChange={handleChange}
              error={!!errors.emergencyContactNumber}
              helperText={errors.emergencyContactNumber}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              fullWidth
              sx={{ mt: 1 }} // Add margin-top to align with other fields
            >
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                name="gender"
                value={formValues.gender}
                onChange={handleChange}
              >
                <MenuItem value="MALE">Male</MenuItem>
                <MenuItem value="FEMALE">Female</MenuItem>
                <MenuItem value="NON-BINARY">Non-binary</MenuItem>
                <MenuItem value="PREFER_NOT_TO_SAY">Prefer not to say</MenuItem>
              </Select>
              {errors.gender && (
                <Typography color="error">{errors.gender}</Typography>
              )}
            </FormControl>
          </Grid>
        </Grid>

        <Button variant="contained" sx={{ mt: 3, mb: 2 }} type="submit">
          Create Account
        </Button>
      </Box>
    </Container>
  );
}

export default PersonalFormComponent;
