<template id="">

  <div class="item clearfix" :news="news">
    <div class="title">
      <router-link :to="{name:'ArticleItem',params:{id:news.id}}">
        <h1>{{news.title}}</h1></router-link>
    </div>
    <br>
    <div class="img" v-if="news.imgurl.length==1">
      <img v-for="(item,key) in news.imgurl"
      :item="item" :key="key":src="item.url" alt="333">
    </div>
    <div class="img3" v-if="news.imgurl.length==3">
      <img v-for="(item,key) in news.imgurl"
      :item="item" :key="key":src="item.url" alt="333">
    </div>
    <br>
    <div class="info">
      <span>{{news.author}}</span>
      <span>{{news.commentnum}}评论</span>
    </div>


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
        news:this.newsitem

      }
    }

  }
</script>
<style media="screen">
  .item{
    overflow: hidden;
    padding: 10px;
    box-shadow: inset 0px -1px 1px -1px #c8c7cc;
    margin-left: 10px;
    margin-right: 10px;
  }
  .item h1{
    font-size: 20px;
  }
  .title{
    width: 70%;
    float: left;
    margin-bottom: 10px
  }
  .info{
    margin-top: 10px;
    float: left;
  }
  .img img{
    float: right;
    height: 1.7rem;
    width: 1.7rem;
  }
  .img3 img{
    float: left;
    height: 1.8rem;
    width: 1.8rem;
    margin-left: 5px
  }
</style>
