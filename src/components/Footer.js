// Lib
import React from 'react'

// Components
import { Grid, Paper, withStyles, Typography } from '@material-ui/core'
import indigo from '@material-ui/core/colors/indigo';

const styles = theme => ({
  footer: {
    background: indigo[500],
    color: '#FFF'
  },
  grid: {
    padding: theme.spacing.unit * 2
  }
});


const Footer = ({ classes }) => (
  <div>
    <footer>
      <Grid container style={{height: '250px'}} className={classes.footer} >
        <Grid item className={classes.grid} xs={6}>
          <Typography style={{color: '#FFF', fontWeight: 'bold'}}> coluna 1 </Typography>
        </Grid>
        <Grid item className={classes.grid} xs={3}>
          <Typography style={{color: '#FFF', fontWeight: 'bold'}}> coluna 2 </Typography>
        </Grid>
        <Grid item className={classes.grid} xs={3}>
          <Typography style={{color: '#FFF', fontWeight: 'bold'}}> coluna 3 </Typography>
        </Grid>
      </Grid> 
    </footer>

  </div>
);

export default withStyles(styles)(Footer);
