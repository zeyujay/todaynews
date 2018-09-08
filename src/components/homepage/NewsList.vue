<template lang="html">
  <div class="newslist"@touchstart="touchStart($event)"
  @touchmove="touchMove($event)"
  @touchend="touchEnd($event)">
    <div class="homelist"id="homelist":style="pulldown">
      <div class="pulldown">
        <canvas id="refreshicon"></canvas><br>
        <span>{{this.update?(this.refreshing?'正在刷新':'松开刷新'):(this.unrefresh?'取消刷新':'下拉刷新')}}</span>
      </div>
      <!-- <div class="updateinfo">
        dsdsd
      </div> -->
      <ul id='pullupdate'>
        <li class="item scale-1px" v-for="(item,key) in newstype===1?newsList:newsFilter(newstype)" :key='key'>

            <div class="title" :class="[item.imgurl.length==1?'shorttitle':'longtitle']">
              <router-link :to="{name:'ArticleItem',params:{id:item.id}}">
                <h1>{{item.newstype}}{{item.title}}</h1>
              </router-link>
            </div>

            <div :class="[item.imgurl.length==1?'shortimg':'longimg']">
              <img v-for="(item,key) in item.imgurl"
              :item="item" :key="key"src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535495741603&di=dfd23a42a977dd67dbd074c28ea976e7&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20140826%2FImg403790652.jpg">
            </div>

            <div class="info">
              <span>{{item.author}}</span>
              <span>{{item.commentnum>=10000?item.commentnum/10000+'万':item.commentnum}}评论</span>
              <i class="iconfont icon-cuohao scale4-1px" :class="[item.imgurl.length==1?'shorti':'longi']"
              @click.stop="itemOption($event,item)"></i>
            </div>
        </li>
      </ul>
      <div class="pullup">
        点击推荐更多
      </div>
    </div>
  </div>

</template>

<script>
  import api from '../../axios/api'
  import pullUpdate from '../../mixins/pullUpdate'
  export default {
    mixins:[pullUpdate],
    computed:{
      newstype(){
        return this.$store.state.newsType
      },
      newsList(){
        return this.$store.state.newsList
      },
      pulldown(){
        return{
          transform:'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,'+this.cscroll+',0,1)'
        }
      }
    },
    data(){
      return{
        banupdate:true,
        scroll:0,
        showupdate:-450,
        top:0,
      }
    },
    methods:{
      newsFilter(typeid){
        return this.$store.getters.getNewsOfType(typeid)
      },
      itemOption:function(e,item){
        this.$store.commit('changeNewsOption',true)
        this.$store.commit('setcurrentNews',item)
        this.$store.commit('setClickNewsY',e.y/100/(e.view.document.body.clientWidth/1440))

        if (e.y<e.view.innerHeight/2) {
          // 上半部
          this.$store.commit('setNewsOptionDialog',0)
        }else {
          // 下半部
          this.$store.commit('setNewsOptionDialog',-100)
        }

      },
      getUpdate:function(){
        api.getData('/newslist','').then(res=>{
          // this.$store.commit('addNewsList',res.newsdata)
          this.cscroll=this.scroll*this.scale
          this.update=false
          this.refreshing=false
        })
      }
    }
  }
</script>
<style lang="css">
  canvas{
    height: 180px;
    width: 180px;
  }
  .newslist{
    position: fixed;
    top: 0;
    bottom: 0;
    height: 100%;
    padding-bottom: 150px;
  }
  .homelist{
    width: 100%;
    background-color: #fff;
    transition-duration:600ms;
    transition-timing-function:cubic-bezier(0.1,0.57,0.1,1);
    margin-bottom: 150px;
    height: 100%;
  }
  .pulldown{
    width: 100%;
    height: 1000px;
    text-align: center;
    padding-top: 700px;
    background-color:rgba(242 , 243, 245, 1);
    font-size: 35px;
    color: rgb(135,135,135)
  }
  .updateinfo{
    position: fixed;
    top: 0px;
    z-index: 99;
    width: 100%;
    height: 200px;
    background-color: #523652;
  }
  .homelist ul{
    padding: 0 52px;
  }
  .scale-1px:after{
    background: rgb(226,226,226)
  }
  .scale4-1px:after{
    border: 1px solid rgb(144,144,144);
  }
  .item{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-shrink: 0;
    position: relative;
    padding: 50px 0;
  }
  .title{
    font-size: 60px;
  }
  .shortimg{

  }
  .longimg{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .shortimg img{
    width: 325px;
    height:200px;
    margin-top: 65px;
  }
  .longimg img{
    width: 435px;
    height:280px;
    margin: 30px 5px;
  }
  .longtitle{
    width:1340px
  }
  .shorttitle{
    width: 850px;
    margin-right: 145px;

  }
  .info{
    flex: 0 0 100%;
    font-size: 40px;
    color: rgb(144,144,144)
  }
  .info i{
    width: 60px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 20px;
    border-radius: 18px;
    border: 1px solid rgb(144,144,144);
  }
  .shorti{
    float: right;
  }
  .longi{
    float: right;
  }

</style>
