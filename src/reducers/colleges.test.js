import reducer from './colleges'

test(`must insert a new college`, () => {
  const state = reducer(undefined , {})
  const action = {
    type: 'COLLEGES_INSERT',
    payload: {
      name: 'Testing',
    }
  }

  const result = reducer(state, action)
  expect(result.get('list').size).toBe(10)
})

test(`must remove a college`, () => {
  const state = reducer(undefined , {})
  const action = {
    type: 'COLLEGES_REMOVE',
    payload: state.getIn(['list', 0, 'id'])
  }

  const result = reducer(state, action)
  expect(result.get('list').size).toBe(8)
})