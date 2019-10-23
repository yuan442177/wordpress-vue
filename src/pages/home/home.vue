<template>
  <div>
    <home-header></home-header>
    <home-content
      @refresh="handleRefresh"
      @pagenext="handlePageNext"
      :loading="loading"
    ></home-content>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeContent from './components/Content'
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      postList: [],
      loading: true
    }
  },
  components: {
    HomeHeader,
    HomeContent
  },
  methods: {
    getPostInfo (page) {
      console.log(page)
      // axios.get('static/post' + page + '.json')
      axios.get('https://www.gameloveman.com/wp-json/wp/v2/posts?page=' + page + '')
        .then(this.getPostInfoSucc)
    },
    getPostInfoSucc (res) {
      res = res.data
      console.log(this.$store.state.postList)
      for (let i in res) {
        console.log(res[i])
        this.postList.push(res[i])
      }
      this.$store.commit('changePostList', this.postList)
      this.loading = false
    },
    // 下一页翻页
    handlePageNext (page) {
      this.loading = true
      this.getPostInfo(page)
    },
    // 下拉刷新 将postList取值为空
    handleRefresh (page) {
      this.postList = []
      this.loading = true
      this.getPostInfo(page)
    }
  },
  mounted () {
    this.getPostInfo(this.$store.state.PageSize)
  }
}
</script>

<style scoped>

</style>
