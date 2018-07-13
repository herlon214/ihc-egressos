import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Form from '../Form';
import { Grid } from '@material-ui/core';


const styles = theme => ({
  form: {
    padding: theme.spacing.unit * 2
  }
})

class SimpleModal extends React.Component {
  render() {
    const { classes, handleInsert, onInsert, fields, category } = this.props;
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.open}
        onClose={this.props.onClose}
      >
        <Form
          fields={fields}
          close={this.props.onClose}
          handleInsert={handleInsert}
          onInsert={onInsert}
          category={category}
        />
      </Modal>
    );
  }
}


const SimpleModalWrapped = withStyles(styles)(SimpleModal)

export default SimpleModalWrapped;