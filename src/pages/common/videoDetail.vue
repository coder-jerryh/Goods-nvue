<template>
  <div class="videoDetail" @click="clickControl">
    <video
      loop
      :class="{showVideo}"
      id='video'
      autoplay
      :src="src"
      :show-fullscreen-btn='false'
      @loadedmetadata='loadSuccess'
      :show-center-play-btn='false'
      :show-play-btn='false'
      @play='play'
      @pause='pause'
      :direction='0'
    />
    <div class="control" :class="{hidden: playFlag}">
      <i class="iconfont icon-play"></i>
      <!-- <span class="duration">{{duration}}</span> -->
    </div>
    <i class="loading" v-if="!showVideo"></i>
  </div>
</template>

<script>
export default {
  data () {
    return {
      src: '',
      playFlag: true,
      duration: '00:00',
      initialTime: 0,
      showVideo: false,
      videoCtx: null
    }
  },
  onLoad (options) {
    uni.showNavigationBarLoading()
    this.src = options.src
    this.videoCtx = wx.createVideoContext('video', this)
    uni.setNavigationBarTitle({
      title: options.title
    })
  },
  methods: {
    play () {
      this.playFlag = true
    },
    pause () {
      this.playFlag = false
    },
    clickControl () {
      if (this.playFlag) {
        this.videoCtx.pause()
      } else {
        this.videoCtx.play()
      }
    },
    loadSuccess (e) {
      this.duration = this.$dateFilter(Math.round(e.detail.duration) * 1000, 'mm:ss')
      this.showVideo = true
      uni.hideNavigationBarLoading()
    }
  }
}
</script>

<style lang='scss' scoped>
  .videoDetail {
    background: #000;
    height: 100vh;
    @extend .xy-center;
    position: relative;
    video{
      height: 100vh;
      width: 100%;
      opacity: 0;
      transition: opacity ease-in-out .3s;
      font-size: 0;
      margin-top: -150rpx;
      &.showVideo {
        opacity: 1;
      }
    }
    .loading {
      margin-top: -150rpx;
      @include loadingIcon(#ddd, 50rpx);
    }
    .control{
      margin-top: -150rpx;
      @extend .xy-center;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      color: rgba(255, 255, 255, 0.8);
      opacity: 1;
      visibility: visible;
      transition: all ease .15s;
      pointer-events: none;
      .icon-play{
        font-size: 70rpx;
      }
      .duration {
        display: inline-block;
        margin-top: 20rpx;
        font-size: 30rpx;
      }
      &.hidden{
        visibility: hidden;
        opacity: 0;
      }
    }
  }
</style>
