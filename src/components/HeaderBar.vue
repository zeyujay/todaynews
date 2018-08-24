<template id="">
<div class="header">
  <div class="upload" v-show="$route.path=='/search'?false:true">
    <i id="iupload" class="icon-camera-b iconfont"></i><br>
    <span>发布</span>
  </div>
  <div class="sousuo" v-show="$route.path=='/search'?true:false">
    <i>搜索</i>
  </div>

  <div class="search" :style="{width:$route.path=='/search'?'78%':'80%'}">
    <i id="isearch" class="iconfont icon-search"></i>
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
        upordown:true
      }
    },
    created(){
      this.getSearch()
      this.changeWord()
    },
    methods:{

      changeWord:function(){
        let self = this

        setInterval(function(){
          if (self.upordown==true) {

            if (self.change>-0.6*(self.changeword.length-1)) {
              self.change+=-0.6

            }else {
              self.upordown=false
              self.change+=0.6
            }
          }else {
            if (self.change<0) {
              self.change+=0.6
            }else {
              self.upordown=true
              self.change+=-0.6
            }
          }
        },20000)
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
    width: 100%;
    flex: 1.5;
    order: 0;
    background-color: rgb(197, 38, 48);
    overflow: hidden;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    /* z-index: 1 */
  }
  .search{
    background-color: #fff;
    width: 75%;
    height: 75%;
    border-radius: 5px;
    display: flex;
    align-items: center;
  }
  #isearch {
    font-size: 0.5rem;
    color: #000
  }
  .search input{
    border: 0px;
    outline:none;
    height: 95%;

  }
  .placeholder{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    height: 100%;
    margin-left: 0.05rem;

  }
  .placeholder ul{
    width: 100%;
    height: 100%;
    /* transform: translate(0,-0.65rem); */
    transition: transform 1s;
    float: left;
  }
  .placeholder li{
    float: left;
    margin-top: 0.15rem;
    margin-bottom: 0.15rem;
    padding-left: 0.15rem;
    padding-right: 0.15rem;
    text-align: center;
    border-right: 1px solid #000;
    /* box-shadow: inset -1.2px 0px 0px -1px #000; */

  }
  .upload{
    margin: auto 0.1rem;
    text-align: center;
    height: 0.6rem;
    width: 0.8rem;
    color: #fff
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
  .header i{
    font-size: 0.35rem;
    color: #fff
  }


</style>
