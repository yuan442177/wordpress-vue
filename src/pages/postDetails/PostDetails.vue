<template>
  <div>
    <home-header :showBack="showBack"></home-header>
    <div class="wrapper" ref="wrapper">
      <div>
        <header>
          <h1 v-text="this.$store.state.PostTitle" class="border-topbottom"></h1>
        </header>
        <article v-html="this.$store.state.PostContent"></article>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import HomeHeader from './../home/components/Header'
export default {
  name: 'PostDetails',
  data () {
    return {
      headerTitle: this.$store.state.PostTitle,
      showBack: true
    }
  },
  components: {
    HomeHeader
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true
    })
  }
}
</script>

<style scoped>
  .wrapper{
    overflow: hidden;
    position: absolute;
    top: 0.86rem;
    left: 0;
    right: 0;
    bottom: 0;
  }
  h1{
    font-size: .5rem;
    padding: .2rem .1rem
  }
  article{
    padding: .2rem .1rem;
    line-height: .5rem
  }
</style>

<style>
  img {
    width: 100%;
  }
</style>
