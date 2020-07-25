import axios from 'axios'
// console.log(process.env.NODE_ENV)
const BASEURL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:4399/'

const http = axios.create({
  baseURL: BASEURL,
  timeout: 20000,
  headers: { 'content-type': 'application/json' }
})

http.interceptors.request.use(config => {
  return config
}, (error) => {
  return Promise.reject(error)
})

http.interceptors.response.use(response => {
  return Promise.resolve(response)
}, (error) => {
  return Promise.reject(error)
})

export default http