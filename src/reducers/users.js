// Libs
import { Map, List, fromJS } from 'immutable'
import uuid from 'uuid'

// User roles
const roles = {
  'Administrator': 'Administrator',
  'Coordinator': 'Coordinator',
  'Egress': 'Egress'
}

// User to keep namespaces consistency
const actions = {
  USERS_ERROR_CLEAN: 'USERS_ERROR_CLEAN', // Clean the actual error
  USERS_LOGIN: 'USERS_LOGIN', // Verify the user and if it's valid set the actual as it
  USERS_LOGOUT: 'USERS_LOGOUT', // Logout the actual user
  USERS_INSERT: 'USERS_INSERT', // Inserts a new egress
  USERS_REMOVE: 'USERS_REMOVE' // Remove a given egress
}

const initialState = Map({
  actual: null, // For view or edit
  error: '', // Variable to show errors
  filter: Map({ name: null, ingress_year: null, course: null }), // For filter query
  list: List([
    Map({
      id: uuid(),
      name: 'Herlon Aguiar',
      course: 'Sistemas de Informação',
      national_register_number: '12345678900',
      password: '123',
      role: roles.Egress,
      ingress_year: 2014,
      egress_year: 2018
    }),
    Map({
      id: uuid(),
      name: 'Jeovano Coutinho',
      course: 'Sistemas de Informação',
      national_register_number: '12345678901',
      password: '123',
      role: roles.Administrator,
      ingress_year: 2014,
      egress_year: 2018
    }),
    Map({
      id: uuid(),
      name: 'Andrei Mattos',
      course: 'Artes Cênicas',
      national_register_number: '12345678902',
      password: '123',
      role: roles.Coordinator,
      ingress_year: 2012,
      egress_year: 2016
    }),
    Map({
      id: uuid(),
      name: 'Jone Arce',
      course: 'Agronomia',
      national_register_number: '12345678903',
      password: '123',
      role: roles.Egress,
      ingress_year: 2010,
      egress_year: 2014
    })
  ]) // List of all egresses
})

// Export some vars to keep the consistency between reducers
export { initialState, roles, actions }

export default function reducer (state = initialState, action) {
  let list

  switch (action.type) {
    /**
     * payload: null
     */
    case actions.USERS_ERROR_CLEAN:
      return state.set('error', '')

    /**
     * payload: { name: string, course: string, ingress_year: number, egress_year: number }
     * `id` is auto created
     */
    case actions.USERS_INSERT:
      const data = action.payload
      const model = { id: uuid() }
      list = state.get('list')
      list = list.push(fromJS(data).merge(model))

      return state.set('list', list)

    /**
     * payload: uuid
     */
    case actions.USERS_REMOVE:
      list = state.get('list').filter((item) => item.get('id') !== action.payload)
      return state.set('list', list)

    /**
     * payload { national_register_number: string, password: string }
     */
    case actions.USERS_LOGIN:
      const { payload } = action
      const match = state.get('list').filter((user) => {
        if (
          user.get('national_register_number') === payload.national_register_number &&
          user.get('password') === payload.password) {
          return true
        }
        return false
      })

      if (match.size > 0) {
        state = state.set('actual', match.get(0))
      } else {
        state = state.set('error', 'Usuário ou senha não encontrado.')
      }

      return state

    /**
     * payload: null
     */
    case actions.USERS_LOGOUT:
      return state.set('actual', null)

    default:
      return state
  }
}
