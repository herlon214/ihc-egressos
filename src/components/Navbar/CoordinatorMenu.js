// Libs
import React from 'react'
import { withRouter } from 'react-router-dom'

// Components
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'


const CoordinatorMenu = ({ history }) => {
  return (
    <Tabs onChange={(e, value) => history.push(value)}>
      <Tab label='Cursos' value='/courses' />
      <Tab label='Egressos' value='/egresses' />
      <Tab label='Mensagens' value='/messages' />
      <Tab label='Empresas' value='/companies' />
      <Tab label='Depoimentos' value='/testimonials' />
    </Tabs>
  )
}

export default withRouter(CoordinatorMenu)
