// Libs
import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../../reducers/companies'
import swal from 'sweetalert'

// Components
import { Grid } from '@material-ui/core'
import Button from '../Button'
import Table from '../Table'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Modal from '../Modal'

const handleDelete = (onRemove, id) => {
  swal({
    title: "Você tem certeza?",
    text: "Esta operação é irreversível",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      onRemove(id)
      swal("Registro Excluído!", {
        icon: "success",
      });
    }
  });
}

const handleInsert = ( onInsert, company) => {
  onInsert(company)
}

const handleUpdate = (onUpdate, id, company) => {
  onUpdate(id, ...company)
}

const headers = {
  name: 'Nome',
  national_register_number: 'CNPJ',
  email: 'E-mail',
  actions: 'Ação'
}



const Companies = ({ companies, filter, setFilter, onInsert, onRemove, onUpdate }) => {
  companies = companies.map(item => {
    const buttons = [
      <Button
        icon='clear'
        color='secondary'
        handler={() => handleDelete(onRemove, item.get('id'))} />,
      <Button
        icon='create'
        color='primary'
        handler={() => {}} />,
    ]
    return item.set('actions', buttons)
  })

  return (
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
        <Modal handleInsert={handleInsert} onInsert={onInsert}/>
      </Grid>
    </Grid>
  )
}

const mapStateToProps = (state, ownProps) => {
  const filter = state.companies.get('filter')

  return {
    filter: filter,
    companies: state.companies.get('list')
      .filter(item => {
        return item.get('name').toLowerCase().indexOf(filter) >= 0 ||
          item.get('national_register_number').toLowerCase().indexOf(filter) >= 0 ||
          item.get('email').toLowerCase().indexOf(filter) >= 0
      })
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onInsert: (payload) => dispatch({ type: actions.COMPANIES_INSERT, payload }),
    onRemove: (payload) => dispatch({ type: actions.COMPANIES_REMOVE, payload }),
    onUpdate: (payload) => dispatch({ type: actions.COMPANIES_UPDATE, payload }),
    setFilter: (payload) => dispatch({ type: actions.COMPANIES_SET_FILTER, payload })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Companies)
