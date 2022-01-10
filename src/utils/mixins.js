import { mapMutations, mapActions, mapState, mapGetters } from 'vuex'
export const mixins = {
  computed: {
    ...mapState(['userInfo', 'shareInfo']),
    ...mapGetters(['isLogin']),
    shareTitle () {
      return `${this.userInfo.nickname || ''}邀请你使用同城圈`
    }
  },
  methods: {
    ...mapActions(['getUserInfo']),
    ...mapMutations(['setUserInfo', 'setShare'])
  }
}
