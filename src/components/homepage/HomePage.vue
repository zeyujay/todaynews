<template id="">
    <div class="home">
      <Header-Bar></Header-Bar>
      <Label-Nav :labelList="labelList" ></Label-Nav>
      <Update-Plugin></Update-Plugin>
      <Con-Tent :contentList="newsList"></Con-Tent>
      <Footer-Bar></Footer-Bar>
      <Label-List></Label-List>
    </div>
</template>
<script type="text/javascript">
  import api from "../../axios/api"
  import HeaderBar from '../HeaderBar.vue'
  import LabelNav from './LabelNav.vue'
  import ConTent from '../ConTent.vue'
  import FooterBar from '../FooterBar.vue'
  import LabelList from '../LabelList.vue'
  import UpdatePlugin from '../UpdatePlugin.vue'
  export default{
    name:'HomePage',
    components:{
      HeaderBar,
      LabelNav,
      ConTent,
      FooterBar,
      LabelList,
      UpdatePlugin
    },
    data(){
      return {
        labelList:[],
        newsList:[],
      }
    },
    created:function(){
      this.getLabelList()
      this.getNewsList()
      this.$store.commit('changeFootBar',true)
    },
    methods:{
      getLabelList:function(){
        api.getData('/','').then(res=>{
          this.labelList = res
        })
      },
      getNewsList:function(){
        api.getData('/news','').then(res=>{
          this.newsList = res
        })
      },

    }
  }
</script>
<style media="screen">
  .home{
    width: 100%;
    height: 100%;

  }
</style>
