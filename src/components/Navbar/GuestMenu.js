// Libs
import React from 'react'
import { withRouter } from 'react-router-dom'

// Components
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'



const GuestMenu = ({ history }) => {
  return (
    <Tabs onChange={(e, value) => history.push(value)}>
      <Tab label='Inicio' value='/' />
      <Tab label='Cursos' value='/courses' />
      <Tab label='Egressos' value='/egresses' />
    </Tabs>
  )
}

export default withRouter(GuestMenu)
