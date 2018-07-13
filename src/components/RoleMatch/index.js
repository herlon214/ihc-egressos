// Libs
import React from 'react'
import { connect } from 'react-redux'

const Component = ({ user, roles, children }) => {
  if (!user) return null

  if (roles.indexOf(user.get('role')) < 0) return null

  return children
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.get('actual')
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

const Default = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default Default
