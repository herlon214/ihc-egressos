// Libs
import React from 'react'

// Components
import { AppBar, Toolbar, withStyles } from '@material-ui/core'
import UserMenu from './UserMenu'
import UserLogo from './UserLogo'

const styles = theme => ({
  root: {
    flexGrow: 1
  }
})

const Navbar = ({ classes, user }) => (
  <div>
    <AppBar>
      <Toolbar className={classes.root} style={{justifyContent: 'space-between'}}>
        <UserMenu user={user} />
        <UserLogo user={user} />
      </Toolbar>
    </AppBar>

  </div>
)

export default withStyles(styles)(Navbar)
