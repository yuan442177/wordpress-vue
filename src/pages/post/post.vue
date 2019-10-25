<template>
  <div>
    <home-header></home-header>
     <!-- <keep-alive> -->
      <post-content></post-content>
     <!-- </keep-alive> -->
     <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import PostContent from './components/Content'
import HomeFooter from '@/pages/common/Footer'
export default {
  name: 'Post',
  components: {
    HomeHeader,
    PostContent,
    HomeFooter
  }
}
</script>

<style scoped>

</style>
