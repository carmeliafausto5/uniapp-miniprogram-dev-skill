<template>
  <view class="container">
    <view class="header">
      <text class="title">{{ title }}</text>
    </view>

    <view class="content">
      <!-- 页面内容 -->
      <text>欢迎使用 uni-app</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: '页面标题'
    }
  },

  onLoad(options) {
    // 页面加载
    console.log('页面参数：', options)
  },

  onShow() {
    // 页面显示
  },

  onReady() {
    // 页面渲染完成
  },

  methods: {
    // 页面方法
    handleClick() {
      uni.showToast({
        title: '点击成功',
        icon: 'success'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  background-color: #f5f5f5;

  .header {
    padding: 30rpx;
    background-color: #fff;

    .title {
      font-size: 36rpx;
      font-weight: bold;
      color: #333;
    }
  }

  .content {
    padding: 30rpx;
  }
}
</style>
