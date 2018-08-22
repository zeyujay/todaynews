<template id="">
  <div class="labelnav">
    <ul>
      <li v-for="item in labelList">{{item.label}}</li>
    </ul>
    <!-- <div class="labellistt">

    </div> -->
    <div class="labelbutton"  @click="changeLabel()">
      <i class="iconfont icon-icon-test1"></i>
      <!-- <router-link :to="{ name: 'LabelList'}">

      </router-link> -->

    </div>
    <!-- <div class="labellistb">

    </div> -->
  </div>
</template>
<script type="text/javascript">

  export default{
    name:'LabelList',
    props:{labelList:Array},
    data(){
      return {
      }
    },
    methods:{
      changeLabel:function(){
        this.$store.commit('changeLabel',true)

      }
    }

  }
</script>
<style media="screen">
  .labelnav{
    position: fixed;
    top: 0.8rem;
    width: 100%;
    z-index: 2;
    /* background-color: #fff; */
    height: 0.5rem;
  }
  .labelnav ul{
    height: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-box-shadow: inset 0px -1px 1px -1px #c8c7cc;
            box-shadow: inset 0px -1px 1px -1px #c8c7cc;
    -webkit-overflow-scrolling:touch;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    background-color: #fff
  }
  .labelnav li{
    -webkit-box-flex: 0;
        -ms-flex: 0 0 0.8rem;
            flex: 0 0 0.8rem;
    padding-left: 0.2rem;
  }
  .labelbutton{
    position: absolute;
    height: 0.5rem;
    right: 0;
    margin-top: -0.51rem;
    z-index: 1;
    text-align: center;
    -webkit-box-shadow: -7px 0px 15px -1px rgba(238, 239, 243);
            box-shadow: -7px 0px 15px -1px rgba(238, 239, 243);
    width: 0.8rem;
    line-height: 0.5rem;
    background: -webkit-linear-gradient(right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 1));
    background: -o-linear-gradient(right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 1));
    background: -moz-linear-gradient(right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 1));
    background: linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 1));

  }
  .labelbutton i{
    font-size: 0.3rem;
  }
</style>
