<template id="">
<div class="findperson">
  <div class="fpheader">
    <i id="search"class="iconfont icon-search"></i>
    <input type="text" name="" value="" placeholder="搜索用户名"/>
    <i class="iconfont icon-icon-p_lianxirenguanli"><br><span>通讯录</span>  </i>
  </div>

  <div class="content">
    <div class="seeuser">
      <strong>经常访问</strong>
      <div class="">
        <span>更多</span><i class="iconfont icon-fanhui"></i>
      </div>
    </div>

    <div class="typefind">
      <strong>分类查找</strong>
      <div class="">
        <span>更多</span><i class="iconfont icon-fanhui"></i>
      </div>
    </div>
    
    <ul class="user">

      <li class="userlist">
        <strong>推荐</strong>
        <div class="">
          <span>更多</span><i class="iconfont icon-fanhui"></i>
        </div>
        <ul>
          <li v-for="user in users" v-if="user.id<3">
            <img :src="user.touxiangurl" alt="">
            <div class="info">

              {{user.name}}<br>
              {{user.jieshao}}<br>
              {{user.fensinum<10000?user.fensinum:user.fensinum/10000+"万"}}粉丝
            </div>
            <div class="follow">
              关注
            </div>
          </li>
        </ul>
      </li>

      <li  class="userlist"v-for="type in usertype" v-if="type.id<6">
        <strong>{{type.name}}</strong>
        <div class="">
          <span>更多</span><i class="iconfont icon-fanhui"></i>
        </div>
          <ul>
            <li v-for="(user,index) in threeusers(users,type.id)":key="index"v-if="index<3">
              <img :src="user.touxiangurl" alt="">
              <div class="info">

                {{user.name}}<br>
                {{user.jieshao}}<br>
                {{user.fensinum<10000?user.fensinum:user.fensinum/10000+"万"}}粉丝
              </div>
              <div class="follow">
                关注
              </div></li>
          </ul>

      </li>

      <li class="userlist" style="height:100%">
        <strong>猜你喜欢</strong>
        <div class="">
          <span>更多</span><i class="iconfont icon-fanhui"></i>
        </div>
        <ul>
          <li v-for="user in users">
            <img :src="user.touxiangurl" alt="">
            <div class="info">

            {{user.name}}<br>
            {{user.jieshao}}<br>
            {{user.fensinum<10000?user.fensinum:user.fensinum/10000+"万"}}粉丝
          </div>
          <div class="follow">
            关注
          </div></li>
        </ul>
      </li>

    </ul>
  </div>

</div>
</template>
<script type="text/javascript">
  import api from '../../axios/api'
  export default{
    name:'FindPerson',
    computed:{

      usertype:function(){
        return this.$store.state.usertype
      },
      users:function(){
        return this.$store.state.users
      }
    },
    created(){
      this.getUsertype()
      this.getUsers()
    },
    methods:{
      threeusers:function(users,id){
        return users.filter(function(user){
          return user.type==id
        })
      },
      getUsertype:function(){
        api.getData('/usertype','').then(res=>{
          this.$store.commit('addUsertype',res)
          console.log(res);
        })
      },
      getUsers:function(){
        api.getData('/users','').then(res=>{
          this.$store.commit('addUsers',res)
        })
      }
    }
  }
</script>
<style media="screen" scoped>
  .findperson{
    height: 100%;
    background-color: rgb(241, 242, 245);
    width: 100%;
  }
  .fpheader{
    width: 100%;
    height: 0.8rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    padding: 0.1rem;
    position: fixed;
    top: 0;
    box-shadow: inset 0px -1px 1px -1px #c8c7cc;
  }
  .fpheader input{
    outline: none;
    flex: 8;
    height: 80%;
    background-color: rgb(241, 242, 245);
    border-radius: 5px;
    border: 0;
    padding-left: 5%;
  }
  #search{
    position: absolute;
  }
  .fpheader i{
    flex: 1;
    text-align: center;
    font-size: 0.3rem;
  }
  .fpheader span{
    font-size: 10px;
  }
  .content{
    margin-top: 0.8rem;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }
  .seeuser{
    height: 2rem;
    background-color: #fff;
    padding: 0.2rem;
    margin-bottom: 0.1rem;
  }
  .typefind{
    height: 2rem;
    background-color: #fff;
    padding: 0.2rem;
    margin-bottom: 0.1rem;
  }
  .user{

  }
  .user ul{
    width: 100%;
    height: 85%;
    display: flex;
    flex-direction: column;

  }
  .user ul li{
    /* flex: 1; */
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    margin-bottom: 0.1rem;
    align-items: center;
  }
  .user ul li img{
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    margin-right: 0.2rem;
  }
  .info{
    flex: 8
  }
  .follow{
    flex: 2;
    background-color: rgb(242, 65, 72);
    color: #fff;
    text-align: center;
    height: 0.45rem;
    border-radius: 4px;
    line-height: 0.45rem;
  }
  .userlist{
    height: 4rem;
    margin-bottom: 0.1rem;
    background-color: #fff;
    padding: 0.2rem;
    display: flex;;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
