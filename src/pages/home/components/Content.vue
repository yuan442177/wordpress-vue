<template>
  <div class="content">
    <div class="wrapper" ref="wrapper">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <ul>
        <li
          class="item border-bottom"
          v-for="item of this.$store.state.postList"
          :key="item.id"
          @click="handlePostListClick(item)"
        >
        <router-link to="/PostDetails/'+ item.id +'">
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
        />
      </ul>
    </van-pull-refresh>
  </div>
   <!-- v-show="loading" -->
    <!-- <div v-show="loading" class="loading">加载中...</div> -->
  </div>
</template>

<script>
// import Bscroll from 'better-scroll'
// import { Button } from 'vant'
export default {
  name: 'HomeContent',
  data () {
    return {
      asd: false,
      isLoading: false
    }
  },
  props: {
    loading: Boolean
  },
  watch: {
    asd () {
      if (this.asd === false) {
        console.log('asd:' + this.asd)
      } else {
        console.log('asda:' + this.asd)
      }
    }
  },
  methods: {
    handlePostListClick (item) {
      this.$store.commit('changePostDetails', item)
    },
    handlePageNext (a) {
      this.$store.commit('handlePageNext', a)
      this.$emit('pagenext', this.$store.state.PageSize)
    },
    onRefresh () {
      this.$emit('onRefresh')
      if (this.$store.state.isLoading === false) {
        this.isLoading = this.$store.state.isLoading
        console.log('this.$store.state.isLoading:' + this.$store.state.isLoading)
        this.$store.state.isLoading = true
      } else {
        console.log('this.$store.state.isLoadinga:' + this.$store.state.isLoading)
        this.$store.state.isLoading = false
      }
      // console.log(this.$store.state.isLoading)
      // console.log(this.loadingtwo)
      // this.loadingtwo = false
    }
  }
}
</script>

<style scoped>
  .wrapper{
    /* overflow: hidden; */
    position: absolute;
    top: 0.86rem;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .wrapper ul{
    position: relative;
     background: #ececea;
  }
  .item {
    padding: .1rem;
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
  /* .content{
    position: relative;
  } */
  .loading{
    /* text-align: center;
    width: 50%;
    height: 2rem;
    line-height: 2rem;
    border-radius: .5rem;
    overflow: auto;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6); */
    color: #5F524A;
  }
</style>
