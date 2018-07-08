// Libs
import { Map, List, fromJS } from 'immutable'
import uuid from 'uuid'


const status = {
  'open': 'open',
  'waiting': 'waiting',
  'closed': 'closed'
}

const initialState = Map({
  list: List([
    Map({
      id: uuid(),
      status: status.open,
      title: 'Sistemas de Informação',
      topics: List([
        Map({
          id: uuid(),
          title: 'Disciplinas de inverno 2018',
          status: status.open,
          comments: List([
            Map({
              id: uuid(),
              author: `initialUsersState.getIn(['list', 0, 'id'])`
            })
          ])
        })
      ])
    })
  ]),
})

// Export default state to keep the consistency between reducers
export { initialState, status }

export default function reducer (state = initialState, action) {

  switch (action.type) {
    /**
     * payload: { name: string }
     * `id` is auto created
     */
    case 'FORUM_INSERT':
      const data = action.payload
      const model = { id: uuid() }
      let list = state.get('list')
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
