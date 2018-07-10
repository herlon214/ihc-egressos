// Libs
import React from 'react'

// Components 
import { AppBar,
         Toolbar,
         withStyles, 
         Grid } from '@material-ui/core'
import UserMenu from './UserMenu'
import UserLogo from './UserLogo';

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
})

const Navbar = ({ classes, logged, user }) => (
  <div>
    <AppBar>
      <Toolbar className={ classes.root } style={{justifyContent: 'space-between'}}>
        <Grid item >
          <UserMenu user={user} />
        </Grid>
        <UserLogo logged={logged}/>
      </Toolbar>
    </AppBar>

  </div>
);

export default withStyles(styles)(Navbar)
