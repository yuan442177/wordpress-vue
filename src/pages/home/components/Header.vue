<template>
  <div class="header">
    <div @click="handlePostListClick">
      <span class="header-back" v-if="showBack" @click="handleBack">{{Back}}</span>
      ganmeloveman
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    headerTitle: String,
    showBack: Boolean
  },
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
    background: #ababab;
  }
    .header-back{
      position: absolute;
      left: .1rem;
      top: 0;
    }
</style>
