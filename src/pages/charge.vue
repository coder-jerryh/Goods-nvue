<template>
  <div class='charge'>
    <ul class="ceils">
      <li>
        <h2>充电桩品牌偏好</h2>
        <switch v-model="switchFlag" color='#589ef8' @change="switchFlag = !switchFlag"/>
      </li>
    </ul>
    <template v-if="switchFlag">
      <h1>充电桩品牌选择</h1>
      <ul class="ceils">
        <li v-for="(item, i) in list" :key="i">
          <h2>{{item.label}}</h2>
          <m-checkbox v-model="item.value"/>
        </li>
      </ul>
    </template>
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
          label: '特斯拉',
          value: false
        },
        {
          label: '特来电',
          value: false
        },
        {
          label: '国家电网',
          value: false
        },
        {
          label: '普天',
          value: false
        },
        {
          label: '星星充电',
          value: false
        },
        {
          label: '许继',
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
  .charge{
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
      overflow: hidden;
      padding: 0 30rpx;
      border-radius: 8rpx;
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
        i {
          margin-left: auto;
          color: #ccc;
          font-size: 28upx;
          position: relative;
          right: -2upx;
          font-weight: bold;
        }
        switch {
          margin-right: -10rpx;
        }
        /deep/ .m-checkbox {
          flex: 1;
          justify-content: flex-end;
        }
      }
    }
  }
</style>
