// Libs
import { Map, List, fromJS, merge } from 'immutable'
import uuid from 'uuid';

const initialState = Map({
  actual: Map(), // For view or edit
  filter: Map({ name: null, ingress_year: null, course: null }), // For filter query
  list: List([
    Map({
      id: uuid(),
      name: 'Herlon Aguiar',
      course: 'Sistemas de Informação',
      ingress_year: 2014,
      egress_year: 2018
    }),
    Map({
      id: uuid(),
      name: 'Jeovano Coutinho',
      course: 'Sistemas de Informação',
      ingress_year: 2014,
      egress_year: 2018
    }),
    Map({
      id: uuid(),
      name: 'Andrei Mattos',
      course: 'Artes Cênicas',
      ingress_year: 2012,
      egress_year: 2016
    }),
    Map({
      id: uuid(),
      name: 'Jone Arce',
      course: 'Agronomia',
      ingress_year: 2010,
      egress_year: 2014
    }),
  ]) // List of all egresses
})

export default function egresses (state = initialState, action) {

  switch (action.type) {
    /**
     * payload: { name: string, course: string, ingress_year: number, egress_year: number }
     * `id` is auto created
     */
    case 'EGRESSES_INSERT':
      const data = action.payload
      const model = { id: uuid() }
      let list = state.get('list')
      list = list.push(fromJS(data).merge(model))

      return state.set('list', list)
    
    /**
     * payload: uuid
     */
    case 'EGRESSES_REMOVE':
      list = state.get('list').filter((egress) => egress.get('id') !== action.payload)
      return state.set('list', list)
    default:
      return state
  }
}
