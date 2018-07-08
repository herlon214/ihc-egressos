// Libs
import { Map, List, fromJS } from 'immutable'
import uuid from 'uuid';

// User roles
const roles = {
  'Administrator': 'Administrator',
  'Coordinator': 'Coordinator',
  'Egress': 'Egress'
}

// User to keep namespaces consistency
const actions = {
  EGRESSES_INSERT: 'EGRESSES_INSERT', // Inserts a new egress
  EGRESSES_REMOVE: 'EGRESSES_REMOVE' // Remove a given egress
}

const initialState = Map({
  actual: Map(), // For view or edit
  filter: Map({ name: null, ingress_year: null, course: null }), // For filter query
  list: List([
    Map({
      id: uuid(),
      name: 'Herlon Aguiar',
      course: 'Sistemas de Informação',
      role: roles.Egress,
      ingress_year: 2014,
      egress_year: 2018
    }),
    Map({
      id: uuid(),
      name: 'Jeovano Coutinho',
      course: 'Sistemas de Informação',
      role: roles.Administrator,
      ingress_year: 2014,
      egress_year: 2018
    }),
    Map({
      id: uuid(),
      name: 'Andrei Mattos',
      course: 'Artes Cênicas',
      role: roles.Coordinator,
      ingress_year: 2012,
      egress_year: 2016
    }),
    Map({
      id: uuid(),
      name: 'Jone Arce',
      course: 'Agronomia',
      role: roles.Egress,
      ingress_year: 2010,
      egress_year: 2014
    }),
  ]) // List of all egresses
})

// Export some vars to keep the consistency between reducers
export { initialState, roles, actions }

export default function reducer (state = initialState, action) {
  let list

  switch (action.type) {
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

    default:
      return state
  }
}
