import reducer, { actions } from './jobs'
import { initialState as companiesInitialState } from './companies'

test(`must insert a new job`, () => {
  const state = reducer(undefined , {})
  const action = {
    type: actions.JOBS_INSERT,
    payload: {
      company_id: companiesInitialState.getIn(['list', 0, 'id']),
      role: 'Desenvolvedor JavaScript Sênior',
      description: 'Vestibulum sit amet quam ipsum. Ut vel imperdiet diam. Morbi consectetur elit id leo consequat, in tempus libero congue. Maecenas quis diam quis augue vehicula sollicitudin. '
    }
  }

  const result = reducer(state, action)
  expect(result.get('list').size).toBe(4)
})

test(`must remove a job`, () => {
  const state = reducer(undefined , {})
  const action = {
    type: actions.JOBS_REMOVE,
    payload: state.getIn(['list', 0, 'id'])
  }

  const result = reducer(state, action)
  expect(result.get('list').size).toBe(2)
})

test(`must update a job`, () => {
  const state = reducer(undefined , {})
  const action = {
    type: actions.JOBS_UPDATE,
    payload: {
      id: state.getIn(['list', 0, 'id']),
      description: 'Vestibulum sit amet quam ipsum.'
    }
  }

  const result = reducer(state, action)
  expect(result.getIn(['list', 0, 'description'])).toBe('Vestibulum sit amet quam ipsum.')
})