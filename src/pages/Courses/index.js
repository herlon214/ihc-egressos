// Libs
import React from 'react'
import { connect } from 'react-redux'
import { actions as coursesActions } from '../../reducers/courses'
import { actions as modalActions } from '../../reducers/modal'
import swal from 'sweetalert'

// Components
import { Grid } from '@material-ui/core'
import Button from '../../components/Button'
import Table from '../../components/Table'
import Typography from '@material-ui/core/Typography'
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

const publicHeaders = {
  name: 'Nome',
  college: 'Faculdade',
  coordinator: 'Coordenador',
}

const protectedHeaders = {
  name: 'Nome',
  college: 'Faculdade',
  coordinator: 'Coordenador',
  actions: 'Ação'
}

const Courses = ({ courses, filter, setFilter, onInsert, onRemove, openModal, onClose, onOpen, user }) => {
  const headers = user && (user.get('role') === 'Administrator') ? protectedHeaders : publicHeaders
  courses = courses.map(item => {
    const buttons = [
      <Button
        title='Apagar'
        color='secondary'
        onClick={() => handleDelete(onRemove, item.get('id'))} />,
      <Button
        title='Editar'
        color='primary'
        onClick={() => { onOpen(); }} />,
    ]
    return item.set('actions', buttons)
  })

  return (
    <Grid container>
      <Modal category='Cursos' open={openModal} handleInsert={handleInsert} onInsert={onInsert} onClose={onClose} fields={formFields} />
      <Grid item xs={12}>
        <Typography variant='display3'> Cursos </Typography>
        <Table
          headers={headers}
          data={courses} />
      </Grid>
      { user && user.get('role') === 'Administrator' ?
        <Grid item xs={2} >
          <Button title='Novo' color='primary' onClick={onOpen} />
        </Grid>
        :
        ''
      }
    </Grid>
  )
}

const mapStateToProps = (state, ownProps) => {
  const courses = state.courses.get('list')
  const colleges = state.colleges.get('list')
  const openModal = state.modal.get('open')
  const user = state.users.get('actual')
  return {
    openModal,
    colleges,
    courses,
    user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onInsert: (payload) => dispatch({ type: coursesActions.COURSES_INSERT, payload }),
    onRemove: (payload) => dispatch({ type: coursesActions.COURSES_REMOVE, payload }),
    onOpen: () => dispatch({ type: modalActions.MODAL_OPEN }),
    onClose: () => dispatch({ type: modalActions.MODAL_CLOSE }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Courses)
