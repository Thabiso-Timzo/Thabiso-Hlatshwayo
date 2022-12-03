import {
    EMAIL_REQUEST,
    EMAIL_SUCCESS,
    EMAIL_FAIL
} from '../constants/emailConstants'

export const emailReducer = (state = {}, action) => {
  switch (action.type) {
    case EMAIL_REQUEST:
      return { loading: true, success: false }
    case EMAIL_SUCCESS:
      return { loading: false, success: true, email: action.payload }
    case EMAIL_FAIL:
      return { loading: false, success: false, error: action.payload }
    default:
      return state
  }
}