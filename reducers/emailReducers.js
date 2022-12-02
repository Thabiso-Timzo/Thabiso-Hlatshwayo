import {
    EMAIL_REQUEST,
    EMAIL_SUCCESS,
    EMAIL_FAIL
} from '../constants/emailConstants'

export const emailReducer = (state = {}, action) => {
  switch (action.type) {
    case EMAIL_REQUEST:
      return { loading: true }
    case EMAIL_SUCCESS:
      return { loading: false, email: action.payload }
    case EMAIL_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}