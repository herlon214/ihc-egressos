// Libs
import React from 'react'
import { connect } from 'react-redux'

const Component = ({ counter, onIncrement }) => (
  <p>
    Example component, increment { counter },
    <button onClick={() => onIncrement()}>Increment here</button>
  </p>
)

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    counter: state.example.get('counter')
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onIncrement: () => {
      dispatch({ type: 'EXAMPLE_INCREMENT', payload: null })
    }
  }
}

const Default = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default Default
