import LabIcon from '@mui/icons-material/LocalPharmacy';
import PersonIcon from '@mui/icons-material/PersonAdd';
import { Card, CardActionArea, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

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

function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.greeting}>
        Good Morning Gina Carter!
      </Typography>
      <Typography variant="subtitle1" style={{ color: '#fff' }}>
        Please choose the account type
      </Typography>
      <Grid container spacing={2} justify="center">
        <Grid item>
          <Card className={classes.card}>
            <CardActionArea className={classes.actionArea} href="/personal">
              <PersonIcon className={classes.icon} />
              <Typography variant="h6">
                Personal
              </Typography>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.card}>
            <CardActionArea className={classes.actionArea} href="/laboratory">
              <LabIcon className={classes.icon} />
              <Typography variant="h6">
                Laboratory
              </Typography>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
