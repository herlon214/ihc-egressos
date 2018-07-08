import { combineReducers } from 'redux'

import example from './example'
import colleges from './colleges'
import companies from './companies'
import forums from './forums'
import informations from './informations'
import jobs from './jobs'
import messages from './messages'
import questionaries from './questionaries'
import testimonials from './testimonials'
import users from './users'

const reducers = combineReducers({
  example,
  colleges,
  companies,
  forums,
  informations,
  jobs,
  messages,
  questionaries,
  testimonials,
  users
})

export default reducers
