import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Form from '../Form';


const styles = theme => ({
})

class SimpleModal extends React.Component {


  render() {
    const { handleInsert, onInsert, fields } = this.props;

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
        />
      </Modal>
    );
  }
}


const SimpleModalWrapped = withStyles(styles)(SimpleModal)

export default SimpleModalWrapped;