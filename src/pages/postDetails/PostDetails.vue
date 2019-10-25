<template>
  <div>
    <home-header :showBack="showBack"></home-header>
    <div class="wrapper" ref="wrapper" :key="this.$store.state.PostID">
      <div>
        <header>
          <h1 id="title" v-text="this.$store.state.PostTitle" class="border-topbottom"></h1>
        </header>
        <article v-html="this.$store.state.PostContent"></article>
      </div>
    </div>
  </div>
</template>

<script>
// import Bscroll from 'better-scroll'
import HomeHeader from './components/Header'
export default {
  name: 'PostDetails',
  data () {
    return {
      headerTitle: this.$store.state.PostTitle,
      showBack: true,
      postid: this.$route.query.postid
    }
  },
  components: {
    HomeHeader
  },
  methods: {
    backTop () {
      document.documentElement.scrollTop = document.body.scrollTop = 0
    }
  },
  mounted () {
    // this.scroll = new Bscroll(this.$refs.wrapper, {
    //   click: true
    // })
    console.log('123')
    document.documentElement.scrollTop = document.body.scrollTop = 0
  }
}
</script>

<style scoped>
  .wrapper{
    /* overflow: hidden; */
    position: absolute;
    top: 1.2rem;
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
