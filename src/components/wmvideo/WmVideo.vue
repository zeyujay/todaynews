<template id="">
<div class="wmvideo">
  <Header-Bar></Header-Bar>
  <Label-Nav :labelList="labelList" ></Label-Nav>
  <Con-Tent></Con-Tent>
  <Footer-Bar></Footer-Bar>
</div>
</template>
<script type="text/javascript">
  import HeaderBar from '../HeaderBar.vue'
  import LabelNav from '../LabelNav.vue'
  import FooterBar from '../FooterBar.vue'
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
      FooterBar,
      LabelNav,
      ConTent
    },
    created(){
      this.getLabelList()
    },
    methods:{
      getLabelList:function(){
        api.getData('/','').then(res=>{
          this.labelList = res
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
