// Libs
import { Map, List, fromJS } from 'immutable'
import { initialState as usersInitialState } from './users'
import uuid from 'uuid'

// Used to keep namespaces consistency
const actions = {
  INFORMATIONS_OPEN: 'INFORMATIONS_OPEN'
}
const status = { open: 'open', closed: 'closed' }
const firstQuestionaryId = uuid()
const questionsIds = [ uuid(), uuid(), uuid() ]

const initialState = Map({
  list: List([
    Map({
      id: firstQuestionaryId,
      title: 'University Survey 2018',
      questions: List([
        Map({
          id: questionsIds[0],
          name: 'What do you thing about the university?',
          answers: List(['Good', 'Bad', 'Kind of'])
        }),
        Map({
          id: questionsIds[1],
          name: 'Did you like the food?',
          answers: List(['Yes', 'No'])
        }),
        Map({
          id: questionsIds[2],
          name: 'About the teachers, what do you thing about them?',
          answers: List(['They are great', 'Bad', 'Good'])
        })
      ])
    })
  ]), // List of questionaries
  answers: List([
    Map({
      questionary_id: firstQuestionaryId,
      user_id: usersInitialState.getIn(['list', 0, 'id']),
      questions: List([
        Map({
          question_id: questionsIds[0],
          answer: 'Good'
        }),
        Map({
          question_id: questionsIds[1],
          answer: 'Yes'
        }),
        Map({
          question_id: questionsIds[2],
          answer: 'They are great'
        })
      ])
    })
  ])
})

// Export to keep the consistency between reducers
export { initialState, actions }

export default function reducer (state = initialState, action) {
  let list, data, model

  switch (action.type) {
    /**
     * payload: uuid
     */
    case actions.QUESTIONARIES_INSERT:
      data = action.payload
      model = {
        id: uuid(),
        status: status.waiting
      }
      list = state.get('list')
      list = list.push(fromJS(data).merge(model))

      return state.set('list', list)

    default:
      return state
  }
}
