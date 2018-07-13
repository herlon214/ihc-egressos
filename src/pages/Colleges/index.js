// Libs
import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../../reducers/colleges'
import { actions as modalActions } from '../../reducers/modal'
import swal from 'sweetalert'

// Components
import { Grid } from '@material-ui/core'
import Button from '../../components/Button'
import Table from '../../components/Table'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Modal from '../../components/Modal'
import formFields from './formFields'

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

const handleInsert = (onInsert, college) => {
  onInsert(college)
}

const handleUpdate = (onUpdate, id, college) => {
  onUpdate(id, ...college)
}

const headers = {
  name: 'Nome',
  actions: 'Ação'
}


const Colleges = ({ colleges, filter, setFilter, onInsert, onRemove, openModal, onClose, onOpen }) => {
  colleges = colleges.map(item => {
    const buttons = [
      <Button
        title='Apagar'
        color='secondary'
        onClick={() => handleDelete(onRemove, item.get('id'))} />,
      <Button
        title='Editar'
        color='primary'
        onClick={() => { onOpen();  }} />,
    ]
    return item.set('actions', buttons)
  })

  return (
    <Grid container>
      <Modal open={openModal} handleInsert={handleInsert} onInsert={onInsert} onClose={onClose} fields={formFields} />
      <Grid item xs={12}>
        <Typography variant='display3'> Faculdades </Typography>
        <Table
          headers={headers}
          data={colleges} />
      </Grid>
      <Grid item xs={2} >
        <Button title='Novo' color='primary' onClick={onOpen} />
      </Grid>
    </Grid>
  )
}

const mapStateToProps = (state, ownProps) => {
  const colleges = state.colleges.get('list')
  const openModal = state.modal.get('open')
  return {
    openModal,
    colleges
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onInsert: (payload) => dispatch({ type: actions.COLLEGES_INSERT, payload }),
    onRemove: (payload) => dispatch({ type: actions.COLLEGES_REMOVE, payload }),
    onOpen: () => dispatch({ type: modalActions.MODAL_OPEN }),
    onClose: () => dispatch({ type: modalActions.MODAL_CLOSE }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Colleges)
