// Libs
import React from 'react'
import { withRouter } from 'react-router-dom'

// Components
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'



const AdminMenu = ({ history }) => {
  return (
    <Tabs onChange={(e, value) => history.push(value)}>
      <Tab label='Faculdades' value='/colleges' />
      <Tab label='Cursos' value='/course' />
      <Tab label='Egressos' value='/egresses' />
      <Tab label='Mensagens' value='/messages' />
      <Tab label='Empresas' value='/comapnies' />
    </Tabs>
  )
}

export default withRouter(AdminMenu)
