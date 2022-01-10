<template>
  <div class='setting'>
    <h1>基础设置</h1>
    <ul class="ceils">
      <li @click="$toUrl(item.url)" v-for="(item, i) in menu" :key="i">
        <h2>{{item.label}}</h2>
        <i class="iconfont icon-you"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      menu: [
        {
          label: '充电偏好',
          url: '/pages/charge'
        },
        {
          label: '车辆参数',
          url: '/pages/carInfo'
        },
        {
          label: '用户设置',
          url: '/pages/user'
        }
      ]
    }
  },
  created () {},
  methods: {}
}
</script>


<style lang='scss' scoped>
  .setting{
    background: #f2f2f2;
    position: relative;
    padding: 30rpx;
    h1 {
      font-size: 32rpx;
      color: #888;
      font-weight: normal;
    }
    .ceils {
      margin-top: 20upx;
      background: #fff;
      padding: 0 30rpx;
      border-radius: 8rpx;
      overflow: hidden;
      li {
        &:not(:first-child) {
        }
        width: 100%;
        @extend .y-center;
        padding: 30rpx 0;
        height: 100rpx;
        h2 {
          font-weight: normal;
          font-size: 30upx;
          color: #333;
        }
        i {
          margin-left: auto;
          color: #ccc;
          font-size: 28upx;
          position: relative;
          right: -2upx;
          font-weight: bold;
        }
        &:active {
          opacity: .7;
        }
      }
    }
  }
</style>
