<template>
  <div>
    <home-header></home-header>
    <home-content
      @onRefresh="handleRefresh"
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
      axios.get('static/post' + page + '.json')
      // axios.get('https://www.gameloveman.com/wp-json/wp/v2/posts?page=' + page + '')
        .then(this.getPostInfoSucc)
    },
    getPostInfoSucc (res) {
      res = res.data
      for (let i in res) {
        this.postList.push(res[i])
      }
      this.$store.commit('changePostList', this.postList)
      this.$store.commit('changeisLoading', false)
      console.log('修改store')
      this.loading = false
    },
    // 下一页翻页
    handlePageNext (page) {
      this.loading = true
      this.getPostInfo(page)
    },
    // 下拉刷新 将postList取值为空
    handleRefresh () {
      this.postList = []
      this.$store.commit('commitRefresh', 1)
      this.getPostInfo(1)
    }
  },
  mounted () {
    this.getPostInfo(this.$store.state.PageSize)
  }
}
</script>

<style scoped>

</style>
