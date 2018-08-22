<template lang="html">
  <div class="pulldown">
    <span>{{$store.state.update}}</span>
  </div>
</template>

<script>
  export default {
    name:'UpdatePlugin',
    data(){
      return{
      }

    },
    methods:{

    }
  }
</script>

<style lang="css">
.pulldown{
  width: 100%;
  height: 1.3rem;
  text-align: center;
  background-color:rgba(242 , 243, 245, 1);
  padding-top: 1.0rem;
  display: inline-block;
  z-index: 999;
}
</style>
