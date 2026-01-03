/**
 * 网络请求封装
 */

const BASE_URL = process.env.NODE_ENV === 'development'
  ? 'https://dev-api.example.com'
  : 'https://api.example.com'

// 请求拦截器
const requestInterceptor = (config) => {
  // 添加 token
  const token = uni.getStorageSync('token')
  if (token) {
    config.header = {
      ...config.header,
      'Authorization': `Bearer ${token}`
    }
  }
  return config
}

// 响应拦截器
const responseInterceptor = (response) => {
  const { statusCode, data } = response

  // 处理 HTTP 状态码
  if (statusCode === 200) {
    // 处理业务状态码
    if (data.code === 0) {
      return data.data
    } else if (data.code === 401) {
      // token 过期，跳转登录
      uni.removeStorageSync('token')
      uni.reLaunch({
        url: '/pages/login/login'
      })
      return Promise.reject(new Error(data.message || '未授权'))
    } else {
      uni.showToast({
        title: data.message || '请求失败',
        icon: 'none'
      })
      return Promise.reject(new Error(data.message))
    }
  } else {
    uni.showToast({
      title: `请求失败 (${statusCode})`,
      icon: 'none'
    })
    return Promise.reject(new Error(`HTTP Error: ${statusCode}`))
  }
}

/**
 * 发起网络请求
 * @param {Object} options 请求配置
 * @returns {Promise}
 */
export function request(options) {
  // 应用请求拦截器
  const config = requestInterceptor({
    url: BASE_URL + options.url,
    method: options.method || 'GET',
    data: options.data || {},
    header: {
      'content-type': 'application/json',
      ...options.header
    },
    timeout: options.timeout || 60000
  })

  return new Promise((resolve, reject) => {
    uni.request({
      ...config,
      success: (res) => {
        responseInterceptor(res)
          .then(resolve)
          .catch(reject)
      },
      fail: (err) => {
        uni.showToast({
          title: '网络请求失败',
          icon: 'none'
        })
        reject(err)
      }
    })
  })
}

/**
 * GET 请求
 */
export function get(url, data, options = {}) {
  return request({
    url,
    method: 'GET',
    data,
    ...options
  })
}

/**
 * POST 请求
 */
export function post(url, data, options = {}) {
  return request({
    url,
    method: 'POST',
    data,
    ...options
  })
}

/**
 * PUT 请求
 */
export function put(url, data, options = {}) {
  return request({
    url,
    method: 'PUT',
    data,
    ...options
  })
}

/**
 * DELETE 请求
 */
export function del(url, data, options = {}) {
  return request({
    url,
    method: 'DELETE',
    data,
    ...options
  })
}

/**
 * 上传文件
 */
export function uploadFile(url, filePath, formData = {}) {
  const token = uni.getStorageSync('token')

  return new Promise((resolve, reject) => {
    uni.uploadFile({
      url: BASE_URL + url,
      filePath,
      name: 'file',
      formData,
      header: {
        'Authorization': token ? `Bearer ${token}` : ''
      },
      success: (res) => {
        if (res.statusCode === 200) {
          const data = JSON.parse(res.data)
          if (data.code === 0) {
            resolve(data.data)
          } else {
            uni.showToast({
              title: data.message || '上传失败',
              icon: 'none'
            })
            reject(new Error(data.message))
          }
        } else {
          reject(new Error(`上传失败 (${res.statusCode})`))
        }
      },
      fail: reject
    })
  })
}

export default {
  request,
  get,
  post,
  put,
  del,
  uploadFile
}
