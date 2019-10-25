<template>
  <div class="footer">
    <van-tabbar inactive-color="#ffffff" active-color="#B17A7D" v-model="active" :safe-area-inset-bottom="safeAreaInsetBottom">
      <van-tabbar-item @click="goIndex" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item @click="goSet" icon="setting-o">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      active: 0,
      safeAreaInsetBottom: true
    }
  },
  methods: {
    goIndex () {
      this.$toast('你已在首页')
    },
    goSet () {
      this.$toast('暂未开发')
    }
  }
}
</script>

<style scoper>
  .footer{
    height: 1rem;
  }
</style>
<style>
  .van-tabbar--safe-area-inset-bottom{
    background: #2D241F;
  }
</style>
