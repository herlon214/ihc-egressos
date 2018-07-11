import reducer, { actions } from './messages'
import { initialState as initialUsersState } from './users'

test(`must insert a message`, () => {
  const state = reducer(undefined, {})
  const action = {
    type: actions.MESSAGES_INSERT,
    payload: {
      from: initialUsersState.getIn(['list', 0, 'id']),
      to: initialUsersState.getIn(['list', 1, 'id']),
      message: `Como está você?`
    }
  }

  const result = reducer(state, action)

  expect(result.getIn(['list', 1, 'message'])).toBe(`Como está você?`)
})

test(`must remove a message`, () => {
  const state = reducer(undefined, {})
  const action = {
    type: actions.MESSAGES_REMOVE,
    payload: state.getIn(['list', 0, 'id'])
  }

  const result = reducer(state, action)

  expect(result.get('list').size).toBe(0)
})
