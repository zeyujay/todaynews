<template id="">
<div class="wmvideo">
  <Header-Bar></Header-Bar>
  <Label-Nav :labelList="labelList" ></Label-Nav>
  <Con-Tent></Con-Tent>
</div>
</template>
<script type="text/javascript">
  import HeaderBar from '../HeaderBar.vue'
  import LabelNav from '../LabelNav.vue'
  import ConTent from '../ConTent.vue'
  import api from '../../axios/api'
  export default{
    name:'WmVideo',
    data(){
      return {
        labelList:[]
      }
    },
    components:{
      HeaderBar,
      LabelNav,
      ConTent
    },
    created(){
      this.getLabelList()
    },
    methods:{
      getLabelList:function(){
        api.getData('/wmlabel','').then(res=>{
          this.$store.commit('addWmLabel',res)
        })
      },
    }
  }
</script>
<style media="screen">
  .wmvideo{
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
</style>
