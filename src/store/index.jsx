import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux-immutable'
import thunk from 'redux-thunk'
import headerReducer from '../components/Header/store/reducer'

const reducer = combineReducers({
  header: headerReducer
})
const store = createStore(reducer, applyMiddleware(thunk))

export default store