// Libs
import React from 'react'

// Components
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core'

const styles =  {
  link: {
    color: 'white',
    textDecoration: 'none'
  }
}

const UserLogo = ({classes, logged}) => {
  return (
    <div>
      {logged ?
        <div>
          <IconButton
            aria-haspopup="true"
            color="inherit"
          >
            <i className='material-icons'> account_circle </i>
          </IconButton>
        </div> :
        <Button color='inherit'> <Link to='/login' className={ classes.link }> Login  </Link></Button>
      }
    </div>
  )
}

export default withStyles(styles)(UserLogo);
