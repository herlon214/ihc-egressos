// Libs
import React from 'react'

// Components
import TextField from '@material-ui/core/TextField'

const Component = () => (<div>
  <TextField style={{width: '500px'}} label='Para' placeholder='Digite o nome da pessoa ou do curso' />
  <br />
  <TextField style={{width: '500px'}} label='Mensagem' multiline rows={4} />
</div>)

export default Component
