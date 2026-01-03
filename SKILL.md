---
name: uniapp-miniprogram-dev
description: Advanced uni-app WeChat miniprogram development skill. Use this skill when users need to create new miniprogram projects, develop miniprogram pages and components, integrate WeChat APIs (payment, authorization, sharing, etc.), or debug and troubleshoot miniprogram issues. This skill provides comprehensive guidance for uni-app framework development with WeChat miniprogram platform.
---

# uni-app 微信小程序开发技能

## 技能概述

This skill provides comprehensive guidance and resources for developing WeChat miniprogram applications using the uni-app framework. It covers project creation, component development, API integration, state management, and debugging.

## 何时使用此技能

Trigger this skill when users request:

- Creating new uni-app miniprogram projects
- Developing miniprogram pages, components, or features
- Integrating WeChat-specific APIs (login, payment, sharing, location, etc.)
- Implementing state management with Vuex
- Network request handling and API integration
- Debugging miniprogram issues or troubleshooting errors
- Optimizing miniprogram performance
- Configuring miniprogram settings and permissions

## 核心工作流程

### 1. 创建新项目

When creating a new uni-app miniprogram project:

1. Use the project template from `assets/project-template/package.json` as the base package.json
2. Create the standard uni-app directory structure:
   ```
   project-root/
   ├── pages/              # 页面文件
   ├── components/         # 组件文件
   ├── static/             # 静态资源
   ├── store/              # Vuex 状态管理
   ├── utils/              # 工具函数
   ├── api/                # API 接口
   ├── App.vue             # 应用入口
   ├── main.js             # 入口文件
   ├── manifest.json       # 应用配置
   ├── pages.json          # 页面路由配置
   └── uni.scss            # 全局样式变量
   ```

3. Configure `manifest.json` for WeChat miniprogram:
   ```json
   {
     "mp-weixin": {
       "appid": "",
       "setting": {
         "urlCheck": false,
         "es6": true,
         "minified": true
       },
       "usingComponents": true
     }
   }
   ```

4. Set up `pages.json` for page routing and tabBar configuration

### 2. 创建页面

When creating a new page:

1. Use the page template from `assets/project-template/page-template.vue`
2. Customize the template with appropriate lifecycle hooks (onLoad, onShow, onReady, etc.)
3. Add the page to `pages.json`:
   ```json
   {
     "pages": [
       {
         "path": "pages/yourpage/yourpage",
         "style": {
           "navigationBarTitleText": "页面标题"
         }
       }
     ]
   }
   ```

4. Implement page-specific logic, data, and methods
5. Style the page using scoped SCSS

### 3. 创建组件

When creating a new component:

1. Use the component template from `assets/project-template/component-template.vue`
2. Define component props, data, computed properties, and methods
3. Implement component lifecycle hooks if needed
4. Import and register the component in parent pages:
   ```javascript
   import CustomComponent from '@/components/CustomComponent.vue'

   export default {
     components: {
       CustomComponent
     }
   }
   ```

### 4. 网络请求处理

When implementing API calls:

1. Use the request utility from `assets/project-template/utils-request.js`
2. Create API modules in the `api/` directory:
   ```javascript
   import { get, post } from '@/utils/request'

   export const getUserInfo = (userId) => get('/api/user/' + userId)
   export const updateUser = (data) => post('/api/user/update', data)
   ```

3. Configure BASE_URL for different environments (development/production)
4. Handle authentication tokens in request interceptors
5. Implement proper error handling and user feedback

### 5. 状态管理

When implementing state management:

1. Use the Vuex store template from `assets/project-template/store-index.js`
2. Create module-based stores for complex applications:
   ```
   store/
   ├── index.js
   ├── modules/
   │   ├── user.js
   │   └── product.js
   ```

3. Access store in components:
   ```javascript
   import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

   export default {
     computed: {
       ...mapState(['userInfo']),
       ...mapGetters(['isLogin'])
     },
     methods: {
       ...mapMutations(['SET_USER_INFO']),
       ...mapActions(['login'])
     }
   }
   ```

### 6. 微信 API 集成

