import http from '../../utils/request'

// 获取轮播图
export function getSwiperList(data) {
  return http({
    url: '/banner',
    params: data
  })
}

// 推荐歌单
export function getRecomSongSheet(data) {
  return http({
    url: '/personalized',
    params: data
  })
}

// 独家放送
export function getRecomPrivatecontent(data) {
  return http({
    url: '/personalized/privatecontent',
    params: data
  })
}

// 最新音乐
export function getRecomNewMusic(data) {
  return http({
    url: '/personalized/newsong',
    params: data
  })
}

// 获取音乐标签
export function getSongTags(data) {
  return http({
    url: '/playlist/hot',
    params: data
  })
}

// 获取歌单列表
export function getSongSheets(data) {
  return http({
    url: '/top/playlist/highquality',
    params: data
  })
}

// 获取歌单详情
export function getSongDetails(data) {
  return http({
    url: '/playlist/detail',
    params: data
  })
}