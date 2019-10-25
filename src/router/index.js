import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/home/Home'
import PostDetails from '@/pages/postDetails/PostDetails'
import Post from '@/pages/post/post'
import Time from '@/pages/time/Time'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    {
      path: '/',
      name: 'Post',
      component: Post
    },
    {
      path: '/PostDetails',
      name: 'PostDetails',
      component: PostDetails
    },
    {
      path: '/time',
      name: 'Time',
      component: Time
    }
  ]
})
