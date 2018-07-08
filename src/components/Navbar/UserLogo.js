// Libs
import React from 'react'

// Components
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'

const UserLogo = ({logged}) => {
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
        <Button color='inherit'> Login </Button>
      }
    </div>
  )
}

export default UserLogo
