import { combineReducers } from 'redux'
import { counterReducer } from './counter/reducer'
import { usersReducer } from './users/reducer'

export default combineReducers({
	counter: counterReducer,
	users: usersReducer
})
