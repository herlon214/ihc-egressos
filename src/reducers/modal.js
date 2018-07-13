// Libs
import { Map } from 'immutable'
import uuid from 'uuid'


// User to keep namespaces consistency
const actions = {
  MODAL_OPEN: 'MODAL_OPEN', // Clean the actual error
  MODAL_CLOSE: 'MODAL_CLOSE', // Verify the user and if it's valid set the actual as it
}


const initialState = Map({
  id: uuid(),
  openModal: false
})

// Export some vars to keep the consistency between reducers
export { initialState, actions }

export default function reducer (state = initialState, action) {
  switch (action.type) {
    
    case actions.MODAL_OPEN:
      return state.set('open', true)

    case actions.MODAL_CLOSE:
      return state.set('open', false) 

    default:
      return state
  }
}
