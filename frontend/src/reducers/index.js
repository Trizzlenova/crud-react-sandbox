import { combineReducers } from 'redux'
import posts from './postReducer'

// Combine all our reducers together
const rootReducer = combineReducers({
  posts,
})

export default rootReducer
