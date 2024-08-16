import axios from 'axios'
import { Message } from 'element-ui'
import router from '@/router'
const http = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})
// 获取token

// 添加请求拦截器
http.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const token = localStorage.getItem('token')
  // 有token就携带token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
http.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data.result
}, function (error) {
  // 对响应错误做点什么
  if (error.response && error.response.status === 401) {
    localStorage.clear()
    Message({
      showClose: true,
      message: error.response.data.message,
      type: 'error'
    })
    router.replace({
      path: '/Login',
      query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
    })
  }
  return Promise.reject(error.request.status)
})

export default http
