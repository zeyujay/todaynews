<template id="">
  <div class="labelnav">
    <ul>
      <li v-for="item in $store.state.activelabel" :style=""
      @click="$store.state.contentType=item.id">{{item.label}}</li>
    </ul>
    <div class="labelbutton"  @click="changeLabel()">
      <i class="iconfont icon-icon-test1"></i>
    </div>
  </div>
</template>
<script type="text/javascript">
  import api from '../axios/api'
  export default{
    name:'LabelList',
    props:{labelList:Array},

    methods:{
      getLabelList:function(){
        api.getData('/','').then(res=>{
          this.labelList = res
        })
      },
      changeLabel:function(){
        this.$store.commit('changeLabel',true)

      }
    }

  }
</script>
<style media="screen">
  .labelnav{
    height: 100%;
    width: 100%;
    flex: 1.1;
    order: 1;
    background-color: #fff;
    overflow-y: hidden;

    box-shadow: inset 0px -1px 1px -1px #c8c7cc;
    position:relative;
    /* display: flex; */
  }
  .labelnav ul{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    -webkit-overflow-scrolling:touch;
    align-items: center;
    overflow-x: scroll;
  }
  .labelnav li{
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    white-space: nowrap;
    font-size: 0.3rem;
  }
  .labelbutton{
    /* position: absolute; */
    position: absolute;
    height: 99%;
    right: 0;
    top: 0;
    /* z-index: 100; */
    text-align: center;
    box-shadow: -7px 0px 15px -1px rgba(238, 239, 243);
    width: 0.8rem;

    background: -webkit-linear-gradient(right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 1));
    background: -o-linear-gradient(right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 1));
    background: -moz-linear-gradient(right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 1));
    background: linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 1));

  }
  .labelbutton i{

line-height: 200%;
  }

</style>
