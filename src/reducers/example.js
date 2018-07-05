import { Map } from 'immutable'

const initialState = Map({
  counter: 0
})

export default function example (state = initialState, action) {
  switch (action.type) {
    case 'EXAMPLE_INCREMENT':
      return state.set('counter', state.get('counter') + 1)
    default:
      return state
  }
}
