<template id="">
    <div class="home">
      <Header-Bar></Header-Bar>
      <Label-Nav :labelList="labelList" ></Label-Nav>
      <!-- <Update-Plugin></Update-Plugin> -->
      <Con-Tent></Con-Tent>
      <!-- <Footer-Bar></Footer-Bar> -->
      <Label-List></Label-List>
    </div>
</template>
<script type="text/javascript">
  import api from "../../axios/api"
  import HeaderBar from '../HeaderBar.vue'
  import LabelNav from '../LabelNav.vue'
  import ConTent from '../ConTent.vue'
  import LabelList from '../LabelList.vue'
  import UpdatePlugin from '../UpdatePlugin.vue'
  export default{
    name:'HomePage',
    components:{
      HeaderBar,
      LabelNav,
      ConTent,
      LabelList,
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
        api.getData('/','').then(res=>{
          this.$store.commit('addHomeLabel',res)
        })
      },
      getNewsList:function(){
        api.getData('/news','').then(res=>{
          this.$store.commit('addNews',res)
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
    position: absolute;
  }
</style>
