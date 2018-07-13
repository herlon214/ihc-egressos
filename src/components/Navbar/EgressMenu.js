// Libs
import React from 'react'
import { withRouter } from 'react-router-dom'

// Components
import { Tabs, Tab } from '@material-ui/core'

const EgressMenu = ({ history }) => {
  return (
    <Tabs onChange={(e, value) => history.push(value)}>
      <Tab label='Ajuda' value='/help' />
      <Tab label='Cursos' value='/courses' />
      <Tab label='Egressos' value='/egresses' />
      <Tab label='Depoimentos' value='/testimonials' />
      <Tab label='Messages' value='/messages' />
      <Tab label='Forum' value='/forums' />
      <Tab label='Empregos' value='/jobs' />
    </Tabs>
  )
}

export default withRouter(EgressMenu)
