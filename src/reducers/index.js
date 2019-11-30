import { combineReducers } from 'redux'
import user from './user'
import cities from './cities'

export default combineReducers({
  user,
  cities
})