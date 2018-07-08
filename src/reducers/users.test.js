import reducer, { roles, actions } from './users'

test(`must insert a new user`, () => {
  const state = reducer(undefined , {})
  const action = {
    type: actions.EGRESSES_INSERT,
    payload: {
      name: 'Testing',
      course: 'Testing',
      role: roles.Egress,
      ingress_year: 2014,
      egress_year: 2028
    }
  }

  const result = reducer(state, action)
  expect(result.get('list').size).toBe(5)
})

test(`must remove a user`, () => {
  const state = reducer(undefined , {})
  const action = {
    type: actions.EGRESSES_REMOVE,
    payload: state.getIn(['list', 0, 'id'])
  }

  const result = reducer(state, action)
  expect(result.get('list').size).toBe(3)
})