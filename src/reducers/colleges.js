// Libs
import { Map, List, fromJS } from 'immutable'
import uuid from 'uuid';

const initialState = Map({
  list: List([
    Map({
      id: uuid(),
      name: 'FACE'
    }),
    Map({
      id: uuid(),
      name: 'FCA'
    }),
    Map({
      id: uuid(),
      name: 'FCBA'
    }),
    Map({
      id: uuid(),
      name: 'FACET'
    }),
    Map({
      id: uuid(),
      name: 'FCH'
    }),
    Map({
      id: uuid(),
      name: 'FACALE'
    }),
    Map({
      id: uuid(),
      name: 'FADIR'
    }),
    Map({
      id: uuid(),
      name: 'FAEN'
    }),
    Map({
      id: uuid(),
      name: 'FAED'
    }),
  ]) // List of colleges
})

// Export some vars to keep the consistency between reducers
export { initialState }

export default function reducer (state = initialState, action) {
  let list

  switch (action.type) {
    /**
     * payload: { name: string }
     * `id` is auto created
     */
    case 'COLLEGES_INSERT':
      const data = action.payload
      const model = { id: uuid() }
      list = state.get('list')
      list = list.push(fromJS(data).merge(model))

      return state.set('list', list)

    /**
     * payload: uuid
     */
    case 'COLLEGES_REMOVE':
      list = state.get('list').filter((item) => item.get('id') !== action.payload)
      return state.set('list', list)

    default:
      return state
  }
}
