# uni-app 微信小程序开发 API 指南

## uni-app 核心 API

### 页面生命周期

```javascript
export default {
  onLoad(options) {
    // 页面加载时触发，只调用一次
    // options 为页面跳转所带来的参数
  },
  onShow() {
    // 页面显示/切入前台时触发
  },
  onReady() {
    // 页面初次渲染完成时触发，只调用一次
  },
  onHide() {
    // 页面隐藏/切入后台时触发
  },
  onUnload() {
    // 页面卸载时触发
  },
  onPullDownRefresh() {
    // 用户下拉刷新时触发
  },
  onReachBottom() {
    // 页面滚动到底部时触发
  },
  onShareAppMessage() {
    // 用户点击右上角分享
    return {
      title: '分享标题',
      path: '/pages/index/index'
    }
  }
}
```

### 路由与导航

```javascript
// 保留当前页面，跳转到应用内的某个页面
uni.navigateTo({
  url: '/pages/detail/detail?id=123',
  success: (res) => {},
  fail: (err) => {}
})

// 关闭当前页面，跳转到应用内的某个页面
uni.redirectTo({
  url: '/pages/login/login'
})

// 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
uni.switchTab({
  url: '/pages/home/home'
})

// 关闭所有页面，打开到应用内的某个页面
uni.reLaunch({
  url: '/pages/index/index'
})

// 返回上一页面或多级页面
uni.navigateBack({
  delta: 1 // 返回的页面数
})
```

### 数据请求

```javascript
// 发起网络请求
uni.request({
  url: 'https://api.example.com/data',
  method: 'GET', // 'POST', 'PUT', 'DELETE' 等
  data: {
    id: 1
  },
  header: {
    'content-type': 'application/json',
    'Authorization': 'Bearer token'
  },
  success: (res) => {
    console.log(res.data)
  },
  fail: (err) => {
    console.error(err)
  }
})

// 上传文件
uni.uploadFile({
  url: 'https://api.example.com/upload',
  filePath: tempFilePath,
  name: 'file',
  formData: {
    'user': 'test'
  },
  success: (uploadFileRes) => {
    console.log(uploadFileRes.data)
  }
})

// 下载文件
uni.downloadFile({
  url: 'https://example.com/file.pdf',
  success: (res) => {
    if (res.statusCode === 200) {
      uni.saveFile({
        tempFilePath: res.tempFilePath,
        success: (saveRes) => {
          console.log(saveRes.savedFilePath)
        }
      })
    }
  }
})
```

### 数据存储

```javascript
// 设置缓存（同步）
uni.setStorageSync('key', 'value')

// 获取缓存（同步）
const value = uni.getStorageSync('key')

// 删除缓存（同步）
uni.removeStorageSync('key')

// 清空缓存（同步）
uni.clearStorageSync()

// 异步方法
uni.setStorage({
  key: 'key',
  data: 'value',
  success: () => {}
})

uni.getStorage({
  key: 'key',
  success: (res) => {
    console.log(res.data)
  }
})
```

### 界面交互

```javascript
// 显示消息提示框
uni.showToast({
  title: '操作成功',
  icon: 'success', // 'loading', 'none'
  duration: 2000
})

// 显示模态对话框
uni.showModal({
  title: '提示',
  content: '确定要删除吗？',
  success: (res) => {
    if (res.confirm) {
      console.log('用户点击确定')
    } else if (res.cancel) {
      console.log('用户点击取消')
    }
  }
})

// 显示加载提示框
uni.showLoading({
  title: '加载中'
})

// 隐藏加载提示框
uni.hideLoading()

// 显示操作菜单
uni.showActionSheet({
  itemList: ['选项A', '选项B', '选项C'],
  success: (res) => {
    console.log('选中了第' + (res.tapIndex + 1) + '个选项')
  }
})
```

### 媒体选择

```javascript
// 选择图片
uni.chooseImage({
  count: 9, // 最多可以选择的图片张数
  sizeType: ['original', 'compressed'], // 原图或压缩图
  sourceType: ['album', 'camera'], // 从相册选择或使用相机
  success: (res) => {
    const tempFilePaths = res.tempFilePaths
    const tempFiles = res.tempFiles
  }
})

// 预览图片
uni.previewImage({
  urls: ['url1', 'url2', 'url3'],
  current: 0 // 当前显示图片的索引
})

// 选择视频
uni.chooseVideo({
  sourceType: ['album', 'camera'],
  maxDuration: 60,
  camera: 'back',
  success: (res) => {
    const tempFilePath = res.tempFilePath
  }
})
```

## 微信小程序专属 API

### 登录授权

```javascript
// 获取登录凭证 code
uni.login({
  provider: 'weixin',
  success: (loginRes) => {
    const code = loginRes.code
    // 发送 code 到后端换取 openId, sessionKey, unionId
  }
})

// 获取用户信息（新版本推荐使用 button open-type="getUserInfo"）
uni.getUserInfo({
  provider: 'weixin',
  success: (infoRes) => {
    console.log(infoRes.userInfo)
  }
})

// 获取用户手机号（需要 button open-type="getPhoneNumber"）
// 在按钮的 @getphonenumber 事件中获取
```

