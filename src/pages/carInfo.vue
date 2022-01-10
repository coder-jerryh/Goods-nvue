<template>
  <div class='carInfo'>
    <ul class="ceils">
      <li v-for="(item, i) in info" :key="i">
        <h2>{{item.label}}</h2>
        <span>{{item.value}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      info: [
        {
          label: '车重',
          value: '1650kg'
        },
        {
          label: '额定容量',
          value: '52.86 Kwh'
        },
        {
          label: '工信部百公里能耗',
          value: '12.3 Kwh'
        },
        {
          label: '传动效率',
          value: '95%'
        }
      ]
    }
  },
  created () {},
  methods: {}
}
</script>


<style lang='scss' scoped>
  .carInfo{
    background: #f2f2f2;
    position: relative;
    padding: 30rpx;
    h1 {
      font-size: 32rpx;
      color: #888;
      font-weight: normal;
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
  }
</style>
