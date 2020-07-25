import { fromJS } from 'immutable'
import { HEADER_SEARCH_INFO } from './actionTypes'

const defaultState = fromJS({
  songsList: [],
  songCount: 0,
  hasMore: false
})

function headerReducer(state = defaultState, action) {
  switch (action.type) {
    case HEADER_SEARCH_INFO:
      return state.merge({
        songsList: fromJS(action.songsList),
        songCount: fromJS(action.songCount),
        hasMore: fromJS(action.hasMore)
      })
    default:
      return state
  }
}

export default headerReducer