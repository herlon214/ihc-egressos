// Libs
import { Map, List, fromJS } from 'immutable'
import uuid from 'uuid';

const initialState = Map({
  list: List([
    Map({
      id: uuid(),
      name: 'CIENCIAS ECONÔMICAS',
      college: 'FACE'
    }),
    Map({
      id: uuid(),
      name: 'ZOOTECNIA',
      college: 'FCA'
    }),
    Map({
      id: uuid(),
      name: 'CIENCIAS BIOLOGICAS',
      college: 'FCBA'
    }),
    Map({
      id: uuid(),
      name: 'SISTEMAS DE INFORMAÇÃO',
      college: 'FACET' 
    }),
    Map({
      id: uuid(),
      name: 'CIÊNCIAS SOCIAIS',
      college: 'FCH'
    }),
    Map({
      id: uuid(),
      name: 'LETRAS',
      college: 'FACALE'
    }),
    Map({
      id: uuid(),
      name: 'DIREITO',
      college: 'FADIR'
    }),
    Map({
      id: uuid(),
      name: 'Engenharia Civil',
      college: 'FAEN'
    }),
    Map({
      id: uuid(),
      name: 'PEDAGOGIA',
      college: 'FAED'
    }),
  ]) // List of colleges
})

// Used to keep namespaces consistency
const actions = {
  COURSES_INSERT: 'COURSES_INSERT', // Insert a new college
  COURSES_REMOVE: 'COURSES_REMOVE' // Remove a given college
}

// Export some vars to keep the consistency between reducers
export { initialState, actions }

export default function reducer (state = initialState, action) {
  let list

  switch (action.type) {
    /**
     * payload: { name: string }
     * `id` is auto created
     */
    case actions.COURSES_INSERT:
      const data = action.payload
      const model = { id: uuid() }
      list = state.get('list')
      list = list.push(fromJS(data).merge(model))

      return state.set('list', list)

    /**
     * payload: uuid
     */
    case actions.COURSES_REMOVE:
      list = state.get('list').filter((item) => item.get('id') !== action.payload)
      return state.set('list', list)

    default:
      return state
  }
}
