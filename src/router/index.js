import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/homepage/HomePage'
import WmVideo from '@/components/wmvideo/WmVideo'
import FindPerson from '@/components/findperson/FindPerson'
import SmallVideo from '@/components/smallvideo/SmallVideo'
import MyPage from '@/components/my/MyPage'
import ArticleItem from '@/components/ArticleItem'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/wmvideo',
      name: 'WmVideo',
      component: WmVideo
    },
    {
      path: '/findperson',
      name: 'FindPerson',
      component: FindPerson
    },
    {
      path: '/smallvideo',
      name: 'SmallVideo',
      component: SmallVideo
    },
    {
      path: '/mypage',
      name: 'MyPage',
      component: MyPage
    },
    {
      path:'/article/:id',
      name:'ArticleItem',
      props:true,
      component:ArticleItem
    },
    {
      path:'/search',
      name:'Search',
      component:Search
    }
  ]
})
