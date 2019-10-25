<template>
  <div>
    <home-header></home-header>
     <!-- <keep-alive> -->
      <post-content></post-content>
     <!-- </keep-alive> -->
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import PostContent from './components/Content'
export default {
  name: 'Post',
  components: {
    HomeHeader,
    PostContent
  }
}
</script>

<style scoped>

</style>
