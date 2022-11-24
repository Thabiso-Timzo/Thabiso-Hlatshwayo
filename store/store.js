import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// import reducers
import {
  aboutReducer
} from '../reducers/about-reducer/aboutReducer'

// use reducers in combineReducers
const reducer = combineReducers({
  about: aboutReducer
})

// initial state
const initialState = {}

// middle ware
const middleware = [thunk]

// store
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store