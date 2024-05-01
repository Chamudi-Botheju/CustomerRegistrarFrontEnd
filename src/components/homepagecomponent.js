import LabIcon from '@mui/icons-material/LocalPharmacy';
import PersonIcon from '@mui/icons-material/PersonAdd';
import { Box, Card, CardActionArea, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Header2 from './Header2/header2';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    backgroundColor: '#4f6bed',
    padding: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    color: '#fff',
    margin: '10px 0',
  },
  card: {
    maxWidth: 345,
    margin: '20px',
  },
  actionArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  icon: {
    fontSize: '40px',
    color: '#4f6bed',
  },
});

function HomePageComponent() {
  const classes = useStyles();

  return (
   
      <Box sx={{backgroundColor:"#FFFF", width:"100%", height:"90vh",  display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <Typography variant="h2" className={classes.greeting} style={{color:"blue"}}>
        Good Morning Gina Carter!
      </Typography>
      <Typography variant="subtitle1" style={{ color: 'blue' , paddingBottom:"5%"}}>
        Please choose the account type
        
      </Typography>
      <Box sx={{backgroundColor:"blue", borderRadius:"25px", width:"50%", height:"50%" , display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
      
        <Grid item style={{width:"40%", height:"70%"}}>
          <Card className={classes.card} style={{width:"90%", height:"90%", borderRadius:"25px"}}>
            <CardActionArea className={classes.actionArea} href="/personal" style={{width:"100%", height:"90%"}}>
              <PersonIcon className={classes.icon} style={{fontSize:"100px"}} />
              <Typography variant="h6">
                Personal
              </Typography>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item style={{width:"40%", height:"70%"}}>
          <Card className={classes.card} style={{width:"100%", height:"90%",borderRadius:"25px"}}>
            <CardActionArea className={classes.actionArea} href="/laboratory" style={{width:"90%", height:"90%"}}>
              <LabIcon className={classes.icon} style={{fontSize:"100px"}}/>
              <Typography variant="h6">
                Laboratory
              </Typography>
            </CardActionArea>
          </Card>
        </Grid>

      </Box>

      </Box>
     
  
  );
}

export default HomePageComponent;
