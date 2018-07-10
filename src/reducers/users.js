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
  EGRESS_ERROR_CLEAN: 'EGRESS_ERROR_CLEAN', // Clean the actual error
  EGRESS_LOGIN: 'EGRESS_LOGIN', // Verify the user and if it's valid set the actual as it
  EGRESS_LOGOUT: 'EGRESS_LOGOUT', // Logout the actual user
  EGRESSES_INSERT: 'EGRESSES_INSERT', // Inserts a new egress
  EGRESSES_REMOVE: 'EGRESSES_REMOVE' // Remove a given egress
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
    case actions.EGRESS_ERROR_CLEAN:
      return state.set('error', '')

    /**
     * payload: { name: string, course: string, ingress_year: number, egress_year: number }
     * `id` is auto created
     */
    case actions.EGRESSES_INSERT:
      const data = action.payload
      const model = { id: uuid() }
      list = state.get('list')
      list = list.push(fromJS(data).merge(model))

      return state.set('list', list)

    /**
     * payload: uuid
     */
    case actions.EGRESSES_REMOVE:
      list = state.get('list').filter((item) => item.get('id') !== action.payload)
      return state.set('list', list)

    /**
     * payload { register_number: string, password: string }
     */
    case actions.EGRESS_LOGIN:
      const { payload } = action
      const match = state.get('list').filter((user) => {
        if (
          user.get('national_register_number') === payload.national_register_number &&
          user.get('password') === payload.password) {
          return true
        }
        return false
      })

      if (match.length > 0) {
        state = state.set('actual', match.get(0))
      } else {
        state = state.set('error', 'User or password not found')
      }

      return state

    /**
     * payload: null
     */
    case actions.EGRESS_LOGOUT:
      return state.set('actual', null)

    default:
      return state
  }
}
