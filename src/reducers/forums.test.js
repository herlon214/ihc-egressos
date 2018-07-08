import reducer from './forums'
import { initialState as initialUsersState } from './users'

test(`must insert a new forum`, () => {
  const state = reducer(undefined , {})
  const action = {
    type: 'FORUM_INSERT',
    payload: {
      name: 'Engenharia da Computação',
    }
  }

  const result = reducer(state, action)
  expect(result.get('list').size).toBe(2)
})
test(`must remove a forum`, () => {
  const state = reducer(undefined , {})
  const action = {
    type: 'FORUM_REMOVE',
    payload: state.getIn(['list', 0, 'id'])
  }

  const result = reducer(state, action)
  expect(result.get('list').size).toBe(0)
})

test(`must insert a new comment`, () => {
  const state = reducer(undefined , {})
  const action = {
    type: 'FORUM_COMMENT_INSERT',
    payload: {
      topicId: state.getIn(['topics', 0, 'id']),
      authorId: initialUsersState.getIn(['list', 0, 'id']),
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor maximus mi, eu suscipit purus blandit nec. Aliquam volutpat accumsan odio, a dapibus nulla viverra nec. Sed et cursus quam, quis laoreet sapien.'
    }
  }

  const result = reducer(state, action)
  expect(result.get('comments').size).toBe(2)
})
test(`must remove a comment`, () => {
  const state = reducer(undefined , {})
  const action = {
    type: 'FORUM_COMMENT_REMOVE',
    payload: state.getIn(['comments', 0, 'id'])
  }

  const result = reducer(state, action)
  expect(result.get('comments').size).toBe(0)
})

test(`must insert a new topic`, () => {
  const state = reducer(undefined , {})
  const action = {
    type: 'FORUM_TOPIC_INSERT',
    payload: {
      forumId: state.getIn(['list', 0, 'id']),
      title: 'Artes Cênicas'
    }
  }

  const result = reducer(state, action)
  expect(result.get('topics').size).toBe(2)
})
test(`must remove a topic`, () => {
  const state = reducer(undefined , {})
  const action = {
    type: 'FORUM_TOPIC_REMOVE',
    payload: state.getIn(['topics', 0, 'id'])
  }

  const result = reducer(state, action)
  expect(result.get('topics').size).toBe(0)
})