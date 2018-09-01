<template lang="html">
  <transition name="btot">
    <div class="labellist"@touchmove.prevent>
      <div class="close">
        <i class="iconfont icon-cuohao"@click="changeLabel()"></i>
      </div>
      <div class="toplabel">
        <div class="">
          <strong>我的频道</strong>
          <span>点击进入频道</span>
        </div>

        <button id="edit"type="button" name="button" @click="show=!show">
          <div v-show="!show">编辑</div><div v-show="show">完成</div>
        </button>
      </div>
        <ul class="activelabel">
            <li v-for="(item,key) in $store.state.activelabel" :style="{color:item.id<2?(item.id==1?'rgb(240, 66, 73)':'rgb(135, 135, 135)'):'black'}"
            :key="key"><span @click="toLabel(item.id)">{{item.label}}</span>
              <transition name="close">
                <div class="closelabel" @click="$store.commit('deletelabel',item)"v-show="show" v-if="item.id>1">
                  <i class="iconfont icon-guanbi guanbi" ></i>
                </div>
              </transition>
            </li>
        </ul>

      <div class="toplabel">
        <div class="">
          <strong>频道推荐</strong>
          <span>点击添加频道</span>
        </div>
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
        let that=this
        that.$store.commit('addActiveLabel',item)
      },
      changeLabel:function(){
        this.$store.commit('changeLabel',false)
        this.show=false
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="css">
  .labellist{
    background-color: #fff;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 10;
    padding-top: 45px;
    overflow-y: scroll;
    top: 0;
  }
  .close{
    margin-left: 36px;
  }
  .toplabel{
    padding: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .toplabel strong{
    font-size: 55px;
  }
  .toplabel span{
    color: rgb(135, 135, 135);
    font-size: 40px;
  }
  #edit{
    border: 2px solid rgb(240, 66, 73);
    background-color: #fff;
    border-radius: 40px;
    color: rgb(240, 66, 73);
    outline:none;
    width: 165px;
    height: 78px;
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
    background-color: rgb(240, 242, 245);
    line-height: 140px;
    border-radius: 5px;
    display: inline-block;
    margin-right: 36px;
    margin-bottom: 30px;
    font-size: 50px;
  }
  .closelabel{
    width: 315px;
    height: 140px;
    position: absolute;
    z-index: 2;
    top: 0;
  }
  .closelabel i{
    position: absolute;
    top: -62px;
    right: -16px;
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
