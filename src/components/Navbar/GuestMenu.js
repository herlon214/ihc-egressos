// Libs
import React from 'react'

// Components
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  link: {
    color: 'white',
    textDecoration: 'none'
  }
})

const GuestMenu = ({ classes }) => {
  return (
    <Tabs onChange={console.log}>
      <Link to='/' className={classes.link}>
        <Tab label='Inicio' />
      </Link>
      <Tab label='Cursos' />
      <Tab label='Egressos' />
    </Tabs>
  )
}

export default withStyles(styles)(GuestMenu)
