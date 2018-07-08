// Libs
import { Map, List, fromJS } from 'immutable'
import uuid from 'uuid'
import { initialState as initialUsersState } from './users'

// Used to keep namespaces consistency
const status = { open: 'open', waiting: 'waiting', closed: 'closed' }
const actions = {
  FORUM_INSERT: 'FORUM_INSERT',
  FORUM_REMOVE: 'FORUM_REMOVE',
  FORUM_COMMENT_INSERT: 'FORUM_COMMENT_INSERT',
  FORUM_COMMENT_REMOVE: 'FORUM_COMMENT_REMOVE',
  FORUM_TOPIC_INSERT: 'FORUM_TOPIC_INSERT',
  FORUM_TOPIC_REMOVE: 'FORUM_TOPIC_REMOVE'
}

const [ firstForumId, firstTopicId, firstCommentId ] = [ uuid(), uuid(), uuid() ]
const initialState = Map({
  // List of forums
  list: List([
    Map({
      id: firstForumId,
      status: status.open,
      title: 'Sistemas de Informação',
    })
  ]),
  // List of topics
  topics: List([
    Map({
      id: firstTopicId,
      forumId: firstForumId,
      title: 'Disciplinas de inverno 2018',
      status: status.open,
    })
  ]),
  // List of comments
  comments: List([
    Map({
      id: firstCommentId,
      topicId: firstTopicId,
      authorId: initialUsersState.getIn(['list', 0, 'id']),
      body: 'Nulla fermentum egestas magna. Cras tempor nisi nec interdum semper. Vestibulum dignissim diam eu dui suscipit, sed varius sapien consectetur. Integer a dolor nisl. Nunc ut lacus at ligula mattis luctus.'
    })
  ])
})

// Export default state to keep the consistency between reducers
export { initialState, status, actions }

export default function reducer (state = initialState, action) {
  let list, topics, comments, data, model

  switch (action.type) {
    /**
     * payload: { title: string }
     * `id` is auto created
     */
    case actions.FORUM_INSERT:
      data = action.payload
      model = {
        id: uuid(),
        status: status.waiting,
        topics: List()
      }
      list = state.get('list')
      list = list.push(fromJS(data).merge(model))

      return state.set('list', list)

    /**
     * payload: uuid
     */
    case actions.FORUM_REMOVE:
      list = state.get('list').filter((item) => item.get('id') !== action.payload)
      return state.set('list', list)

    /**
     * payload: { topicId: uuid, authorId: uuid, body: string }
     */
    case actions.FORUM_COMMENT_INSERT:
      data = action.payload
      model = {
        id: uuid(),
      }
      comments = state.get('comments')
      comments = comments.push(fromJS(data).merge(model))

      return state.set('comments', comments)

    /**
     * payload: uuid
     */
    case actions.FORUM_COMMENT_REMOVE:
      comments = state.get('comments').filter((item) => item.get('id') !== action.payload)
      return state.set('comments', comments)

    /**
     * payload: { forumId: uuid, title: string }
     */
    case actions.FORUM_TOPIC_INSERT:
      data = action.payload
      model = {
        id: uuid(),
        status: status.waiting
      }
      topics = state.get('topics')
      topics = topics.push(fromJS(data).merge(model))

      return state.set('topics', topics)
    
    /**
     * payload: uuid
     */
    case actions.FORUM_TOPIC_REMOVE:
      topics = state.get('topics').filter((item) => item.get('id') !== action.payload)
      return state.set('topics', topics)

    default:
      return state
  }
}
