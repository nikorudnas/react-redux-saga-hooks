import { combineReducers } from 'redux'
import todos from './todos'
import dogs from './dogs'

export default combineReducers({ todos, dogs })
