import reducer, { actions } from './informations'

test(`must open a information`, () => {
  const state = reducer(undefined , {})
  const action = {
    type: actions.INFORMATIONS_OPEN,
    payload: state.getIn(['list', 1, 'id'])
  }

  const result = reducer(state, action)
  expect(result.getIn(['list', 1, 'status'])).toBe('open')
})

