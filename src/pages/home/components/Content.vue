<template>
  <div class="content">
    <div class="wrapper" ref="wrapper">
      <ul>
        <li
          class="item border-bottom"
          v-for="item of this.$store.state.postList"
          :key="item.id"
          @click="handlePostListClick(item)"
        >
          <div class="item-img-wrapper">
            <img class="item-img" :src="item.jetpack_featured_media_url">
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title.rendered}}</p>
            <p class="item-time">{{item.date.split('T')[0]+' '+item.date.split('T')[1]}}</p>
            <p class="item-desc">{{item.excerpt.rendered}}</p>
          </div>
        </li>
        <div v-show="!loading" class="pagenext" @click="handlePageNext(1)">下一页</div>
      </ul>
  </div>
   <!-- v-show="loading" -->
    <div v-show="loading" class="loading">加载中...</div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'HomeContent',
  props: {
    loading: Boolean
  },
  methods: {
    handlePostListClick (item) {
      // console.log(item)
      this.$store.commit('changePostDetails', item)
      this.$router.push('/PostDetails')
    },
    handlePageNext (a) {
      this.$store.commit('handlePageNext', a)
      this.$emit('pagenext', this.$store.state.PageSize)
    }
  },
  mounted () {
    // console.log(this.$store.state.postList)
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true,
      pullDownRefresh: {
        threshold: 50,
        stop: 20
      }
    })
    this.scroll.on('pullingDown', () => {
      // console.log('123')
      // this.handlePageNext(1)
      this.scroll.finishPullDown()
      // this.$store.state.PageSize = 1
      this.$store.commit('handleRefresh', 1)
      console.log('refresh' + this.$store.state.postList)
      this.$emit('refresh', this.$store.state.PageSize)
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
  .item {
    padding: .2rem .1rem
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
    }
    .item-time{
      text-align: right;
      line-height: .5rem;
      color: #cccccc;
    }
    .item-desc{
      line-height: .4rem;
      color: #cccccc;
    }
  .pagenext{
    width: 6rem;
    line-height: .9rem;
    text-align: center;
    font-size: .5rem;
    border: .06rem solid #eeeeee;
    margin: 0 auto;
  }
  /* .content{
    position: relative;
  } */
  .loading{
    text-align: center;
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
    background: rgba(0, 0, 0, 0.6);
    color: #ffffff;
  }
</style>
