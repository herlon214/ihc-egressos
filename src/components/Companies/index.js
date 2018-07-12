// Libs
import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../../reducers/companies'
import swal from 'sweetalert'

// Components
import { Grid } from '@material-ui/core'
import NewButton from '../Button'
import Table from '../Table'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'


const handleDelete = (id) => {
  swal({
    title: 'Apagar Registro',
    text: 'Você tem certeza?',
    icon: 'warning',
    buttons: true,
    dangerMode: true
  })
  .then((willDelete) =>{
    willDelete ? 
    swal('Registro apagado com sucesso', {icon: 'success'}) :
    swal('Operação Cancelada')
  })
}

const headers = {
  name: 'Nome',
  national_register_number: 'CNPJ',
  email: 'E-mail',
  actions: 'Ação'
}

const actionButtons = [
  {
    icon: 'clear',
    color: 'secondary',
    handler: handleDelete
  },
  {
    icon: 'create',
    color: 'primary',
  }
]

const Companies = ({ companies, filter, setFilter }) => (
  
  <Grid container>
    <Grid item xs={12}>
      <Typography variant='display3'> Empresas </Typography>
      <TextField
        fullWidth
        placeholder='Digite um cnpj, nome ou e-mail'
        onChange={(e) => setFilter(e.target.value)}
        value={filter} />
      <Table
        headers={headers}
        data={companies} />
    </Grid>
    <Grid item xs={2} >
      <NewButton icon='add' color='primary'/>
    </Grid>
  </Grid>
)

const mapStateToProps = (state, ownProps) => {
  const filter = state.companies.get('filter')

  return {
    filter: filter,
    companies: state.companies.get('list')
      .map(item => {
        return item.set('actions', actionButtons.map( btn =>
          <NewButton
          key={item.get('id')} 
          icon={btn.icon} 
          color={btn.color}
          handler={btn.handler}
          owner={item.get('id')}  /> ))
      })
      .filter(item => {
        return item.get('name').toLowerCase().indexOf(filter) >= 0 ||
          item.get('national_register_number').toLowerCase().indexOf(filter) >= 0 ||
          item.get('email').toLowerCase().indexOf(filter) >= 0
      })
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    create: (payload) =>  dispatch({ type: actions.COMPANIES_CREATE, payload }),
    remove: (payload) =>  dispatch({ type: actions.COMPANIES_REMOVE, payload }),
    update: (payload) =>  dispatch({ type: actions.COMPANIES_UPDATE, payload }),
    setFilter: (payload) => dispatch({ type: actions.COMPANIES_SET_FILTER, payload })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Companies)
