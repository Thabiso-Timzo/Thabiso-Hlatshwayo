import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// import reducers

// use reducers in combineReducers
const reducer = combineReducers({
  
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