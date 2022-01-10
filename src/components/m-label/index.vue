<template>
  <label class="m-label" :class="{noMust}"><img class="mustIcon" src='../../assets/image/must.png'/><slot/></label>
</template>

<script>
export default {
  props: {
    noMust: Boolean
  }
}
</script>

<style lang='scss' scoped>
  label {
    width: 165rpx;
    margin-right: 30rpx;
    display: block;
    color: #666666;
    font-size: 30rpx;
    @extend .y-center;
    img {
      width: 20rpx;
      height: 20rpx;
      margin-right: 20rpx;
    }
    &.noMust {
      margin-left: 40rpx;
      margin-right: -10rpx;
      img {
        display: none;
      }
    }
  }
</style>
