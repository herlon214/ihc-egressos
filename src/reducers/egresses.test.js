import reducer from './egresses'

test(`must insert a new egress`, () => {
  const state = reducer(undefined , {})
  const action = {
    type: 'EGRESSES_INSERT',
    payload: {
      name: 'Testing',
      course: 'Testing',
      ingress_year: 2014,
      egress_year: 2028
    }
  }

  const result = reducer(state, action)
  expect(result.get('list').size).toBe(5)
})

test(`must remove a egress`, () => {
  const state = reducer(undefined , {})
  const action = {
    type: 'EGRESSES_REMOVE',
    payload: state.getIn(['list', 0, 'id'])
  }

  const result = reducer(state, action)
  expect(result.get('list').size).toBe(3)
})