<template id="">
<div class="mypage">
  <div class="login">
    <span>登录推荐更精准</span>
    <ul class="logintype">
      <li>手机</li>
      <li>微信</li>
      <li>qq</li>
      <li>登录</li>
    </ul>
    <span>今日阅读111分钟</span>
  </div>
  <ul class="mymenu">
    <li>收藏</li>
    <li>历史</li>
    <li>夜间</li>
  </ul>
  <ul class="setting">
    <li>我的关注</li>
    <li>消息通知</li>
    <li>我的钱包</li>
    <li>用户反馈</li>
    <li>系统设置</li>
  </ul>
</div>
</template>
<script type="text/javascript">
  export default{
    name:'MyPage'
  }
</script>
<style media="screen">
  .mypage{
    display: flex;
    flex-direction: column;
    height: 100%;

  }
  .login{
    flex: 3;
    background-color: rgb(43, 43, 43);
    color: #fff;
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    
  }
  .login span{
    flex: 1;
    }
  .login ul{
    flex: 2;
    display: flex;
    flex-direction: row;
  }
  .mymenu{
    flex: 1;
    background-color: rgb(255,255,255);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .setting{
    flex: 8;

  }
</style>
