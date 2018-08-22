<template lang="html">
  <div class="content" :style="{transform:'translate(0,'+scroll+'rem)',
  transition:'all '+scrollend+'s'}"
  v-on:touchstart="touchStart($event)"
  v-on:touchmove="touchMove($event)"
  v-on:touchend="touchEnd($event)">
      <div class="itemlist">
        <News-Item v-for="(item,key) in contentList" :newsitem="item" :key="key"></News-Item>
      </div>
  </div>
</template>

<script>
  import NewsItem from './homepage/NewsItem.vue'
  import UpdatePlugin from './UpdatePlugin.vue'
  export default {
    name:'ConTent',
    components:{
      NewsItem,
      UpdatePlugin
    },
    props:{
      contentList:Array
    },
    data(){
      return{
        startY:0,
        endY:0,
        resultY:0,
        scroll:-1.3,
        scrollend:0.5,
        moveY:0
      }
    },
    methods:{
      touchStart:function(e){
        this.startY=e.touches[0].pageY
        if (this.scrollend!=0) {
          this.scrollend=0
        }
      },
      touchMove:function(e){
        // console.log(scrollTop);
        let diff=e.touches[0].pageY-this.moveY
        let height = e.touches[0].pageY-this.startY
        let v = -1/(150*(e.view.innerWidth/640))*5
        if (diff>0.05) {
          let b=this.scroll-v
          if (height>20) {
            if (b<0) {
              if (b>-0.5) {
                if (this.$store.state.update==='下拉刷新') {
                  this.$store.commit('changeUpdate','松开刷新')
                }
              }
              this.scroll=b
            }
          }
        }

        this.moveY=e.touches[0].pageY
      },
      touchEnd:function(e){
        this.endY=e.changedTouches[0].pageY
        this.resultY=this.startY-this.endY
        this.scroll=-1.3,
        this.$store.commit('changeUpdate','下拉刷新')

        this.scrollend=0.5
      }
    }

  }
</script>
<style lang="css">
.content{
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  sadsdasdasdasasdasdasd
  1231231
  z-index: 999;
}
.itemlist{

}
</style>
