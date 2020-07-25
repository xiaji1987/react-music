import { HEADER_SEARCH_INFO } from './actionTypes'
import { searchApi } from '../../../api/index'

export const searchInfo = (params) => {
  return (dispatch) => {
    searchApi.searchInput(params).then(res => {
      console.log(res)
      const result = res.data.result
      dispatch({
        type: HEADER_SEARCH_INFO,
        songsList: result.songs,
        songCount: result.songCount,
        hasMore: result.hasMore
      })
    })
  }
}