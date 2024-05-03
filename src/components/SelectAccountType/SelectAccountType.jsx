import LabIcon from '@mui/icons-material/LocalPharmacy';
import PersonIcon from '@mui/icons-material/PersonAdd';
import { Box, Card, CardActionArea, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


function SelectAccountType() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Good Morning, Gina Carter!
      </Typography>
      <Typography variant="subtitle1" sx={{ pb: 4 }}>
        Please choose your account type
      </Typography>

      <Box sx={{ width: '50%' , background:'#757AEF', height:'50vh',justifyContent:'center', alignItems:'center', display:'flex', borderRadius:'20px'}}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <Link to='createaccount' style={{textDecoration:'none'}}>
            <Card sx={{height:'30vh', width:'30vh',justifyContent:'center', alignItems:'center', display:'flex', borderRadius:'20px'}}>
              <CardActionArea
                
                aria-label="Select Personal Account" sx={{height:'30vh', width:'30vh'}}
              >
                <Box sx={{ textAlign: 'center', p: 2 , color:'#757AEF'}}>
                  <PersonIcon fontSize="large" />
                  <Typography variant="h6">Personal</Typography>
                </Box>
              </CardActionArea>
            </Card>
            </Link>
          </Grid>
          <Grid item>
            <Link to='createlabaccoount'style={{textDecoration:'none'}}>
            <Card sx ={{height:'30vh', width:'30vh',justifyContent:'center', alignItems:'center', display:'flex', borderRadius:'20px'}}>
              <CardActionArea
                
                aria-label="Select Laboratory Account" sx={{height:'30vh', width:'30vh'}}
              >
                <Box sx={{ textAlign: 'center', p: 2 ,color:'#757AEF'}}>
                  <LabIcon fontSize="large" />
                  <Typography variant="h6">Laboratory</Typography>
                </Box>
              </CardActionArea>
            </Card>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default SelectAccountType;
