// Libs
import { Map, List, fromJS } from 'immutable'
import { initialState as usersInitialState } from './users'
import uuid from 'uuid'

// Used to keep namespaces consistency
const actions = {
  QUESTIONARIES_INSERT: 'QUESTIONARIES_INSERT', // Insert a new questionary
  QUESTIONARIES_REMOVE: 'QUESTIONARIES_REMOVE', // Remove a created questionary
  QUESTIONARIES_ANSWERS_INSERT: 'QUESTIONARIES_ANSWERS_INSERT', // Insert a new answer
  QUESTIONARIES_ANSWERS_REMOVE: 'QUESTIONARIES_ANSWERS_REMOVE' // Remove a answer
}
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
  ]) // List of answers
})

// Export to keep the consistency between reducers
export { initialState, actions }

export default function reducer (state = initialState, action) {
  let list, data, model, answers

  switch (action.type) {
    /**
     * payload: { title: string, questions: { name: string, answers: string[] }[] }
     */
    case actions.QUESTIONARIES_INSERT:
      data = action.payload
      model = {
        id: uuid(),
        questions: action.payload.questions.map(question => {
          question.id = uuid()
          return question
        }) // Set id for each question
      }
      list = state.get('list')
      list = list.push(fromJS(data).merge(model))

      return state.set('list', list)

    /**
     * payload: uuid
     */
    case actions.QUESTIONARIES_REMOVE:
      list = state.get('list').filter(questionary => questionary.get('id') !== action.payload)
      answers = state.get('answers').filter(answer => answer.get('questionary_id') !== action.payload)

      state = state.set('list', list)
      state = state.set('answers', answers)

      return state

    /**
     * payload: { questionary_id: uuid, user_id: uuid, questions: { question_id: uuid, answer: string }[] }
     */
    case actions.QUESTIONARIES_ANSWERS_INSERT:
      data = action.payload
      model = {
        id: uuid()
      }
      answers = state.get('answers')
      answers = answers.push(fromJS(data).merge(model))

      return state.set('answers', answers)

    /**
     * payload: uuid
     */
    case actions.QUESTIONARIES_ANSWERS_REMOVE:
      answers = state.get('answers').filter(answer => answer.get('id') !== action.payload)

      return state.set('answers', answers)

    default:
      return state
  }
}
