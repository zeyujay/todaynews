<template>
  <div id="app">
    <!-- <transition name="ltor"> -->
      <keep-alive>
        <router-view/>
      </keep-alive>
    <!-- </transition> -->
      <Footer-Bar></Footer-Bar>
  </div>
</template>
<script>
import HomePage from './components/homepage/HomePage.vue'
import WmVideo from './components/wmvideo/WmVideo.vue'
import FindPerson from './components/findperson/FindPerson.vue'
import SmallVideo from './components/smallvideo/SmallVideo.vue'
import MyPage from './components/my/MyPage.vue'
import FooterBar from './components/FooterBar.vue'
export default {
  name: 'App',
  components:{
    HomePage,
    WmVideo,
    FindPerson,
    SmallVideo,
    MyPage,
    FooterBar

  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  /* position: relative; */
}
</style>
