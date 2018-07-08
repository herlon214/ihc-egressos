// Libs
import { Map, List, fromJS } from 'immutable'
import uuid from 'uuid'

// Used to keep namespaces consistency
const actions = {
  INFORMATIONS_OPEN: 'INFORMATIONS_OPEN'
}
const status = { open: 'open', closed: 'closed' }

const initialState = Map({
  list: List([
    Map({
      id: uuid(),
      title: 'Criação de Login para Professor Voluntário',
      status: status.open,
      body: `Donec vehicula tortor non congue aliquam. Donec at enim eu ex molestie ornare quis tincidunt ipsum. Integer at dolor tempor, tincidunt turpis a, lacinia lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. `
    }),
    Map({
      id: uuid(),
      title: 'Criação de Login para Professor Contratado',
      status: status.closed,
      body: `Curabitur sodales ligula orci, ut viverra sapien laoreet eu. Donec dapibus neque odio, faucibus placerat turpis elementum et. In euismod mollis orci, vel viverra eros bibendum non. Integer aliquet, mauris finibus ornare mattis, metus felis pellentesque tortor, vitae blandit mauris urna non ex. Fusce aliquet blandit nisi, vel ultricies felis feugiat vitae. Integer cursus ligula ac nisl rutrum, ut semper dui iaculis. Cras egestas libero tristique tortor posuere, at congue diam fermentum.`
    }),
  ])
})

// Export to keep the consistency between reducers
export { initialState, actions }

export default function reducer (state = initialState, action) {
  let list

  switch (action.type) {
    /**
     * payload: uuid
     */
    case actions.INFORMATIONS_OPEN:
      list = state.get('list').map((information) => {
        if (information.get('id') === action.payload) {
          information = information.set('status', status.open)
        }

        return information
      })

      return state.set('list', list)

    default:
      return state
  }
}
