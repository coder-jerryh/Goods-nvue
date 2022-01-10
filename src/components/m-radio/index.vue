<template>
  <ul class="m-radio">
    <li v-for="(label, val) in option" :key="val" @click="change(val, label)" :class="{active: value == val}">
      <img class="selected" src="./image/selected.png" alt="">
      <img class="select" src="./image/select.png" alt="">
      <span>{{label}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    option: Object,
    value: Number,
    disabled: Boolean
  },
  data () {
    return {
    }
  },
  created () {},
  methods: {
    change (value, label) {
      if (this.disabled) return
      this.$emit('input', value)
      this.$emit('change', label)
    }
  }
}
</script>

<style lang='scss' scoped>
  .m-radio {
    @extend .y-center;
    flex: 1;
    li {
      @extend .y-center;
      margin-right: 60rpx;
      img {
        font-size: 36rpx;
        margin-right: 12rpx;
        width: 30rpx;
        height: 30rpx;
        &.selected {
          display: none;
        }
      }
      span {
        font-size: 30rpx;
        color: #333;
      }
      &.active {
        .select {
          display: none;
        }
        .selected, span {
          display: inline-block;
        }
      }
    }
  }
</style>
