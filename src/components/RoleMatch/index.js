// Libs
import React from 'react'
import { connect } from 'react-redux'

const Component = ({ user }) => {
  if (!user) return null

  return this.children
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
