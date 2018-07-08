// Libs
import React from 'react'

// Components 
import { AppBar,
        Toolbar,
        withStyles,
        Typography, 
        Grid } from '@material-ui/core'
import UserLogo from './UserLogo';

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
})

const Navbar = ({ classes, logged }) => (
  <div>
    <AppBar>
      <Toolbar className={ classes.root } style={{justifyContent: 'space-between'}}>
        <Grid item >
        </Grid>
        <UserLogo logged={logged}/>
      </Toolbar>
    </AppBar>

  </div>
);

export default withStyles(styles)(Navbar)
