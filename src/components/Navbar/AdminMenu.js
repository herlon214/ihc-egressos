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


const AdminMenu = ({ classes }) => {
  return (
    <Tabs onChange={console.log}>
      <Link to='/help' className={classes.link}>
        <Tab label='Ajuda' value={0} />
      </Link>
      <Link to='/deans' className={classes.link}>
        <Tab label='Faculdades' value={1}/>
        </Link>
      <Link to='/courses' className={classes.link}>
        <Tab label='Cursos' />
      </Link>
      <Link to='/coordinators' className={classes.link}>
        <Tab label='Coordenadores' />
      </Link>
      <Link to='/egresses' className={classes.link}>
        <Tab label='Egressos' />
      </Link>
      <Link to='/messages' className={classes.link}>
        <Tab label='Mensagens' />
      </Link>
      <Link to='/companies' className={classes.link}>
        <Tab label='Empresas' />
      </Link>
    </Tabs>
  )
}

export default withStyles(styles)(AdminMenu)
