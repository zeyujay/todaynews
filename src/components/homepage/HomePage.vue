<template id="">
    <div class="home">
      <Header-Bar></Header-Bar>
      <Label-Nav></Label-Nav>
      <News-List></News-List>
    </div>
</template>
<script type="text/javascript">
  import api from "../../axios/api"
  import HeaderBar from '../HeaderBar.vue'
  import LabelNav from '../LabelNav.vue'
  import NewsList from './NewsList.vue'
  import UpdatePlugin from '../UpdatePlugin.vue'
  export default{
    name:'HomePage',
    components:{
      HeaderBar,
      LabelNav,
      NewsList,
      UpdatePlugin,
    },
    data(){
      return {
        labelList:[],
        show:true
      }
    },
    created:function(){
      this.getLabelList()
      this.getNewsList()
      this.$store.commit('changeFootBar',true)
    },
    methods:{
      getLabelList:function(){
        api.getData('/labellist','').then(res=>{
          this.$store.commit('addHomeLabel',res)
        })
      },
      getNewsList:function(){
        api.getData('/newslist','').then(res=>{
          this.$store.commit('addNewsList',res)
        })
      },

    }
  }
</script>
<style media="screen">
  .home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