### 微信支付

```javascript
uni.requestPayment({
  provider: 'wxpay',
  timeStamp: '',
  nonceStr: '',
  package: '',
  signType: 'MD5',
  paySign: '',
  success: (res) => {
    console.log('支付成功')
  },
  fail: (err) => {
    console.log('支付失败')
  }
})
```

### 分享功能

```javascript
// 页面内配置分享
export default {
  onShareAppMessage(options) {
    return {
      title: '分享标题',
      path: '/pages/index/index?id=123',
      imageUrl: '/static/share.png'
    }
  },

  // 分享到朋友圈（需要在微信开放平台配置）
  onShareTimeline() {
    return {
      title: '分享标题',
      query: 'id=123',
      imageUrl: '/static/share.png'
    }
  }
}
```

### 扫码功能

```javascript
uni.scanCode({
  success: (res) => {
    console.log('扫码结果：' + res.result)
    console.log('扫码类型：' + res.scanType)
  }
})
```

### 获取位置

```javascript
// 获取当前位置
uni.getLocation({
  type: 'gcj02', // wgs84 或 gcj02
  success: (res) => {
    const latitude = res.latitude
    const longitude = res.longitude
  }
})

// 打开地图选择位置
uni.chooseLocation({
  success: (res) => {
    console.log(res.name) // 位置名称
    console.log(res.address) // 详细地址
    console.log(res.latitude, res.longitude)
  }
})

// 打开地图导航
uni.openLocation({
  latitude: 39.9,
  longitude: 116.4,
  name: '目的地名称',
  address: '详细地址'
})
```

## 最佳实践

### 1. 网络请求封装

```javascript
// utils/request.js
const BASE_URL = 'https://api.example.com'

export function request(options) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: BASE_URL + options.url,
      method: options.method || 'GET',
      data: options.data || {},
      header: {
        'content-type': 'application/json',
        'Authorization': uni.getStorageSync('token') || '',
        ...options.header
      },
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data)
        } else {
          reject(res)
        }
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

// 使用示例
import { request } from '@/utils/request'

request({
  url: '/api/user/info',
  method: 'GET'
}).then(data => {
  console.log(data)
}).catch(err => {
  console.error(err)
})
```

### 2. 状态管理（Vuex）

```javascript
// store/index.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: null,
    token: ''
  },
  mutations: {
    SET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo
    },
    SET_TOKEN(state, token) {
      state.token = token
      uni.setStorageSync('token', token)
    }
  },
  actions: {
    login({ commit }, { code }) {
      // 调用登录 API
      return request({
        url: '/api/login',
        method: 'POST',
        data: { code }
      }).then(res => {
        commit('SET_TOKEN', res.token)
        commit('SET_USER_INFO', res.userInfo)
      })
    }
  }
})

export default store
```

### 3. 分包加载配置

```json
// pages.json
{
  "pages": [
    {
      "path": "pages/index/index"
    }
  ],
  "subPackages": [
    {
      "root": "pagesA",
      "pages": [
        {
          "path": "detail/detail"
        }
      ]
    }
  ],
  "preloadRule": {
    "pages/index/index": {
      "network": "all",
      "packages": ["pagesA"]
    }
  }
}
```

### 4. 性能优化

- 使用 `v-if` 而非 `v-show` 减少初始渲染
- 长列表使用虚拟滚动或分页加载
- 图片使用懒加载和适当的压缩
- 合理使用分包和预加载
- 减少 `setData` 的频率和数据量
- 使用节流和防抖优化高频事件

### 5. 错误处理

```javascript
// 全局错误处理
Vue.config.errorHandler = function (err, vm, info) {
  console.error('Vue Error:', err)
  uni.showToast({
    title: '程序出错了',
    icon: 'none'
  })
}

// Promise 错误处理
window.addEventListener('unhandledrejection', event => {
  console.error('Unhandled Promise Rejection:', event.reason)
})
```

### 6. 小程序配置项

```json
// manifest.json 微信小程序配置
{
  "mp-weixin": {
    "appid": "your-appid",
    "setting": {
      "urlCheck": false,
      "es6": true,
      "minified": true
    },
    "permission": {
      "scope.userLocation": {
        "desc": "你的位置信息将用于小程序定位"
      }
    },
    "requiredBackgroundModes": ["audio"],
    "usingComponents": true
  }
}
```

## 常见问题

### 1. 跨域问题
微信小程序不存在跨域问题，但需要在微信公众平台配置服务器域名

### 2. 本地存储限制
单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB

### 3. 图片选择数量限制
`chooseImage` 最多支持选择 9 张图片

### 4. 页面栈层数限制
页面栈最多 10 层，超过时使用 `redirectTo` 或 `reLaunch`

### 5. 授权问题
用户拒绝授权后，需引导用户到设置页面手动开启权限
