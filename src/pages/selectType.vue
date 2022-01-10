<template>
  <!-- 选择 -->
  <section class="selectType">
    <div class="title">
      <h2>推荐算法选择</h2>
      <span>收起</span>
    </div>
    <ul>
      <li>
        <label>算法推荐</label>
      </li>
      <li>
        <ul>
          <li>速度最快</li>
          <li>佛系出行</li>
          <li>费用最低</li>
          <li>路程最短</li>
        </ul>
      </li>
      <li>个性化推荐</li>
    </ul>
  </section>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      longitude: 0,
      latitude: 0,
      markers: []
    }
  },
  created () {
    const that = this
    uni.getLocation({
      type: 'wgs84',
      success (res) {
        console.log(res)
        res.latitude = 30.54709716796875
        res.longitude = 104.0793739149306
        that.longitude = res.longitude
        that.latitude = res.latitude
        that.markers = [
          {
            latitude: res.latitude,
            longitude: res.longitude,
            width: 25, // 宽
            height: 25, // 高
            callout: {
              // 自定义标记点上方的气泡窗口 点击有效
              // content: res.address, //文本
              color: '#ffffff', // 文字颜色
              fontSize: 14, // 文本大小
              borderRadius: 2, // 边框圆角
              bgColor: '#00c16f', // 背景颜色
              display: 'ALWAYS', // 常显
              padding: 5 // 气泡窗口的内间距
            }
          }
        ]
        that.$forceUpdate()
      }
    })
  },
  methods: {}
}
</script>


<style lang='scss' scoped>
  .selectType {
    margin: 20rpx;
    border-radius: 12rpx;
    padding: 20rpx;
    .title {
      margin-bottom: 12rpx;
      @extend .y-center;
      h2 {
        font-size: 30rpx;
        font-weight: bold;
        flex: 1;
      }
      image {
        width: 40rpx;
        height: 40rpx;
        margin-right: 10rpx;
      }
      span {
        font-size: 26rpx;
        color: #466cd7;
      }
    }
    >ul {
      li {
        border-radius: 12rpx;
        background: #f4f4f4;
        font-size: 28rpx;
        &:first-child {
          image {
            width: 60rpx;
            height: 60rpx;
          }
          label {
            font-weight: bold;
          }
        }
      }
    }
  }
</style>
