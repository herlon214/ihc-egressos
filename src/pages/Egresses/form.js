// Libs
import React from 'react'

// Components
import TextField from '@material-ui/core/TextField'

const Component = ({ data }) => (<div>
  <TextField style={{width: '500px'}} label='Nome' value={data.get('name')} />
  <br />
  <TextField style={{width: '500px'}} label='Curso' value={data.get('course')} />
  <br />
  <TextField style={{width: '500px'}} label='Ano de ingresso' value={data.get('ingress_year')} />
  <br />
  <TextField style={{width: '500px'}} label='Ano de egresso' value={data.get('egress_year')} />
</div>)

export default Component
