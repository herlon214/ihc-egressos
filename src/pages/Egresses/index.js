// Libs
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Map } from 'immutable'
import { roles } from '../../reducers/users'

// Components
import { Grid } from '@material-ui/core'
import Button from '../../components/Button'
import Table from '../../components/Table'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import RoleMatch from '../../components/RoleMatch'
import GenericDialog from '../../components/GenericDialog'
import EgressForm from './form'

const headers = {
  name: 'Nome',
  course: 'Curso',
  ingress_year: 'Ano de ingresso',
  egress_year: 'Ano de egresso',
  actions: 'Ação'
}

class Egresses extends Component {
  constructor (props) {
    super(props)

    this.state = {
      dialogs: { edit: false, create: false, remove: false },
      actual: Map({}),
      egresses: this.props.egresses.map(item => {
        const buttons = <RoleMatch roles={[roles.Administrator, roles.Coordinator]}>
          <Button
            title='Apagar'
            onClick={() => this.onRemove(item)}
            color='secondary' />
          <Button
            title='Editar'
            onClick={() => this.onEdit(item)}
            color='primary' />
        </RoleMatch>
        return item.set('actions', buttons)
      })
    }
  }

  onEdit (egress) {
    this.setState({ actual: egress })
    this.setState({ dialogs: { edit: true } })
  }

  onRemove (egress) {
    this.setState({ actual: egress })
    this.setState({ dialogs: { remove: true } })
  }

  onCreate () {
    this.setState({ actual: Map({}) })
    this.setState({ dialogs: { create: true } })
  }

  changeDialog (dialog, value) {
    this.setState({ dialogs: { [dialog]: value } })
  }

  render () {
    return (<Grid container>
      <Grid item xs={12}>
        <Typography variant='display3'>
          Egressos <Button title='Criar novo' color='primary' onClick={() => this.setState({ dialogs: { create: true } })} />
        </Typography>
        <TextField
          fullWidth
          placeholder='Digite um nome, curso ou datas de ingresso / egresso' />
        <Table
          headers={headers}
          data={this.state.egresses} />
      </Grid>
      <GenericDialog
        open={this.state.dialogs.create}
        title='Inserir novo egresso'
        handleClose={() => this.changeDialog('create', false)}
        buttons={<Button color='primary' title='Salvar' onClick={() => this.changeDialog('create', false)} />}>
        <EgressForm data={this.state.actual} />
      </GenericDialog>
      <GenericDialog
        open={this.state.dialogs.edit}
        title='Editar egresso'
        handleClose={() => this.changeDialog('edit', false)}
        buttons={<Button color='primary' title='Salvar' onClick={() => this.changeDialog('edit', false)} />}>
        <EgressForm data={this.state.actual} />
      </GenericDialog>
      <GenericDialog
        open={this.state.dialogs.remove}
        title='Tem certeza?'
        handleClose={() => this.changeDialog('remove', false)}
        buttons={<Button color='primary' title='Sim' onClick={() => this.changeDialog('remove', false)} />}>
        Você tem certeza que deseja remover o egresso?
      </GenericDialog>
    </Grid>)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.get('actual'),
    egresses: state.users.get('list')
      .filter(item => {
        return item.get('role') === roles.Egress
      })
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Egresses)
