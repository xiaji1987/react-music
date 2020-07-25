import http from '../../utils/request'

export function searchInput(data) {
  return http({
    url: '/search',
    params: data
  })
}
