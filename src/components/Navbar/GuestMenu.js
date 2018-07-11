// Libs
import React from 'react'

// Components
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const GuestMenu = ({ classes }) => {
  return (
    <Tabs value={0} onChange={console.log}>
      <Tab label='Cursos' />
      <Tab label='Egressos' />
    </Tabs>
  )
}

export default GuestMenu
