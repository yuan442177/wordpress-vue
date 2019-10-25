<template>
  <div id="header" class="header">
    <van-nav-bar
      fixed
      title="gameloveman"
      right-text="返回顶部"
      left-arrow
      @click-left="handleBack"
      @click-right="backTop"
    />
    <!-- <div @click="handlePostListClick">
      <span class="header-back" v-if="showBack" @click="handleBack">{{Back}}</span>
      ganmeloveman
    </div> -->
  </div>
</template>

<script>
// import { NavBar } from 'vant'
export default {
  name: 'HomeHeader',
  props: {
    headerTitle: String,
    showBack: Boolean
  },
  // components: {
  //   [NavBar.name]: NavBar
  // },
  data () {
    return {
      Back: '<返回'
    }
  },
  methods: {
    handlePostListClick (a) {
      console.log(a)
    },
    handleBack () {
      this.$router.go(-1)
    },
    backTop () {
      document.documentElement.scrollTop = document.body.scrollTop = 0
    }
  }
}
</script>

<style scoped>
  .header{
    position: relative;
    overflow: hidden;
    height: .86rem;
    line-height: .86rem;
    text-align: center;
    color: #ffffff;
    background: #2D241F;
  }
    .header-back{
      position: absolute;
      left: .1rem;
      top: 0;
    }
</style>
