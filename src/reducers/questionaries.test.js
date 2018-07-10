import reducer, { actions } from './questionaries'
import { initialState as initialUsersState } from './users'

test(`must insert a new questionary`, () => {
  const state = reducer(undefined , {})
  const action = {
    type: actions.QUESTIONARIES_INSERT,
    payload: {
      title: 'Testing form',
      questions: [{ name: 'Did you like that?', answers: ['Yes', 'No'] }]
    }
  }

  const result = reducer(state, action)

  expect(result.getIn(['list', 1, 'title'])).toBe('Testing form')
  expect(result.getIn(['list', 1, 'questions']).size).toBe(1)
})

test(`must remove a questionary`, () => {
  const state = reducer(undefined , {})
  const action = {
    type: actions.QUESTIONARIES_REMOVE,
    payload: state.getIn(['list', 0, 'id'])
  }

  const result = reducer(state, action)

  expect(result.get('list').size).toBe(0)
  expect(result.get('answers').size).toBe(0)
})

test(`must insert a answer`, () => {
  const state = reducer(undefined , {})
  const action = {
    type: actions.QUESTIONARIES_ANSWERS_INSERT,
    payload: {
      questionary_id: state.getIn(['list', 0, 'id']),
      user_id: initialUsersState.getIn(['list', 0, 'id']),
      questions: [
        { question_id: state.getIn(['list', 0, 'questions', 0, 'id']), answer: 'Good' },
        { question_id: state.getIn(['list', 0, 'questions', 1, 'id']), answer: 'Yes' },
        { question_id: state.getIn(['list', 0, 'questions', 2, 'id']), answer: 'They are great' }
      ]
    }
  }

  const result = reducer(state, action)

  expect(result.get('answers').size).toBe(2)
  expect(result.getIn(['answers', 1, 'questions', 0, 'answer'])).toBe('Good')
  expect(result.getIn(['answers', 1, 'questions']).size).toBe(3)
})