When integrating WeChat-specific APIs, refer to `references/uniapp-api-guide.md` for:

- **Login & Authorization**: Use `uni.login()` and handle user authorization
- **Payment**: Implement `uni.requestPayment()` with proper parameters
- **Sharing**: Configure `onShareAppMessage()` and `onShareTimeline()`
- **Location**: Use `uni.getLocation()` and `uni.chooseLocation()`
- **Media**: Handle image/video selection with `uni.chooseImage()` and `uni.chooseVideo()`
- **Scan Code**: Implement QR code scanning with `uni.scanCode()`

Always follow the API usage patterns documented in the reference guide.

### 7. 调试与问题排查

When debugging miniprogram issues:

1. Check console logs in WeChat DevTools
2. Verify API domain whitelist configuration in WeChat backend
3. Check network requests in the Network tab
4. Validate page routing and navigation stack depth (max 10 layers)
5. Review storage usage (max 10MB total, 1MB per key)
6. Test on real devices for permission-related issues
7. Use `uni.showToast()` for user feedback during debugging

### 8. 性能优化

When optimizing miniprogram performance:

- Use分包加载 (subpackages) for large applications
- Implement lazy loading for images and components
- Minimize setData frequency and data size
- Use computed properties instead of methods in templates
- Optimize long lists with virtual scrolling
- Compress images and use appropriate formats
- Remove unused code and dependencies

## 参考资料

### API 文档

Detailed API documentation and best practices are available in:
- `references/uniapp-api-guide.md` - Comprehensive uni-app and WeChat API guide

When implementing specific features, read the relevant sections from this reference file.

### 代码模板

Ready-to-use code templates are available in `assets/project-template/`:

- `page-template.vue` - Standard page structure
- `component-template.vue` - Reusable component structure
- `utils-request.js` - Network request utility with interceptors
- `store-index.js` - Vuex store with user authentication
- `package.json` - Project dependencies and scripts

Copy and customize these templates based on project requirements.

## 最佳实践原则

1. **Code Organization**: Maintain clear separation between pages, components, utils, and API modules
2. **Error Handling**: Always provide user feedback for errors using `uni.showToast()` or `uni.showModal()`
3. **Loading States**: Show loading indicators during async operations with `uni.showLoading()`
4. **Authentication**: Centralize token management in Vuex store and request interceptors
5. **Responsive Design**: Use rpx units for responsive layouts across different screen sizes
6. **Performance**: Minimize page depth, optimize images, and use subpackages for large apps
7. **WeChat Guidelines**: Follow WeChat miniprogram design and development guidelines
8. **Testing**: Test on both simulator and real devices before production deployment

## 常见配置

### pages.json 完整示例

```json
{
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
        "navigationBarTitleText": "首页"
      }
    }
  ],
  "tabBar": {
    "color": "#7A7E83",
    "selectedColor": "#3cc51f",
    "borderStyle": "black",
    "backgroundColor": "#ffffff",
    "list": [
      {
        "pagePath": "pages/index/index",
        "iconPath": "static/tabbar/home.png",
        "selectedIconPath": "static/tabbar/home-active.png",
        "text": "首页"
      },
      {
        "pagePath": "pages/user/user",
        "iconPath": "static/tabbar/user.png",
        "selectedIconPath": "static/tabbar/user-active.png",
        "text": "我的"
      }
    ]
  },
  "globalStyle": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "应用标题",
    "navigationBarBackgroundColor": "#F8F8F8",
    "backgroundColor": "#F8F8F8"
  },
  "subPackages": [
    {
      "root": "pagesA",
      "pages": [
        {
          "path": "detail/detail",
          "style": {
            "navigationBarTitleText": "详情"
          }
        }
      ]
    }
  ]
}
```

## 注意事项

- WeChat miniprogram requires HTTPS for all network requests
- Configure server domains in WeChat backend before production
- Test authorization flows on real devices (simulator may behave differently)
- Keep page navigation stack under 10 layers
- Monitor local storage usage (10MB limit)
- Follow WeChat's content and feature review guidelines
- Use official WeChat DevTools for development and debugging
