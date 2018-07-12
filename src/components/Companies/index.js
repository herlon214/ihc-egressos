// Libs
import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../../reducers/companies'

// Components
import { Grid } from '@material-ui/core'
import NewButton from './NewButton'
import Table from '../Table'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

const headers = {
  name: 'Nome',
  national_register_number: 'CNPJ',
  email: 'E-mail',
  actions: 'Ação'
}

const Companies = ({ companies, filter, setFilter }) => (
  <Grid container>
    <Grid item xs={12}>
      <Typography variant='display3'>Empresas</Typography>
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
      <NewButton />
    </Grid>
  </Grid>
)

const mapStateToProps = (state, ownProps) => {
  const filter = state.companies.get('filter')

  return {
    filter: filter,
    companies: state.companies.get('list')
      .map(item => {
        return item.set('actions', <NewButton />)
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
    setFilter: (payload) => dispatch({ type: actions.COMPANIES_SET_FILTER, payload })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Companies)
