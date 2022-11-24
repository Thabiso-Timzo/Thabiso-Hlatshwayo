import {
    ABOUT_LIST_REQUEST,
    ABOUT_LIST_SUCCESS,
    ABOUT_LIST_FAIL
} from '../../constants/about-constants/aboutConstants'

export const aboutReducer = (state = {data:[]}, action) => {
    switch (action.type) {
        case ABOUT_LIST_REQUEST:
          return {loading: true, data: []};
        case ABOUT_LIST_SUCCESS:
          return {loading: false, data: action.payload};
        case ABOUT_LIST_FAIL:
          return {loading: false, error: action.payload};
        default:
          return state;
      }
}