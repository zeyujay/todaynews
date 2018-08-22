<template lang="html">

    <div class="searchpage">
      <Header-Bar></Header-Bar>
      <ul class="topword">
        <li v-for="item in searchword" v-if="item.id<3">{{item.label}}</li>
      </ul>
      <div class="historyword">
      </div>
      <div class="line">

      </div>
        <div class="like">猜你想搜的</div>
        <ul class="likeword">
          <li v-for="item in searchword" v-if="item.id>2">{{item.label}}</li>
        </ul>

    </div>

</template>

<script>
  import HeaderBar from './HeaderBar.vue'

  export default {
      name:'Search',
      components:{
        HeaderBar
      },
      data(){
        return{
          searchword:this.$store.state.searchword
        }
      },
      created(){
      },
      methods:{

      }
  }
</script>

<style lang="css">
  .searchpage{
    height: 100%;
    width: 100%;
    background-color: #fff;
    z-index: 5;
  }
  .topword{

  }
  .topword li{
    margin-top: 0.8rem;
    text-align: center;
    width: 33.3333333333%;
    height: 0.8rem;
    float: left;
    box-shadow: inset 0px -1px 1px -1px #c8c7cc;
    line-height: 0.8rem

  }
  .line{
    width: 100%;
    height: 0.2rem;
    background-color: rgba(217 , 217, 217, 0.5);
    float: left;

  }
  .like{
    width: 100%;
    height: 0.8rem;
    float: left;
    box-shadow: inset 0px -1px 1px -1px #c8c7cc;
    padding-left: 10px;
    line-height: 0.8rem;
    font-size: 0.25rem

  }
  .likeword li{
    text-align: left;
    width: 50%;
    height: 0.8rem;
    float: left;
    box-shadow: inset 0px -1px 1px -1px #c8c7cc;
    line-height: 0.8rem;
    padding-left: 10px;
  }
</style>
