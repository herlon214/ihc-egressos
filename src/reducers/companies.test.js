import reducer, { actions } from './companies'

test(`must insert a new company`, () => {
  const state = reducer(undefined , {})
  const action = {
    type: actions.COMPANIES_INSERT,
    payload: {
      name: 'MOOLAB-COMERCIO E DESENVOLVIMENTO DE APLICATIVOS LTDA. - ME',
      fantasy_name: 'Planejei',
      national_register_number: '17.615.996/0001-42',
      email: 'contato@planejei.com'
    }
  }

  const result = reducer(state, action)
  expect(result.get('list').size).toBe(4)
})

test(`must remove a company`, () => {
  const state = reducer(undefined , {})
  const action = {
    type: actions.COLLEGES_REMOVE,
    payload: state.getIn(['list', 0, 'id'])
  }

  const result = reducer(state, action)
  expect(result.get('list').size).toBe(3)
})

test(`must update a company`, () => {
  const state = reducer(undefined , {})
  const action = {
    type: actions.COMPANIES_UPDATE,
    payload: {
      id: state.getIn(['list', 0, 'id']),
      fantasy_name: 'Soft Brasil Technology'
    }
  }

  const result = reducer(state, action)
  expect(result.getIn(['list', 0, 'fantasy_name'])).toBe('Soft Brasil Technology')
})