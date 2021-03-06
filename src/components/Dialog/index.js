import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AlertDialogSlide extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      resource: '',
      action: () => {}
    };
  }
  componentDidMount() {
    this.props.onRef(this)
  }

  componentWillUnmount() {
    this.props.onRef(undefined)
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };


  render() {
    return (
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClick}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Deseja excluir ?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Esta operação irá apagar seu registro
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleClick()} color="primary">
              Cancelar
            </Button>
            <Button onClick={() => this.handleDelete()} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
    );
  }
}

export default AlertDialogSlide;