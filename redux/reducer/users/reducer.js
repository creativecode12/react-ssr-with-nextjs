import { initialState } from '../../action/counter/state'
import { actionType } from '../../action/counter/type'

export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.update_user:
			return { ...state, users: action.payload }
		default:
			return state
	}
}
