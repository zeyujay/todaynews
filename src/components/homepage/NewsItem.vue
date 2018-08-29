<template id="">
  <div class="item scale-1px" v-if="$route.path=='/'">
    <div class="title" :class="[news.imgurl.length==1?'shorttitle':'longtitle']">
      <router-link :to="{name:'ArticleItem',params:{id:news.id}}">
        <h1>{{news.contenttype}}{{news.title}}</h1>
      </router-link>
    </div>

    <div :class="[news.imgurl.length==1?'shortimg':'longimg']">
      <img v-for="(item,key) in news.imgurl"
      :item="item" :key="key"src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535495741603&di=dfd23a42a977dd67dbd074c28ea976e7&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20140826%2FImg403790652.jpg">
    </div>

    <div class="info">
      <span>{{news.author}}</span>
      <span>{{news.commentnum>=10000?news.commentnum/10000+'万':news.commentnum}}评论</span>

        <i class="iconfont icon-cuohao scale4-1px" :class="[news.imgurl.length==1?'shorti':'longi']"@click="option($event)"></i>

    </div>
    <div class="overlay" v-show="show" @click="close()">
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
      option:function(e){
        this.show=!this.show
        document.getElementsByTagName("body")[0].className="jinzhi";
        document.getElementsByTagName("html")[0].className="jinzhi";
        if (e.y<e.view.innerHeight/2) {
          this.closedialog=100
        }else {
          this.closedialog=-20
        }
      },
      close:function(){
        this.show=!this.show
        document.body.removeAttribute("class","jinzhi");
      }

    }

  }
</script>
<style media="screen">
  .jinzhi{
    overflow: hidden;
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
    width: 1330px;
    height: 980px;
    position: absolute;
    bottom:0;
    border-radius: 50px;
    z-index: 10;
    right: 0;
    left: 0;
    margin-left: auto;
    margin-right: auto;

    }
  .closeitem ul{
    width: 1330px;
    height: 980px;
    display: flex;
    flex-direction: column;
    align-items: center;

  }
  .closeitem ul li{
    flex: 1;
    box-shadow: inset 0px -1px 1px -1px #c8c7cc;
    width: 1230px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 60px;
  }
  .closeitem ul li i{
    margin-right: 40px;
    color: #000;
    font-size: 55px;
  }
  .closeitem ul li span{
    font-size: 40px;
    color: rgb(144,144,144)
  }
</style>
