// Libs
import React, { Component } from 'react'

// Components
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { Link } from 'react-router-dom'
import { withStyles, Menu, MenuItem } from '@material-ui/core'

const styles = {
  link: {
    color: 'white',
    textDecoration: 'none'
  }
}



class UserLogo extends Component {
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


  render() {
    const { logged, classes } = this.props
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        {logged ?
          <div>
            <IconButton
              aria-owns={open ? 'menu-appbar' : null}
              aria-haspopup="true"
              onClick={this.handleMenu}
              color="inherit"
            >
              <i className='material-icons'> account_circle </i>
            </IconButton>
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
              <MenuItem onClick={this.handleClose}>Profile</MenuItem>
              <MenuItem onClick={this.handleClose}>My account</MenuItem>
            </Menu>
          </div> :
          <Button color='inherit'> <Link to='/login' className={classes.link}> Login  </Link></Button>
        }
      </div>
    );
  }
}

export default withStyles(styles)(UserLogo);
