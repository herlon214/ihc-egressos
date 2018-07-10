// Libs
import React from 'react'

// Components
import AdminMenu from './AdminMenu'
import CoordinatorMenu from './CoordinatorMenu'
import EgressMenu from './EgressMenu'

const UserMenu = ({ user }) => {
  if(user) {
    switch (user.get('role')) {
      case 'Administrator': 
        return (
          <div>
            <AdminMenu />   
          </div>
        )
      
      case 'Coordinator': 
        return (
          <div>
            <CoordinatorMenu />   
          </div>
        )
      
      case 'Egress': 
        return (
          <div>
            <EgressMenu />   
          </div>
        )
      
      default:
        return
    }
  } else {
    return (
      <div>
          {''}
      </div>
    )
  }

}

export default UserMenu
