// Libs
import React from 'react'

// Components
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const CoordinatorMenu = ({ classes }) => {
  return (
    <Tabs value={0} onChange={console.log}>
      <Tab label='Ajuda' />
      <Tab label='Faculdades' />
      <Tab label='Cursos' />
      <Tab label='Coordenadores' />
      <Tab label='Egressos' />
      <Tab label='Mensagens' />
      <Tab label='Empresas' />
    </Tabs>
  )
}

export default CoordinatorMenu
