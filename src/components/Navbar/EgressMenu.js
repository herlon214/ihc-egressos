import React from 'react'
import { Tabs, Tab } from '@material-ui/core';

const EgressMenu = () => {
  return (
    <Tabs value={0} onChange={console.log}>
      <Tab label='Inicio' />
      <Tab label='Cursos' />
      <Tab label='Egressos' />
      <Tab label='Depoimentos' />
      <Tab label='Forum' />
    </Tabs>
  )
}

export default EgressMenu
