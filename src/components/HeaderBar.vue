<template id="">
<div class="header">
  <div class="overlay" v-show="show" @click="show=!show" @touchmove.prevent>
  </div>
  <transition name="close">
    <div class="sifang" v-show="show">
      <ul>
        <li><i class="iconfont icon-tuwentag"></i><span>发图文</span></li>
        <li><i class="iconfont icon-shipin"></i><span>拍小视频</span></li>
        <li><i class="iconfont icon-videobluxiang"></i><span>上传视频</span></li>
        <li><i class="iconfont icon-tiwen"></i><span>提问</span></li>
      </ul>
    </div>
  </transition>
  <div class="upload" v-show="$route.path=='/search'?false:true"@click="show=!show">
    <i id="iupload" class="icon-camera-b iconfont"></i>
    <span>发布</span>
  </div>

  <div class="sousuo" v-show="$route.path=='/search'?true:false">
    <i>搜索</i>
  </div>
  <!-- :style="{width:$route.path=='/search'?'78%':'80%'}" -->
  <div class="search" >
    <i class="iconfont icon-search isearch"></i>
    <input type="search" name="" value="" placeholder="搜索你想要的" :style="{width:$route.path=='/search'?'85%':'0%'}"/>

    <label for="" class="placeholder" @click="clicksearch()" v-show="$route.path=='/search'?false:true">
      <ul :style="{'transform': 'translate(0,'+change+'rem)','transition':'all '+changetime+'s'}"
      v-for="word in changeword">
        <li v-for="item in word" :style="{'border-right':item.id%3==2?'0':'1px solid #000'}">{{item.label}}</li>
      </ul>
    </label>

  </div>

  <div class="goback">
    <button type="button" name="button" @click="goback"
    v-show="$route.path=='/search'?true:false">
    <i id="igoback"class="iconfont icon-fanhui"></i>
    </button>
  </div>

</div>
</template>
<script type="text/javascript">
  import api from '../axios/api'
  export default{
    name:'HeaderBar',
    data(){
      return {
        searchword:[],
        placeholder:'',
        change:0,
        changeword:[],
        changetime:1,
        upordown:true,
        show:false
      }
    },
    created(){
      this.getSearch()
      this.changeWord()
    },
    methods:{
      changeWord:function(){
        let that = this
        setInterval(function(){
          if (that.upordown==true) {
            if (that.change>-13*(that.changeword.length-1)/10) {
              that.change=(that.change*10-13)/10
            }else {
              that.upordown=false
              that.change=(that.change*10+13)/10
            }
          }else {
            if (that.change<0) {
              that.change=(that.change*10+13)/10
            }else {
              that.upordown=true
              that.change=(that.change*10-13)/10
            }
          }
        },10000)

      },
      clicksearch:function(){
        this.$router.push({name:'Search'})
      },
      goback:function(){
        this.$router.go(-1)
      },
      getSearch:function(){
        api.getData('/search','').then(res=>{
          this.searchword=res
          this.$store.state.searchword=res
          for (var i = 0; i < res.length; i+=3) {
            this.changeword.push(res.slice(i,i+3))
          }
        })
      }
    }
  }
</script>
<style media="screen">
  .header{
    width: 1440px;
    height: 170px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 6;
    background-color: rgb(197, 38, 48);
  }
  .upload{
    margin: 0 60px;
    text-align: center;
    color: #fff;
    display: flex;
    flex-direction: column;
  }
  .upload span{
    font-size: 35px;
  }
  .upload i{
    font-size: 80px;
    margin-bottom: 10px;
  }
  .search{
    background-color: #fff;
    width: 1180px;
    height: 130px;
    border-radius: 5px;
    display: flex;
    align-items: center;
  }
  .isearch {
    font-size: 48px;
    margin-left: 50px;
  }
  .search input{
    border: 0px;
    outline:none;
  }
  .placeholder{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 130px;
    font-size: 52px;
    display: flex;
    flex-direction: column;
  }
  .placeholder ul{
    height: 130px;
    transition: transform 1s;
    line-height: 90px;
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .placeholder li{
    text-align: center;
    border-right: 1px solid #000;
    padding: 0 20px;
  }
/* upload发布 */
  .overlay{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color:rgba(255, 255, 255, 0);
    z-index: 9;
  }
  .sifang{
    width: 500px;
    height: 560px;
    right: 20px;
    bottom: -590px;
    position: absolute;
    z-index: 10;
    background-color: rgba(28, 28, 28);
    border-radius: 10px;
    color: #fff;

  }
  .sifang ul{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .sifang ul li{
    flex:1;
    padding: 0 40px;
    border-bottom: 1px solid rgb(35,35,35);
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
  }
  .sifang ul li i{
    flex: 1;
    font-size: 72px;
  }
  .sifang ul li span{
    flex: 1.5;
    font-size: 52px;
  }
  .sifang:before{
    width:0px;
    height:0px;
    border: 35px transparent solid ;
    border-bottom-color: rgba(28, 28, 28);
    position:absolute;
    bottom:550px;
    right:50px;
    content:""
  }
  .sousuo{
    width: 20%;
    text-align: center;
  }
  .goback button{
    border: 0;
    background-color: transparent;
    outline:none;
  }
  .goback button i{
    width: 10%;
    height: 100%;
    font-size: 0.5rem
  }
/* upload */

</style>
