// Libs
import { Map, List, fromJS } from 'immutable'
import uuid from 'uuid'
import { initialState as companiesInitialState } from './companies'

const initialState = Map({
  list: List([
    Map({
      id: uuid(),
      company_id: companiesInitialState.getIn(['list', 0, 'id']),
      role: 'Desenvolvedor Android Pleno',
      description: `Sed quis gravida dolor. Aenean hendrerit dui eros, hendrerit finibus lorem dapibus a. Phasellus consequat nunc non est feugiat ultrices in id nisi. Integer tristique mauris enim, vitae aliquet sapien fermentum quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sit amet euismod ligula. Sed vestibulum sapien quam, sit amet gravida augue egestas quis. Etiam sem ex, facilisis sed tristique nec, tincidunt quis urna. Etiam vestibulum justo a accumsan auctor. Nullam semper enim id lacus finibus, quis dictum ante sodales. Cras pellentesque leo sed dolor vestibulum, sit amet viverra mi venenatis. Suspendisse felis nunc, feugiat sed metus vel, posuere bibendum tortor. Etiam eu erat ante. Duis in consequat ipsum.`,
    }),
    Map({
      id: uuid(),
      company_id: companiesInitialState.getIn(['list', 1, 'id']),
      role: 'Desenvolvedor Java Sênior',
      description: `Cras vestibulum sapien at diam lobortis, in venenatis tellus vestibulum. Aliquam erat volutpat. Vivamus ullamcorper sem non vestibulum tristique. Aliquam lobortis, nisi sit amet pretium facilisis, lorem ante cursus diam, non dignissim dolor risus vitae ante. Praesent ut lorem augue. Etiam sagittis viverra viverra. Fusce massa est, placerat eget neque nec, eleifend tempus diam. Donec et leo sit amet diam luctus ultricies non eu metus. Cras id lectus egestas metus elementum facilisis efficitur sit amet arcu. Sed ac pellentesque dui, ut efficitur enim. Fusce blandit et purus sit amet tempus.`
    }),
    Map({
      id: uuid(),
      company_id: companiesInitialState.getIn(['list', 2, 'id']),
      role: 'Desenvolvedor Python Júnior',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget convallis tellus, ultrices faucibus leo. Nunc ullamcorper, nibh eget mattis consequat, leo nisi consequat orci, eu tristique ipsum erat quis ante. Mauris eget purus tempus, aliquet nibh vitae, aliquam erat. Pellentesque faucibus risus placerat diam sodales tristique. Duis aliquam feugiat eleifend. Nulla ullamcorper purus eget nibh auctor, quis imperdiet nisl laoreet. Proin ornare libero vel arcu mattis, ac volutpat nisl suscipit. Vestibulum nunc est, bibendum ac egestas eu, blandit ac lorem. Vivamus auctor mi ipsum, nec placerat purus congue ac. Nunc blandit consequat nisi, ac eleifend orci suscipit eu. Suspendisse vitae quam vitae dui dictum faucibus sit amet vel orci. Donec iaculis, risus et pretium suscipit, nisi velit luctus nunc, id congue eros metus non nibh. Vestibulum ullamcorper mi a nunc ullamcorper, ut condimentum turpis molestie.`
    })
  ]) // List of jobs
})

// Used to keep namespaces consistency
const actions = {
  JOBS_INSERT: 'JOBS_INSERT', // Insert a new job
  JOBS_REMOVE: 'JOBS_REMOVE', // Remove a given job
  JOBS_UPDATE: 'JOBS_UPDATE', // Update a given job
}

// Export some vars to keep the consistency between reducers
export { initialState, actions }

export default function reducer (state = initialState, action) {
  let list

  switch (action.type) {
    /**
     * payload: { company_id: uuid, role: string, description: string }
     * `id` is auto created
     */
    case actions.JOBS_INSERT:
      const data = action.payload
      const model = { id: uuid() }
      list = state.get('list')
      list = list.push(fromJS(data).merge(model))

      return state.set('list', list)
    
    /**
     * payload: uuid
     */
    case actions.JOBS_REMOVE:
      list = state.get('list').filter((item) => item.get('id') !== action.payload)
      return state.set('list', list)

    /**
     * payload: { id: uuid, role: string, description: string }
     */
    case actions.JOBS_UPDATE:
      list = state.get('list').map((item) => {
        if (item.get('id') === action.payload.id) return item.merge(action.payload)

        return item
      })

      return state.set('list', list)

    default:
      return state
  }
}
