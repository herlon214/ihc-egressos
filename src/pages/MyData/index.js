// Libs
import React from 'react'
import { connect } from 'react-redux'

// Components
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '../../components/Button'

const Component = ({ user }) => (
  <div>
    <Typography variant='display3'>Meus dados</Typography>
    <TextField style={{width: '500px'}} value={user.get('name')} label='Nome' placeholder='Digite seu nome aqui...' />
    <br />
    <TextField style={{width: '500px'}} value={user.get('password')} label='Senha' type='password' />
    <br />
    <TextField style={{width: '500px'}} value={user.get('national_register_number')} label='CPF'  />
    <br />
    <Button color='primary' title='Salvar' />
  </div>
)

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.get('actual')
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

const MyData = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default MyData
