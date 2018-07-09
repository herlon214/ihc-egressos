// Libs
import { Map, List, fromJS } from 'immutable'
import uuid from 'uuid'

const initialState = Map({
  list: List([
    Map({
      id: uuid(),
      name: 'Soft.Brasil LTDA.',
      fantasy_name: 'Soft Brasil',
      national_register_number: '20.185.688/7945-870',
      email: 'soft_brasil@gmail.com'
    }),
    Map({
      id: uuid(),
      name: 'DOARE GESTAO FINANCEIRA LTDA',
      fantasy_name: 'DOARE DOACOES',
      national_register_number: '17.094.702/0001-84',
      email: 'ruy@doare.org'
    }),
    Map({
      id: uuid(),
      name: 'ZZN Internet Media Group Ltda',
      fantasy_name: 'Reduza',
      national_register_number: '16.725.212/0001-76',
      email: 'contato@reduza.com.br'
    })
  ]) // List of companies
})

// Used to keep namespaces consistency
const actions = {
  COMPANIES_INSERT: 'COMPANIES_INSERT', // Insert a new company
  COMPANIES_REMOVE: 'COMPANIES_REMOVE', // Remove a given company
  COMPANIES_UPDATE: 'COMPANIES_UPDATE', // Update a given company
}

// Export some vars to keep the consistency between reducers
export { initialState, actions }

export default function reducer (state = initialState, action) {
  let list

  switch (action.type) {
    /**
     * payload: { name: string, fantasy_name: string, national_register_number: string, email: string }
     * `id` is auto created
     */
    case actions.COMPANIES_INSERT:
      const data = action.payload
      const model = { id: uuid() }
      list = state.get('list')
      list = list.push(fromJS(data).merge(model))

      return state.set('list', list)
    
    /**
     * payload: uuid
     */
    case actions.COMPANIES_REMOVE:
      list = state.get('list').filter((item) => item.get('id') !== action.payload)
      return state.set('list', list)

    /**
     * payload: { id: uuid, name: string, fantasy_name: string, national_register_number: string, email: string }
     */
    case actions.COMPANIES_UPDATE:
      list = state.get('list').map((item) => {
        if (item.get('id') === action.payload.id) return item.merge(action.payload)

        return item
      })

      return state.set('list', list)

    default:
      return state
  }
}
