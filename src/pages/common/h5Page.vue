<template>
  <web-view :webview-styles="webviewStyles" :src="url" />
</template>

<script>
export default {
  data () {
    return {
      url: '',
      webviewStyles: {
        progress: {
          color: '#FBAF02'
        }
      }
    }
  },
  computed: {},
  onLoad (options) {
    this.url = options.outUrl
    uni.setNavigationBarTitle({
      title: options.title
    })
    uni.showLoading({
      title: '正在加载',
      mask: true
    })
    setTimeout(() => {
      uni.hideLoading()
    }, 1500)
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped>
</style>
