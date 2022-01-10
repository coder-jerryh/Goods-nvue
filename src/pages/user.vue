<template>
  <div class='user'>
    <ul class="ceils">
      <li>
        <h2>最低容忍SOC</h2>
        <span>10</span>
      </li>
      <li>
        <h2>每次充电SOC</h2>
        <span>90</span>
      </li>
    </ul>
    <h1>周边POI设置</h1>
    <section class="poiSetting">
      <m-checkbox v-for="(item, i) in list" :key="i" v-model="item.value" :label='item.label'/>
    </section>
  </div>
</template>

<script>
import mCheckbox from '../components/m-checbox'
export default {
  components: {
    mCheckbox
  },
  data () {
    return {
      switchFlag: false,
      list: [
        {
          label: '美食',
          value: false
        },
        {
          label: '酒店',
          value: false
        },
        {
          label: '景点',
          value: false
        },
        {
          label: '银行',
          value: false
        },
        {
          label: '加油站',
          value: false
        },
        {
          label: '地铁站',
          value: false
        },
        {
          label: '电影院',
          value: false
        }
      ]
    }
  },
  created () {},
  methods: {}
}
</script>


<style lang='scss' scoped>
  .user{
    position: relative;
    padding: 30rpx;
    h1 {
      font-size: 28rpx;
      color: #888;
      font-weight: normal;
      margin: 25rpx 0;
    }
    .ceils {
      background: #fff;
      padding: 0 30rpx;
      border-radius: 8rpx;
      overflow: hidden;
      li {
        &:not(:first-child) {
        }
        width: 100%;
        @extend .y-center;
        justify-content: space-between;
        padding: 30rpx 0;
        height: 100rpx;
        h2 {
          font-weight: normal;
          font-size: 30upx;
          color: #333;
        }
        span {
          margin-left: auto;
          color: #999;
          font-size: 28upx;
        }
      }
    }
    .poiSetting {
      background: #fff;
      padding: 30rpx 30rpx 10rpx;
      border-radius: 8rpx;
      overflow: hidden;
      @extend .y-center;
      flex-wrap: wrap;
      .m-checkbox {
        margin-right: 50rpx;
        margin-bottom: 20rpx;
        width: fit-content;
      }
    }
  }
</style>
