// Libs
import React, { Component } from 'react'

// Components
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { Link } from 'react-router-dom'
import { withStyles, Menu, MenuItem, Typography } from '@material-ui/core'
import { connect } from 'react-redux';
import { actions } from '../../reducers/users'

const styles = theme => ({
  link: {
    color: 'white',
    textDecoration: 'none'
  },
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  }
})

class UserLogoComponent extends Component {
  state = {
    anchorEl: null
  }

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () => {
    this.props.onLogout();
    this.handleClose()
  }

  getFirstName = (name) => {
    return name.split(' ')[0]
  }

  render() {
    const { classes, user } = this.props
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        {user ?
          <div>
            <Button
              className={classes.button}
              aria-owns={open ? 'menu-appbar' : null}
              aria-haspopup="true"
              onClick={this.handleMenu}
              color="secondary"
              variant='extendedFab'
            >
              <i className='material-icons' style={{ marginRight: '.3em'}} > account_circle </i>
              <Typography style={{color: 'white'}}> {this.getFirstName(user.get('name'))} </Typography>
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>Meus dados</MenuItem>
              <MenuItem onClick={this.handleLogout}>Sair</MenuItem>
            </Menu>
          </div> 
          :
          <Button color='inherit'> <Link to='/login' className={classes.link}> Login  </Link></Button>
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLogout: () => {
      dispatch({ type: actions.USERS_LOGOUT, payload: null })
    }
  }
}

const UserLogo = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(UserLogoComponent))

export default UserLogo
