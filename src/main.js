import Vue from 'vue'
import App from './App'
import store from './store'
// 时间格式化
import './utils/monent'
// 原型方法
import './utils/prototype'
// 全局混入
import { mixins } from './utils/mixins'

// // 全局组件
// // import mImage from './components/m-image/index.nvue'
// // import mTextarea from './components/m-textarea/index'
// // import mVideo from './components/m-video/index'
// // import mScroll from './components/m-scroll/index.nvue'
// // import mLabel from './components/m-label/index.vue'
// // import mInput from './components/m-input/index.vue'
// // Vue.component('m-input', mInput)
// // Vue.component('m-label', mLabel)
// // Vue.component('m-scroll', mScroll)
// // Vue.component('m-textarea', mTextarea)
// Vue.component('m-image', mImage)
// Vue.component('m-video', mVideo)

Vue.mixin(mixins)
Vue.config.productionTip = false

new Vue({
  mpType: 'app',
  store,
  ...App
}).$mount()
