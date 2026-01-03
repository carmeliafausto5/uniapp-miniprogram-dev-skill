# uni-app 微信小程序开发技能

[![GitHub stars](https://img.shields.io/github/stars/carmeliafausto5/uniapp-miniprogram-dev-skill?style=social)](https://github.com/carmeliafausto5/uniapp-miniprogram-dev-skill/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/carmeliafausto5/uniapp-miniprogram-dev-skill?style=social)](https://github.com/carmeliafausto5/uniapp-miniprogram-dev-skill/network/members)
[![GitHub issues](https://img.shields.io/github/issues/carmeliafausto5/uniapp-miniprogram-dev-skill)](https://github.com/carmeliafausto5/uniapp-miniprogram-dev-skill/issues)
[![License](https://img.shields.io/github/license/carmeliafausto5/uniapp-miniprogram-dev-skill)](LICENSE)

> 为 Claude Code 提供的高级 uni-app 微信小程序开发技能包

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=carmeliafausto5/uniapp-miniprogram-dev-skill&type=Date)](https://star-history.com/#carmeliafausto5/uniapp-miniprogram-dev-skill&Date)

## 📖 简介

这是一个专为 [Claude Code](https://claude.com/claude-code) 设计的技能包，提供全面的 uni-app 微信小程序开发指导和资源。通过这个技能，Claude 可以帮助你：

- 🚀 快速创建新的 uni-app 微信小程序项目
- 📦 开发小程序页面、组件和功能模块
- 🔌 集成微信 API（登录、支付、分享、定位等）
- 🛠️ 调试和排查小程序开发问题
- ⚡ 优化小程序性能
- 📱 遵循微信小程序最佳实践

## ✨ 特性

### 📚 完整的技术文档

- **API 指南**：详细的 uni-app 和微信小程序 API 使用说明
- **最佳实践**：网络请求封装、状态管理、性能优化等
- **常见问题**：开发中常遇到的问题及解决方案

### 🎨 现成的代码模板

- **页面模板**：包含完整生命周期的页面结构
- **组件模板**：可复用的组件开发模板
- **网络请求工具**：带拦截器的请求封装
- **状态管理**：Vuex store 模板
- **项目配置**：package.json 和依赖配置

### 🔧 开发工作流

- 项目初始化指导
- 页面和组件开发流程
- API 集成步骤
- 调试技巧和问题排查
- 性能优化建议

## 📦 安装

### 前置要求

- [Claude Code](https://github.com/anthropics/claude-code) CLI 工具

### 安装步骤

1. 下载技能包：

```bash
# 下载最新版本
wget https://github.com/carmeliafausto5/uniapp-miniprogram-dev-skill/archive/refs/heads/main.zip

# 或使用 git clone
git clone https://github.com/carmeliafausto5/uniapp-miniprogram-dev-skill.git
```

2. 安装到 Claude Code：

```bash
# 复制到 Claude 技能目录
cp -r uniapp-miniprogram-dev-skill ~/.claude/skills/

# 或者在 Windows 上
xcopy uniapp-miniprogram-dev-skill %USERPROFILE%\.claude\skills\ /E /I
```

3. 重启 Claude Code 或重新加载技能：

```bash
claude code --reload-skills
```

## 🚀 使用方法

安装技能后，Claude Code 会在以下场景自动激活此技能：

### 创建新项目

```
你: 帮我创建一个 uni-app 微信小程序项目

Claude: [自动使用此技能，提供项目结构和配置]
```

### 开发页面

```
你: 创建一个商品详情页面

Claude: [使用页面模板，包含生命周期、数据绑定等]
```

### 集成微信 API

```
你: 实现微信登录功能

Claude: [参考 API 指南，提供完整的登录实现]
```

### 问题排查

```
你: 小程序网络请求失败了

Claude: [提供调试步骤和常见问题解决方案]
```

## 📂 技能结构

```
uniapp-miniprogram-dev/
├── SKILL.md                           # 技能主文件（核心工作流程）
├── README.md                          # 本文件
├── references/                        # 参考文档
│   └── uniapp-api-guide.md           # uni-app API 完整指南
└── assets/                            # 代码模板资源
    └── project-template/
        ├── package.json               # 项目依赖配置
        ├── page-template.vue          # 页面开发模板
        ├── component-template.vue     # 组件开发模板
        ├── utils-request.js           # 网络请求封装
        └── store-index.js             # Vuex 状态管理模板
```

## 📖 技能内容概览

### 核心工作流程

1. **创建新项目**
   - 项目目录结构
   - manifest.json 配置
   - pages.json 路由配置

2. **页面开发**
   - 页面模板使用
   - 生命周期配置
   - 页面路由注册

3. **组件开发**
   - 组件模板
   - Props 定义
   - 组件注册

4. **网络请求**
   - 请求工具封装
   - 拦截器配置
   - API 模块化

5. **状态管理**
   - Vuex store 配置
   - 模块化管理
   - 数据持久化

6. **微信 API 集成**
   - 登录授权
   - 微信支付
   - 分享功能
   - 地理位置
   - 媒体选择
   - 扫码功能

7. **调试与优化**
   - 调试技巧
   - 性能优化
   - 常见问题

### API 文档涵盖

- ✅ 页面生命周期
- ✅ 路由导航
- ✅ 数据请求
- ✅ 本地存储
- ✅ 界面交互
- ✅ 媒体选择
- ✅ 微信登录授权
- ✅ 微信支付
- ✅ 分享功能
- ✅ 扫码功能
- ✅ 地理位置

### 代码模板包含

- ✅ 完整的项目配置
- ✅ 页面开发模板
- ✅ 组件开发模板
- ✅ 网络请求封装（支持拦截器、token 管理、错误处理）
- ✅ Vuex 状态管理（用户登录状态示例）

## 🛠️ 技术栈

- **框架**: uni-app (Vue 2)
- **平台**: 微信小程序
- **状态管理**: Vuex
- **样式**: SCSS
- **开发工具**: HBuilderX / 微信开发者工具

## 📝 示例场景

### 场景 1: 快速启动新项目

当你需要创建一个新的 uni-app 小程序项目时，Claude 会：
1. 使用标准项目结构
2. 配置 manifest.json 和 pages.json
3. 设置 Vuex store
4. 配置网络请求工具
5. 提供示例页面

### 场景 2: 实现微信登录

Claude 会参考 API 指南，提供：
1. uni.login() 调用示例
2. 后端接口对接代码
3. Token 存储和管理
4. 登录状态维护
5. 错误处理

### 场景 3: 优化小程序性能

Claude 会根据最佳实践建议：
1. 分包加载配置
2. 图片懒加载实现
3. 长列表优化
4. 请求优化
5. 代码分割

## 🤝 贡献

欢迎贡献！如果你有改进建议或发现问题，请：

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🙏 致谢

- 感谢 [Claude Code](https://claude.com/claude-code) 团队提供的强大工具
- 感谢 [uni-app](https://uniapp.dcloud.io/) 团队提供的优秀框架
- 感谢所有贡献者和使用者

## 📞 联系方式

- 问题反馈: [GitHub Issues](https://github.com/carmeliafausto5/uniapp-miniprogram-dev-skill/issues)
- 功能建议: [GitHub Discussions](https://github.com/carmeliafausto5/uniapp-miniprogram-dev-skill/discussions)

## 🔗 相关链接

- [Claude Code 官方文档](https://github.com/anthropics/claude-code)
- [uni-app 官方文档](https://uniapp.dcloud.io/)
- [微信小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)
- [Vuex 官方文档](https://vuex.vuejs.org/zh/)

---

⭐ 如果这个技能对你有帮助，请给个 Star 支持一下！

🤖 Generated with [Claude Code](https://claude.com/claude-code)
