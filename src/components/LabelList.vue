<template lang="html">
  <transition name="btot">
    <!-- <div class="labellist" v-show="$store.state.isShowLabel"> -->
    <div class="labellist" v-show="true">
      <div class="close"  style="padding-left:2%">
        <i class="iconfont icon-cuohao"@click="changeLabel()"></i>
      </div>
      <div class="toplabel">
        <strong>我的频道</strong>
        <span>点击进入频道</span>
        <button id="edit"type="button" name="button" @click="show=!show">
          <div v-show="!show">编辑</div><div v-show="show">完成</div>
        </button>
      </div>
        <transition-group name="del" tag="ul" class="activelabel">
            <li v-for="item in $store.state.activelabel" :key="item.id"><span @click="toLabel(item.id)">{{item.label}}</span>
              <transition name="close">
                <div class="closelabel" @click="$store.commit('deletelabel',item)"v-show="show" v-if="item.id>1">
                  <i class="iconfont icon-guanbi" ></i>
                </div>
              </transition>
            </li>
        </transition-group>

      <div class="toplabel">
        <strong>频道推荐</strong>
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
      toLabel(labelid){
        this.changeLabel()
        this.$store.commit('changeType',labelid)
      },
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

<style lang="css" scoped>
  .labellist{
    background-color: #fff;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 999;
    padding-top: 90px;
    overflow-y: scroll;
    top: 0;
  }
  .toplabel{
    padding: 36px;
  }
  .toplabel strong{
    font-size: 55px;
  }
  .toplabel span{
    color: rgb(135, 135, 135);
    font-size: 40px;
  }
  #edit{
    float: right;
    border: 2px solid rgb(197, 38, 48);
    background-color: #fff;
    border-radius: 8px;
    color: rgb(197, 38, 48);
    outline:none;
    width: 165px;
    height: 78px;
    font-weight: 200;
    font-size: 45px;
  }
  .activelabel{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 36px;
  }
  .activelabel li {
    position: relative;
    flex: 0 0 315px;
    height: 140px;
    text-align: center;
    background-color: rgb(242, 243, 245);
    line-height: 140px;
    border-radius: 5px;
    display: inline-block;
    margin-right: 36px;
    margin-bottom: 30px;
    font-size: 50px;
  }
  .closelabel{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    top: 0;
  }
  .activelabel i{
    position: absolute;
    width: 16px;
    height: 16px;
    top: -50%;
    right: 0;
    color: rgb(190, 190, 190);
  }
  .addlabel{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 36px;
  }
  .addlabel li {

    flex: 0 0 315px;
    height: 140px;
    text-align: center;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 5px rgba(183 , 183, 184, 0.5);
    line-height: 140px;
    margin-bottom: 30px;
    border-radius: 5px;
    margin-right: 36px;
    font-size: 45px;
  }
</style>
