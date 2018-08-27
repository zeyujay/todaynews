<template id="">
  <ul class="footer">
    <li v-for="item in footerBar">
        <router-link :to="{name:item.page}">
          <i :class="'iconfont icon-'+item.icon"></i>
          <br>{{item.label}}
        </router-link>
    </li>
  </ul>
</template>
<script type="text/javascript">
  export default{
    name:'FooterBar',
    data(){
      return {
        footerBar:[{id:0,label:'首页',page:'HomePage',icon:'home'},
                  {id:1,label:'西瓜视频',page:'WmVideo',icon:'bofangkongxin'},
                  {id:2,label:'找人',page:'FindPerson',icon:'icon-p_lianxirenguanli'},
                  {id:3,label:'小视频',page:'SmallVideo',icon:'huo'},
                  {id:4,label:'未登录',page:'MyPage',icon:'daohanglan-05'}],
        isActive:false,

      }
    },
    methods:{
      }

  }
</script>
<style media="screen">
  .footer {
    position: fixed;
    bottom: 0;
    height: 1rem;
    width: 100%;
    background-color: rgb(242, 243, 245);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    /* flex-wrap: nowrap; */
  }
  .footer li{
    text-align: center;
    flex: 1
  }
  .footerLi i{

    font-size: 0.3rem;
  }
  a:link{
    color: #000
  }
  a:visited{
    color: #000
  }
  a:hover{
    color: rgb(184, 63 , 64);
  }
  a:active{
    color: rgb(184, 63 , 64);
  }

</style>
