// Libs
import { Map, List, fromJS } from 'immutable'
import { initialState as initialUsersState } from './users'
import uuid from 'uuid'

const initialState = Map({
  list: List([
    Map({
      id: uuid(),
      from: initialUsersState.getIn(['list', 1, 'id']),
      to: initialUsersState.getIn(['list', 0, 'id']),
      read: false,
      message: `Olá egresso, como tem ido sua vida no mercado de trabalho? Por favor, assim que possível envie um e-mail para mim. jeovano@ufd.edu.br`
    }),
    Map({
      id: uuid(),
      from: initialUsersState.getIn(['list', 2, 'id']),
      to: initialUsersState.getIn(['list', 0, 'id']),
      read: false,
      message: `Olá egresso, tudo bem? Preciso do seu e-mail para entrar em contato.`
    }),
    Map({
      id: uuid(),
      from: initialUsersState.getIn(['list', 3, 'id']),
      to: initialUsersState.getIn(['list', 0, 'id']),
      read: false,
      message: `Gostaria de falar com você, pode me ligar?`
    })
  ])
})

// Used to keep namespaces consistency
const actions = {
  MESSAGES_INSERT: 'MESSAGES_INSERT',
  MESSAGES_REMOVE: 'MESSAGES_REMOVE',
  MESSAGES_SET_READ: 'MESSAGES_SET_READ'
}

// Export some vars to keep the consistency between reducers
export { initialState, actions }

export default function reducer (state = initialState, action) {
  let list, data, model

  switch (action.type) {
    /**
     * payload: { from: uuid, to: uuid, message: string }
     */
    case actions.MESSAGES_INSERT:
      data = action.payload
      model = { id: uuid(), read: false }
      list = state.get('list')
      list = list.push(fromJS(data).merge(model))

      return state.set('list', list)

    /**
     * payload: uuid
     */
    case actions.MESSAGES_REMOVE:
      list = state.get('list').filter(message => message.get('id') !== action.payload)

      return state.set('list', list)

    /**
     * payload: uuid
     */
    case actions.MESSAGES_SET_READ:
      list = state.get('list').map(message => {
        if (message.get('id') === action.payload) message = message.set('read', true)

        return message
      })

      return state.set('list', list)

    default:
      return state
  }
}
