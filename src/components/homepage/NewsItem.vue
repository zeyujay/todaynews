<template id="">
  <div class="item" v-if="$route.path=='/'">
    <div class="title" :style="{width:news.imgurl.length==1?'67%':'100%'}">
      <router-link :to="{name:'ArticleItem',params:{id:news.id}}">
        <h1>{{news.contenttype}}{{news.title}}</h1>
      </router-link>
    </div>
    <div class="img" :style="{width:'33%'}">
      <img v-for="(item,key) in news.imgurl"
      :item="item" :key="key":src="item.url" alt="333">
    </div>
    <div class="info">
      <span>{{news.author}}</span>
      <span>{{news.commentnum>=10000?news.commentnum/10000+'万':news.commentnum}}评论</span>
      <i class="iconfont icon-cuohao" @click="close($event)"></i>
    </div>
    <div class="overlay" v-show="show" @click="show=!show">
    </div>
    <transition name="close">
    <div class="closeitem" v-show="show":style="{transform:'translate(0,'+closedialog+'%)'}">
      <ul>
        <li @click="removeNews(news.id)"><i class="iconfont icon-error-1"></i><div><strong>不感兴趣</strong><br><span>减少这类内容</span></div><i></i> </li>
        <li><i class="iconfont icon-iconfontgantanhao"></i><div><strong>反馈垃圾内容</strong><br><span>低俗，标题党等</span></div><i></i> </li>
        <li @click="removeNews(news.id)"><i class="iconfont icon-chengyuan-shanchu"></i><div><strong>拉黑作者:{{news.author}}</strong></div><i></i></li>
        <li><i class="iconfont icon-pingbi1"></i><div><strong>屏蔽</strong><br><span v-for="item in news.keywords">{{item.keyword}}、</span></div><i></i></li>
      </ul>
    </div>
  </transition>
  </div>
</template>
<script type="text/javascript">
  export default{
    name:'NewsItem',
    props:{
      newsitem:Object
    },
    data(){
      return {
        news:this.newsitem,
        show:false,
        closedialog:0
      }
    },
    methods:{
      removeNews:function(newsid){
        this.show=!this.show
        let that=this
        setTimeout(function(){
          that.$store.commit('removeNews',newsid)
        },1)


      },
      close:function(e){
        this.show=!this.show
        if (e.y<e.view.innerHeight/2) {
          this.closedialog=100
        }else {
          this.closedialog=-20
        }
      }
    }

  }
</script>
<style media="screen">
  .item{
    box-shadow: inset 0px -1px 1px -1px #c8c7cc;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-shrink: 0;
    position: relative;
    padding: 0.2rem 0.1rem
  }
  .title{
    font-size: 0.3rem;
  }
  .img{
    height:80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .img img{
    width: 100%;
    height: 100%;

  }
  .info{
    margin-top: 0.1rem;
    flex: 0 0 100%;
    font-weight: 200;
    font-size: 0.1rem;

  }
  .info span{
    color: rgb(144,144,144)
  }
  .info i{
    float: right;
    width: 0.35rem;
    height: 0.20rem;
    border: 1px solid #000;
    border-radius: 0.1rem;
    text-align: center;
    line-height: 0.2rem;
    font-size: 0.2rem;
  }
  .overlay{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(25,25,25,0.1);
    z-index: 5;
  }
  .closeitem{
    background-color: #fff;
    width: 94%;
    height: 3rem;
    z-index: 5;
    position: absolute;
    bottom:0;
    border-radius: 0.1rem;
    z-index: 10;
    right: 0;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    }
  .closeitem ul{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

  }
  .closeitem ul li{
    flex: 1;
    box-shadow: inset 0px -1px 1px -1px #c8c7cc;
    width: 95%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .closeitem ul li i{
    margin-right: 0.2rem;
    color: #000
  }
  .closeitem ul li span{
    font-size: 0.1rem;
    color: rgb(144,144,144)
  }
</style>
