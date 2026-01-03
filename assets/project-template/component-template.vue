<template>
  <view class="custom-component">
    <slot></slot>
  </view>
</template>

<script>
export default {
  name: 'CustomComponent',

  props: {
    // 组件属性
    propName: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      // 组件数据
    }
  },

  computed: {
    // 计算属性
  },

  watch: {
    // 监听器
  },

  methods: {
    // 组件方法
  },

  mounted() {
    // 组件挂载完成
  }
}
</script>

<style lang="scss" scoped>
.custom-component {
  /* 组件样式 */
}
</style>
