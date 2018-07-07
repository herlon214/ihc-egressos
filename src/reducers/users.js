// Libs
import { Map } from 'immutable'

const initialState = Map({
  role: 'Guest', // Administrator, Coordinator, Egress, Guest
  name: '',
})

export default function users (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
