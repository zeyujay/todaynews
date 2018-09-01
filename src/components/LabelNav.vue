<template id="">
  <div class="labelnav scale-1px">
    <ul>
      <li v-for="item in ($route.path=='/'?homelabel:wmlabel)"
      :style="{color:$store.state.newsType==item.id?'rgb(197, 38, 48)':'black'}"
      @click="$store.state.newsType=item.id" >{{item.label}}
      </li>
    </ul>
    <!-- <div class="labelbutton"  @click="changeLabel()" v-show="$route.path=='/'?true:false">
      <i class="iconfont icon-icon-test1"></i>
    </div> -->
    <router-link :to="{ name: 'LabelList'}"class="labelbutton"v-show="$route.path=='/'?true:false">
      <i class="iconfont icon-icon-test1"></i>
    </router-link>
  </div>
</template>
<script type="text/javascript">
  import api from '../axios/api'
  export default{
    name:'LabelList',
    computed:{
      homelabel:function(){
        return this.$store.state.activelabel
      },
      wmlabel:function(){
        return this.$store.state.wmlabel
      }
    },
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
    background-color: #fff;
    overflow-y: hidden;
    position:fixed;
    top: 170px;
    height: 120px;
    z-index: 5;
    width: 100%;
  }
  .labelnav ul{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    -webkit-overflow-scrolling:touch;
    align-items: center;
    overflow-x: scroll;
    margin-left: 50px;
  }
  .labelnav li{
    white-space: nowrap;
    font-size: 50px;
    margin-right: 50px;
  }
  .labelbutton{
    position: absolute;
    height: 120px;
    right: 0;
    top: 0;
    text-align: center;
    box-shadow: -7px 0px 15px -1px rgba(238, 239, 243);
    width: 160px;
    background: -webkit-linear-gradient(right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 1));
    background: -o-linear-gradient(right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 1));
    background: -moz-linear-gradient(right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 1));
    background: linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 1));
    line-height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .labelbutton i{
    font-size: 50px;
  }
</style>
