<template>
  <div class="content">
    <div class="wrapper" ref="wrapper" v-show="showWrapper">
      <van-pull-refresh
        v-model="isLoading"
        loading-text="刷新中..."
        success-text="刷新成功"
        @refresh="onRefresh"
        offset="50"
      >
      <!-- <ul> -->
          <van-list
            class="list"
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            :error.sync="error"
            error-text="请求失败，点击重新加载"
            :immediate-check="check"
          >
          <div
          class="item border-bottom"
          v-for="item of this.postList"
          :key="item.id"
          @click="handlePostListClick(item)"
        >
        <router-link to="/PostDetails/">
            <div class="item-img-wrapper">
              <img class="item-img" :src="item.jetpack_featured_media_url">
            </div>
            <div class="item-info">
              <p class="item-title">{{item.title.rendered}}</p>
              <p class="item-time">{{item.date.split('T')[0]+' '+item.date.split('T')[1]}}</p>
              <p class="item-desc">{{item.excerpt.rendered}}</p>
            </div>
        </router-link>
        </div>
          </van-list>
        <!-- <li
          class="item border-bottom"
          v-for="item of this.$store.state.postList"
          :key="item.id"
          @click="handlePostListClick(item)"
        >
        <router-link to="/PostDetails/">
            <div class="item-img-wrapper">
              <img class="item-img" :src="item.jetpack_featured_media_url">
            </div>
            <div class="item-info">
              <p class="item-title">{{item.title.rendered}}</p>
              <p class="item-time">{{item.date.split('T')[0]+' '+item.date.split('T')[1]}}</p>
              <p class="item-desc">{{item.excerpt.rendered}}</p>
            </div>
        </router-link>
        </li>
        <van-button
          v-show="!loading"
          class="pagenext"
          @click="handlePageNext(1)"
          type="default"
          round
         >
          下一页
        </van-button>
        <van-button
          class="loding"
          color="#B17A7D"
          block v-show="loading"
          loading
          loading-text="加载中..."
        /> -->
      <!-- </ul> -->
    </van-pull-refresh>
    <div class="footer_zhanwei"></div>
    <van-loading v-show="InitLoading" class="InitLoading" size="24px" vertical>加载中...</van-loading>
  </div>
  <div class="error_zhanwei" v-show="!showWrapper">
    网络异常
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import error from '@/common/error.js'
export default {
  name: 'PostContent',
  data () {
    return {
      showWrapper: true,
      isLoading: false,
      InitLoading: true,
      loading: false,
      postList: [],
      finished: false,
      error: false,
      check: false
    }
  },
  methods: {
    getPostInfo (page) {
      // axios.get('static/post' + page + '.json')
      axios.get('https://www.gameloveman.com/wp-json/wp/v2/posts?page=' + page + '')
        .then(this.getPostInfoSucc)
        .catch((err) => {
          const {errCode, errMsg} = error.getErrMsg(err)
          console.log(errCode, errMsg)
          if (errCode === 404) {
            this.$toast.fail('已经全部加载完了')
            if (!this.postList.length) {
              this.showWrapper = false
            }
          } else {
            this.$toast.fail(errMsg)
            if (!this.postList.length) {
              this.showWrapper = false
            }
          }
          this.loading = false
          // this.finished = true
          this.InitLoading = false
          this.isLoading = false
          // console.log(err)
        })
    },
    getPostInfoSucc (res) {
      console.log(res.data)
      res = res.data
      for (let i in res) {
        this.postList.push(res[i])
      }
      this.$store.commit('changePostList', this.postList)
      // console.log('修改store:' + this.postList)
      // this.$toast('刷新成功')
      this.loading = false
      this.isLoading = false
    },
    // 下拉刷新 数据初始化
    onRefresh () {
      setTimeout(() => {
        this.postList = []
        this.$store.commit('commitRefresh', 1)
        this.getPostInfo(1)
      }, 1000)
    },
    handlePostListClick (item) {
      this.$store.commit('changePostDetails', item)
    },
    // 上拉加载
    onLoad () {
      this.InitLoading = false
      setTimeout(() => {
        console.log('加载')
        this.$store.commit('handlePageNext', 1)
        // this.loading = true
        this.getPostInfo(this.$store.state.PageSize)
      }, 1000)
    }
  },
  mounted () {
    error.getErrMsg(200)
    // setTimeout(() => {
    if (localStorage.postList) {
      if (JSON.parse(localStorage.postList).length) {
        this.postList = []
        this.postList = JSON.parse(localStorage.postList)
      } else {
        console.log(this.$store.state.PageSize)
        this.getPostInfo(this.$store.state.PageSize)
      }
    } else {
      console.log(this.$store.state.PageSize)
      this.getPostInfo(this.$store.state.PageSize)
    }
    // }, 1000)
  }
}
</script>

<style scoped>
  .error_zhanwei{
    position: absolute;
    top: 0.86rem;
    left: 0;
    right: 0;
    bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #5F524A;
    font-size: .6rem;
  }
  .wrapper{
    position: absolute;
    top: 1.2rem;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .list{
    position: relative;
    background: #ececea;
  }
  .item {
    padding: .2rem .1rem;
    border-bottom: 1px solid #5F524A;
  }
  .item-img-wrapper{
    overflow: hidden;
    height: 0;
    padding-bottom: 38%;
  }
    .item-img{
      width: 100%;
    }
  .item-info{
    padding: .1rem;
  }
    .item-title{
      line-height: .54rem;
      font-size: .32rem;
      color: #5F524A
    }
    .item-time{
      text-align: right;
      line-height: .5rem;
      color: #5F524A;
    }
    .item-desc{
      line-height: .4rem;
      color: #5F524A;
    }
  .pagenext{
    display: block;
    background: #B17A7D;
    color: #ffffff;
    margin: 0 auto;
  }
  .InitLoading{
    margin-top: 60%;
  }
  .footer_zhanwei{
    height: 1rem;
  }
  /* .van-pull-refresh{
    margin-bottom: 1rem;
  } */
</style>
