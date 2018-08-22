<template lang="html">
  <transition name="btot">
    <div class="labellist" v-show="$store.state.isShowLabel">
    <div class="close" @click="changeLabel()">
      返回
    </div>
    </div>
  </transition>

</template>

<script>
export default {
  methods:{
    changeLabel:function(){
      this.$store.commit('changeLabel',false)
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
  }
</style>
