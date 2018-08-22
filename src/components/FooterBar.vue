<template id="">
<div class="footer">
  <ul>
    <li class="footerLi" v-for="item in footerBar">
        <router-link :to="{name:item.page}">
          <i :class="'iconfont icon-'+item.icon"></i>
          <br>{{item.label}}
        </router-link>
    </li>
  </ul>
</div>
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
                  {id:4,label:'我的',page:'MyPage',icon:'daohanglan-05'}],
        isActive:false,

      }
    },
    methods:{
      }

  }
</script>
<style media="screen">
  .footer{
    position: fixed;
    bottom: 0rem;
    height:0.8rem;
    width: 100%;
    box-shadow: inset 0px 1px 1px -1px #c8c7cc;
    background-color: rgb(242, 243, 245);
  }
  .footerLi{
    float: left;
    width: 20%;
    text-align:center;
    color:#000;
    font-size: 0.2rem;
    line-height: 0.3rem;
    margin-top: 0.1rem;
    /* -webkit-text-stroke: 2px #ffffff; */
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
