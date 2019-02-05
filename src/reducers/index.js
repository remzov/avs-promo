import actionTypes from '../constants/actionTypes';

const initialState = {
  userReady: false,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_READY:
			return {...state, userReady: true}
		default:
      return state;
	}
}