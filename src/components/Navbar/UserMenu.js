// Libs
import React from 'react'

// Components
import AdminMenu from './AdminMenu'
import CoordinatorMenu from './CoordinatorMenu'
import EgressMenu from './EgressMenu'
import GuestMenu from './GuestMenu'

const UserMenu = ({ user }) => {
  if (user) {
    switch (user.get('role')) {
      case 'Administrator':
        return (
          <AdminMenu />
        )

      case 'Coordinator':
        return (
          <CoordinatorMenu />
        )

      case 'Egress':
        return (
          <EgressMenu />
        )

      default:
    }
  } else {
    return <GuestMenu />
  }
}

export default UserMenu
