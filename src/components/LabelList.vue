<template lang="html">
  <transition name="btot">
    <div class="labellist" v-show="$store.state.isShowLabel">
      <div class="close" @click="changeLabel()">
        <i class="iconfont icon-fanhui"></i>
      </div>
      <div class="">
        我的频道
        点击进入频道
        <button id="edit"type="button" name="button" @click="show=!show">
          <span v-show="!show">编辑</span><span v-show="show">完成</span></button>
      </div><br>
        <transition-group name="del" tag="ul" class="activelabel">
            <li v-for="item in $store.state.activelabel" :key="item.id">{{item.label}}
              <transition name="close"><i @click="$store.commit('deletelabel',item)"class="iconfont icon-guanbi" v-show="show" v-if="item.id>1"></i></transition>
            </li>
        </transition-group>

      <div class="">
        <span>频道推荐</span>
        <span>点击添加频道</span>
      </div>
      <ul class="addlabel">
        <li v-for="item in $store.state.newslabel"
        @click="addActiveLabel(item)">+{{item.label}}</li>
      </ul>
    </div>
  </transition>

</template>

<script>
  export default {
    data(){
      return {
        show:false
      }
    },
    methods:{
      addActiveLabel(item){
        this.$store.commit('addActiveLabel',item)
      },
      changeLabel:function(){
        this.$store.commit('changeLabel',false)
        this.show=false
      }
    }
  }
</script>

<style lang="css">
  .labellist{
    background-color: #fff;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 5
  }
  .activelabel{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:  flex-start;
    padding-left: 0.3rem;
  }
  .activelabel li {
    position: relative;
    flex: 0 0 20%;
    height: 0.75rem;
    text-align: center;
    background-color: rgb(242, 243, 245);
    line-height: 0.75rem;
    margin-bottom: 0.2rem;
    margin-right: 0.3rem;

    border-radius: 5px;
    display: inline-block;
  }
  .activelabel i{
    width: 16px;
    height: 16px;
    position: absolute;
    top: -40%;
    right: -8px;
    color: rgb(190, 190, 190);
    /* margin-right: -0.2rem;
    margin-top: -0.2rem; */
    display: inline-block;


  }
  .addlabel{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:  flex-start;
    padding-left: 0.2rem;
    /* padding-right: 0.1rem; */
    /* align-content: space-around; */
  }
  .addlabel li {

    flex: 0 0 23%;
    height: 0.75rem;
    text-align: center;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 5px rgba(183 , 183, 184, 0.5);
    line-height: 0.75rem;
    margin-bottom: 0.1rem;
    margin-right: 0.1rem;

    border-radius: 5px;
    display: inline-block;
  }
  #edit{
    border: 1px solid rgb(197, 38, 48);
    border-radius: 8px;
    background-color: #fff;
    color: rgb(197, 38, 48);
    outline:none;
    width: 1rem;
    font-weight: 200;
  }
</style>
