import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import PostDetails from '@/pages/postDetails/PostDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/PostDetails',
      name: 'PostDetails',
      component: PostDetails
    }
  ]
})
